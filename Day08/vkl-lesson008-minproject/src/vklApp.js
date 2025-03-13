import React, { Component } from 'react'
import VklControl from './components/VklControl'
import VklStudentList from './components/VklStudentList'
import VklForm from './components/VklForm'

export default class vklApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vklStudents: [
        { vklID: 'SV001', vklName: 'Nguyễn Văn A', vklAge: 20, vklGender: 'Nam', vklBirthday: '01/01/2000', vklBirthPlace: 'Hà Nội', vklAddress: '323 Kim Ma' },
        { vklID: 'SV002', vklName: 'Nguyễn Văn B', vklAge: 21, vklGender: 'Nam', vklBirthday: '02/02/2000', vklBirthPlace: 'Hà Nội', vklAddress: '323 Kim Ma' },
        { vklID: 'SV003', vklName: 'Nguyễn Văn C', vklAge: 22, vklGender: 'Nam', vklBirthday: '03/03/2000', vklBirthPlace: 'Hà Nội', vklAddress: '323 Kim Ma' },
        { vklID: 'SV004', vklName: 'Nguyễn Văn D', vklAge: 23, vklGender: 'Nam', vklBirthday: '04/04/2000', vklBirthPlace: 'Hà Nội', vklAddress: '323 Kim Ma' },
      ],
      vklStudent: {},
      isEdit: false, // Biến để kiểm tra trạng thái sửa
    }
  }

  // Hàm xử lí sự kiện xem thông tin sinh viên
  vklHandleView = (vklStudent) => {
    this.setState({
      vklStudent: vklStudent,
      isEdit: false,
    })
  }

  // Hàm xử lí sự kiện xóa sinh viên
  vklHandleDelete = (vklID) => {
    this.setState({
      vklStudents: this.state.vklStudents.filter(student => student.vklID !== vklID)
    })
  }

  // Hàm xử lí sự kiện thêm mới sinh viên
  vklHandleAdd = (newStudent) => {
    this.setState({
      vklStudents: [...this.state.vklStudents, newStudent]
    })
  }

  // Hàm xử lí sự kiện sửa sinh viên
  vklHandleEdit = (editedStudent) => {
    this.setState({
      vklStudents: this.state.vklStudents.map(student => student.vklID === editedStudent.vklID ? editedStudent : student),
      isEdit: false,
      vklStudent: {},
    })
  }

  // Hàm xử lí chuyển sang chế độ sửa
  vklHandleEditMode = (vklStudent) => {
    this.setState({
      vklStudent: vklStudent,
      isEdit: true,
    })
  }

  render() {
    // Log
    console.log("View Student : ", this.state.vklStudent);
    return (
      <div>
        <h1 className='text-center'>Vũ Khánh Linh - K23CNT2 - Mini Project 01 </h1>
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">

              {/*header */}
              <VklControl onVklHandleAdd={this.vklHandleAdd} />
              {/*Danh sách SV */}
              <VklStudentList 
                renderVklStudents={this.state.vklStudents} 
                onVklHandleView={this.vklHandleView} 
                onVklHandleDelete={this.vklHandleDelete} 
                onVklHandleEditMode={this.vklHandleEditMode}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/*Form */}
            <VklForm 
              renderVklStudent={this.state.vklStudent} 
              isEdit={this.state.isEdit} 
              onVklHandleAdd={this.vklHandleAdd} 
              onVklHandleEdit={this.vklHandleEdit} 
            />
          </div>
        </div>
      </div>
    )
  }
}