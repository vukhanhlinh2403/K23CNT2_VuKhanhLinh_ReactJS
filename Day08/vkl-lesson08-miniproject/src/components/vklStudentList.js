import React, { Component } from 'react'
import VklStudent from './vklStudent'
import VklStudent from './vklStudent';

class vklStudentList extends Component {
    constructor(props){
        super(props);

    }
    // ham xu ly su kien
    vklHandleView = (vklStudent)=>{
        // chuyen du lieu len vklApp
        this.props.onvklHandleView(vklStudent);
    }

    // Hàm xử lý chức năng xóa sinh viên
    vklHandleDelete = (vklID) => {
        // Chuyển dữ liệu lên NvkApp
        this.props.onvklHandleDelete(vklID);
    };

     // Hàm xử lý chuyển sang chế độ sửa
     vklHandleEditMode = (vklStudent) => {
        // Chuyển dữ liệu lên NvkApp
        this.props.onvklHandleEditMode(vklStudent);
    };
    render() {
        // lay du lieu cho props tu vklApp xuong
        let {rendervklStudents} = this.props;
        console.log("List:",rendervklStudents);
        // chuyen du lieu vao vklStudent de hien thi 
        let vklElementStudent = rendervklStudents.map((vklItem,index)=>{
            return <VklStudent key={index} index={index} rendervklStudent={vklItem} onvklHandleView={this.vklHandleView} 
                onvklHandleDelete={this.vklHandleDelete} 
                onvklHandleEditMode={this.vklHandleEditMode}
            />
        })
        return (
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
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {vklElementStudent}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default vklStudentList