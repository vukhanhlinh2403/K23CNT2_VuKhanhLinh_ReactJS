import React, { Component } from 'react'

class vklRenderListStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklStudents:[
                {vklId:"NTU001",vklName:"Vu khanh linh", vklAge:46, vklClass:"K23CNT1"},
                {vklId:"NTU002",vklName:"NGuyen quang a", vklAge:22, vklClass:"K23CNT2"},
                {vklId:"NTU001",vklName:"nguyen quang b", vklAge:89, vklClass:"K23CNT3"},
                {vklId:"NTU001",vklName:"nguyen quang c", vklAge:45, vklClass:"K23CNT4"},
            ],
        }
    }
  render() {
    let vklElement = this.state.vklStudents.map((vklItem, index)=>{
        return(
            <tr>
                    <td>{index+1}</td>
                    <td>{vklItem.vklId}</td>
                    <td>{vklItem.vklName}</td>
                    <td>{vklItem.vklAge}</td>
                    <td>{vklItem.vklClass}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
            </tr>
        )
    })
    return (
      <div className='alert alert-info'>
        <h2>danh sach sinh vien</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>vklId</th>
                    <th>vklName</th>
                    <th>vklAge</th>
                    <th>vklClass</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {vklElement}
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}
export default vklRenderListStudent