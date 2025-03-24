import React, { useState } from 'react'

export default function VklUseStateListObject() {
    // mockdata
    const listStudent = [
        {vklId:"SV001",vklName:"Trịnh Văn Chung", vklAge:45, vklClass:"K23CNT1"},
        {vklId:"SV002",vklName:"Nguyễn Quang A", vklAge:22, vklClass:"K23CNT1"},
        {vklId:"SV003",vklName:"Nguyễn Quang B", vklAge:21, vklClass:"K23CNT1"},
        {vklId:"SV004",vklName:"Nguyễn Quang C", vklAge:23, vklClass:"K23CNT1"},
    ];
    // tạo state với hook
    const [vklStudents, setVklStudents] = useState(listStudent);
    // render data
    let vklElement = vklStudents.map((vklItem, index)=>{
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
    <div>
        <h2>Danh sách sinh viên</h2>
        <table>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>vklID</th>
                    <th>vklName</th>
                    <th>vklAge</th>
                    <th>vklClass</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {vklElement}
            </tbody>
        </table>
    </div>
  )
}