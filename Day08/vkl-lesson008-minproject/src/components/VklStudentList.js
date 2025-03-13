
import React, { Component } from 'react'
import VklStudent from './VklStudent'

export default class VklStudentList extends Component {
    // Hàm xử lý chức năng xem thông tin sinh viên
    vklHandleView = (vklStudent) => {
        // Chuyển dữ liệu lên vklApp
        this.props.onVklHandleView(vklStudent);
    };

    // Hàm xử lý chức năng xóa sinh viên
    vklHandleDelete = (vklID) => {
        // Chuyển dữ liệu lên vklApp
        this.props.onVklHandleDelete(vklID);
    };

    // Hàm xử lý chuyển sang chế độ sửa
    vklHandleEditMode = (vklStudent) => {
        // Chuyển dữ liệu lên vklApp
        this.props.onVklHandleEditMode(vklStudent);
    };

    render() {
        // Lấy dữ liệu từ props từ vklApp chuyển xuống 
        let { renderVklStudents } = this.props;

        // Chuyển dữ liệu vào VklStudent để hiển thị
        let vklElementStudent = renderVklStudents.map((vklItem, index) => {
            return <VklStudent 
                        key={index} 
                        index={index} 
                        renderVklStudent={vklItem} 
                        onVklHandleView={this.vklHandleView} 
                        onVklHandleDelete={this.vklHandleDelete} 
                        onVklHandleEditMode={this.vklHandleEditMode}
                    />
        });
        return (
            <div>
                <div className="card-body">
                    <h3 className="card-title">Danh sách sinh viên</h3>
                    <div className="table-responsive pt-3">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Mã sinh viên</th>
                                    <th>Tên sinh viên</th>
                                    <th>Tuổi</th>
                                    <th>Giới tính</th>
                                    <th>Ngày sinh</th>
                                    <th>Nơi sinh</th>
                                    <th>Địa chỉ</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vklElementStudent}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
