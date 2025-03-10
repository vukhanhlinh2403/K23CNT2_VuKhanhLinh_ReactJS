import React, { Component } from "react"
import VklControl from "./components/vklControl"
import VklStudentList from "./components/vklStudentList"
import VklForm from "./components/vklForm"


class vklApp extends Component {
  constructor(prpos) {
    super(prpos);
    this.state = {
      vklStudents: [
        { vklId: "S001", vklStudentName: "vu khanh linh", vklAge: 10, vklGender: "Nam", vklBirthday: "21/05/1879", vklBirthPlace: "Hn", vklAddress: "toa VCN, 25 vu ngoc phan" },
        { vklId: "S002", vklStudentName: "chu nguyen truong", vklAge: 18, vklGender: "Nu", vklBirthday: "20/05/1879", vklBirthPlace: "Hp", vklAddress: "trung quoc" },
        { vklId: "S003", vklStudentName: "tan thuy hoang", vklAge: 10, vklGender: "Nam", vklBirthday: "25/05/1979", vklBirthPlace: "HCM", vklAddress: "trung quoc" },
        { vklId: "S004", vklStudentName: "hoang thuy linh", vklAge: 10, vklGender: "Nam", vklBirthday: "25/05/1979", vklBirthPlace: "HCM", vklAddress: "30 can gio" },
      ],
      vklStudent:{},
      isEdit: false,
    }
  }


  // ham xu ly su kien  view Student 

  vklHandleView = (vklStudent) => {
    this.setState({
      vklStudent:vklStudent,
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
      vklStudents: this.state.vklStudents.map(student => student.vklId === editedStudent.vklId ? editedStudent : student),
      isEdit: false,
      vklStudent: {},
    })
  }


  vklHandleEditMode = (vklStudent) => {
    this.setState({
      vklStudent: vklStudent,
      isEdit: true,
    })
  }
  render() {
    //log
    console.log("ViewStudent:", this.state.vklStudent);
    
    return (
      <div>
        <h1 className='text-center'>Vu Khanh Linh K23CNT2 - Mini Project</h1>
        <section className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">

                {/* header */}
                <VklControl />
                {/* danh sach sinh vien */}
                <VklStudentList rendervklStudents={this.state.vklStudents} onvklHandleView={this.vklHandleView} />
              </div>
            </div>


            <div className="col-5 grid-margin">
              {/* form */}
              <VklForm rendervklStudent = {this.state.vklStudent} />
            </div>

          </div>
        </section>

      </div>
    )
  }
}
export default vklApp;