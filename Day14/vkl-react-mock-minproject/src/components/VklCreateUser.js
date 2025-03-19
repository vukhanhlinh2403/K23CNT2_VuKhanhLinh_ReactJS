// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function VklCreateUser() {
    // khởi tạo state
    const [vkl_name,setVklName] = useState('')
    const [vkl_email,setVklEmai] = useState(0)
    const [vkl_phone,setVklPhone] = useState(0)
    const [vkl_active,setVklActive] = useState(true)

    // api post
    const vklCreateUserApi = "https://67da463c35c87309f52bbe3f.mockapi.io/K23CNT2_VuKhanhLinh2403/vkl_user";

    // khi submit form
    const vklHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("vkl_active:",vkl_active);
        let vklNewUser = {vkl_name,vkl_email,vkl_phone,vkl_active};
        console.log(vklNewUser);

        // ghi dữ liệu vào api
        axios
            .post(vklCreateUserApi, vklNewUser)
            .then((vkl_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="vkl_name">Full Name</label>
                <input type='text' name='vkl_name' id="vkl_name" 
                    value={vkl_name}
                    onChange={(ev)=>setVklName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="vkl_email">Email</label>
                <input type='text' name='vkl_email' id="vkl_email" 
                    value={vkl_email}
                    onChange={(ev)=>setVklEmai(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="vkl_phone">Phone</label>
                <input type='text' name='vkl_phone' id="vkl_phone" 
                    value={vkl_phone}
                    onChange={(ev)=>setVklPhone(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="vkl_active">Active</label>
                <input type='radio' name='vkl_active' id="vkl_active_hd" value={'true'} 
                    onChange={(ev)=>setVklActive(ev.target.value)} />
                    <label for="vkl_active_hd"> Hoạt động</label>
                <input type='radio' name='vkl_active' id="vkl_active_kh" value={'false'} 
                    onChange={(ev)=>setVklActive(ev.target.value)}/>
                    <label for="vkl_active_kh"> Khóa</label>
            </div>
            <button onClick={vklHandleSubmit}>Create</button>
        </form>
    </div>
  )
}