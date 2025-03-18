
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VklReadMockApi() {
    // khởi tạo state 
    const [vklListUser, setVklListUser] = useState([])
    // api
    const vklApiOnline = "https://67d8f32100348dd3e2a8d5b5.mockapi.io/k23cnt2_vukhanhlinh/vkl_users"
    // Đọc dữ liệu từ api bằng axios
    useEffect(()=>{
        axios
            .get(vklApiOnline)
            .then((vkl_response)=>{
                setVklListUser(vkl_response.data)
            })
            .catch((error)=>{
                console.log("Lỗi phát sinh");
            })
    },[])

    // view data
    const vklElementUser = vklListUser.map((vkl_item, index)=>{
        return(
            <tr>
                <td>{vkl_item.vklId}</td>
                <td>{vkl_item.vklFullName}</td>
                <td>{vkl_item.vklAge}</td>
                <td>{vkl_item.vklActive?'Hoạt động':'Khóa'}</td>
                <td>
                    <button>Sửa</button>
                    <button>Xóa</button>
                </td>
            </tr>
        )
    })
  return (
    <div className='alert alert-danger'>
        <h2>Danh sách</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                   vklElementUser
                }
            </tbody>
        </table>
    </div>
  )
}
