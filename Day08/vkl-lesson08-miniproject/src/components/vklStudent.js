import React, { Component } from 'react'

class vklStudent extends Component {
    constructor(props){
        super(props);
    }
    // ham xu ly chuc nang
    vklHandleView = (vklStudent)=>{
        //chuyen len vklStudentList
        this.props.onvklHandleView(vklStudent);
    }

     // Hàm xử lý chức năng xóa sinh viên
     vklHandleDelete = (vklID) => {
        // Chuyển lên NvkStudentList
        this.props.onvklHandleDelete(vklID);
    }

     // Hàm xử lý chuyển sang chế độ sửa
     vklHandleEdit = (vklStudent) => {
        // Chuyển lên NvkStudentList
        this.props.onvklHandleEditMode(vklStudent);
    }
  render() {
    //lay doi tuong du lieu  chuyen tu vklStudentList
    let {rendervklStudent, key} = this.props;
    console.log("Student:",rendervklStudent);
    return (
        <>
                            <tr>
                                <td>{key}</td>
                                <td>{rendervklStudent.vklId}</td>
                                <td>{rendervklStudent.vklStudentName}</td>
                                <td>{rendervklStudent.vklAge}</td>
                                <td>{rendervklStudent.vklGender}</td>
                                <td>
                                    <div className="template-demo">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-icon-text"
                                            onClick={()=>this.vklHandleView(rendervklStudent)}
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-icon-text"
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success btn-icon-text"
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
export default vklStudent