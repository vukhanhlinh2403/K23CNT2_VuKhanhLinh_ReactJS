import React, { Component } from 'react'
import VklStudent from './vklStudent'
import vklStudent from './vklStudent';

class vklStudentList extends Component {
    constructor(props){
        super(props);

    }
    // ham xu ly su kien
    vklHandleView = (vklStudent)=>{
        // chuyen du lieu len vklApp
        this.props.onvklHandleView(vklStudent);
    }
    render() {
        // lay du lieu cho props tu vklApp xuong
        let {rendervklStudents} = this.props;
        console.log("List:",rendervklStudents);
        // chuyen du lieu vao vklStudent de hien thi 
        let vklElementStudent = rendervklStudents.map((vklItem,index)=>{
            return <VklStudent key={index} rendervklStudent={vklItem} onvklHandleView={this.vklHandleView} />
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