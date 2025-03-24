import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function VklListUser() {
    //state
    const [VklListUser, setVklListUser] = useState([])
    const vklApi = "https://67e0cffa58cc6bf78522fa48.mockapi.io/vkl-k23cnt2-vukhanhlinh-2310900056/vkl_users"

    useEffect(()=>{
        axios.get(vklApi)
        .then(vkl_response => {
            console.log(vkl_response.data);
            setVklListUser(vkl_response.data)
        })
        .catch(error => {
            console.error('Co loi xay ra:', error);
        });
    },[])


    const vklHandleDelete = async (vklId)=>{
        if(window.confirm('Ban co muon xoa ko?')){
            await axios.delete(vklApi+"/"+vklId);

            let vklListUserDelete = VklListUser.filter(x=>x.id !=vklId);
            setVklListUser(vklListUserDelete)
        }
    }

    const navigate = useNavigate();
    const vklHandleUpdate = (vklId) => {
        navigate(`/vkl-edit-user/${vklId}`);
    }
  return (
    <div>
        <h2>danh sach user </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {/*    // hien thi danh sach user  */}
                {
                    VklListUser.map((vklUserItem, index)=>{
                        return(
                            <tr>
                                <td>{vklUserItem.id}</td>
                                <td>{vklUserItem.vkl_name}</td>
                                <td>{vklUserItem.vkl_email}</td>
                                <td>{vklUserItem.vkl_phone}</td>
                                <td>
                                    {vklUserItem.vkl_active?
                                    <span className='badge text-bg-success'>Hoat dong</span>
                                    :<span className='badge text-bg-danger'>tam khoa</span>}
                                </td>
                                <td>
                                    <button onClick={()=> vklHandleUpdate(vklUserItem.id)}>edit</button>
                                    <button onClick={(ev)=> vklHandleDelete(vklUserItem.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
