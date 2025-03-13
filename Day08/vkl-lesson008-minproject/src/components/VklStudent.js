
import React, { Component } from 'react'

export default class VklStudent extends Component {

    // Hàm xử lý chức năng xem thông tin sinh viên
    vklHandldeView = (vklStudent) => {
        // Chuyển lên VklStudentList
        this.props.onVklHandleView(vklStudent);
    }

    // Hàm xử lý chức năng xóa sinh viên
    vklHandleDelete = (vklID) => {
        // Chuyển lên vklStudentList
        this.props.onVklHandleDelete(vklID);
    }

    // Hàm xử lý chuyển sang chế độ sửa
    vklHandleEdit = (vklStudent) => {
        // Chuyển lên vklStudentList
        this.props.onVklHandleEditMode(vklStudent);
    }

    render() {
        // Lấy đối tượng dữ liệu từ vklStudentList
        let { renderVklStudent } = this.props;
        
        return (
            <>
                <tr>
                    <td>{this.props.index + 1}</td>
                    <td>{renderVklStudent.vklID}</td>
                    <td>{renderVklStudent.vklName}</td>
                    <td>{renderVklStudent.vklAge}</td>
                    <td>{renderVklStudent.vklGender}</td>
                    <td>{renderVklStudent.vklBirthday}</td>
                    <td>{renderVklStudent.vklBirthPlace}</td>
                    <td>{renderVklStudent.vklAddress}</td>
                    <td>
                        <div className="template-demo">
                            <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                                onClick={() => this.vklHandldeView(renderVklStudent)}
                            >
                                Xem
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                                onClick={() => this.vklHandleEdit(renderVklStudent)}
                            >
                                Sửa
                            </button>
                            <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                                onClick={() => this.vklHandleDelete(renderVklStudent.vklID)}
                            >
                                Xóa
                            </button>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
