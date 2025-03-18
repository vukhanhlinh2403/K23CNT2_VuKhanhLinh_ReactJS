
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function VklReadApiLocal() {
    // khởi tạo state
    const [vklListUser, setVklListUser] = useState([])
    // đọc dữ liệu từ api local  và set cho tvcListUser
    const apiUrl = "http://localhost:3001/users"
    // Lấy danh sách từ apiUrl
    useEffect(()=>{
        axios
            .get(apiUrl)
            .then((vklResponse)=>{
                setVklListUser(vklResponse.data)
            })
            .catch((error)=>{
                console.log("Lỗi");
            })
    },[])

  return (
    <div>
        <h2>Đọc dữ liệu từ API Local</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    vklListUser.map((vklItem, index)=>{
                        return (
                            <tr>
                                <td>{vklItem.fullName}</td>
                                <td>{vklItem.age}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
