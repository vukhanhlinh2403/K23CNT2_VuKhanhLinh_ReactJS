// Thêm mới dữ liệu 

import React, { useState } from 'react'
import axios from 'axios'
export default function VklCreateMockApi() {
    // khởi tạo state
    const [vklFullName,setVklFullName] = useState('')
    const [vklAge,setVklAge] = useState(0)
    const [vklActive,setVklActive] = useState(true)

    // api post
    const vklCreateUserApi = "https://67d8f32100348dd3e2a8d5b5.mockapi.io/k23cnt2_vukhanhlinh/vkl_users";

    // khi submit form
    const vklHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("vklActive:",vklActive);
        let vklNewUser = {vklFullName,vklAge,vklActive};
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
                <label for="vklFullName">Full Name</label>
                <input type='text' name='vklFullName' id="vklFullName" 
                    value={vklFullName}
                    onChange={(ev)=>setVklFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="vklAge">Age</label>
                <input type='number' name='vklAge' id="vklAge" 
                    value={vklAge}
                    onChange={(ev)=>setVklAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="vklActive">Active</label>
                <input type='radio' name='vklActive' id="vklActive_hd" value={'true'} 
                    onChange={(ev)=>setVklActive(ev.target.value)} />
                    <label for="vklActive_hd"> Hoạt động</label>
                <input type='radio' name='vklActive' id="vklActive_kh" value={'false'} 
                    onChange={(ev)=>setVklActive(ev.target.value)}/>
                    <label for="vklActive_kh"> Khóa</label>
            </div>
            <button onClick={vklHandleSubmit}>Create</button>
        </form>
    </div>
  )
}