
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VklListUser() {
    // khởi tạo state 
    const [vklListUser, setVklListUser] = useState([])
    // api
    const vklApiOnline = "https://67da463c35c87309f52bbe3f.mockapi.io/K23CNT2_VuKhanhLinh2403/vkl_user"
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
                <td>{vkl_item.id}</td>
                <td>{vkl_item.vkl_name}</td>
                <td>{vkl_item.vkl_email}</td>
                <td>{vkl_item.vkl_phone}</td>
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
                    <th>Email</th>
                    <th>Phone</th>
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
