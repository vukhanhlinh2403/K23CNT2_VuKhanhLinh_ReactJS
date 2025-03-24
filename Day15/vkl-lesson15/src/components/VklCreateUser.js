import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
export default function VklCreateUser() {
    const vklUser = {
        id:0,
        'vkl_name':'',
        'vkl_email':'',
        'vkl_phone':'',
        'vkl_active':true
    }

    const [vkl_user, setVkl_User] = useState(vklUser);
    const vklApi = "https://67e0cffa58cc6bf78522fa48.mockapi.io/vkl-k23cnt2-vukhanhlinh-2310900056/vkl_users"
    const navigate = useNavigate();
    const vklHandleSubmit = (ev)=>{
        ev.preventDefault();
        console.log(vkl_user);
        axios
            .post(vklApi, vkl_user)
            .them((response)=>{
                navigator('/list-user')
            })
            .catch((error) => console.lo('loi khi them user.'));
    }
  return (
    <div>
        <h2>them moi user</h2>
        <from>
        <div className="mb-3 row">
            <label htmlFor="vkl_name" className="col-sm-2 col-form-label">FullName</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="vkl_name"  name='vkl_name' value={vkl_user.vkl_name}
                    onChange={(ev)=>setVkl_User({...vkl_user,vkl_name:ev.target.value})}/>
                </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="vkl_email" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="vkl_email" name='vkl_email' value={vkl_user.vkl_email} 
                    onChange={(ev)=>setVkl_User({...vkl_user,vkl_email:ev.target.value})}/>
                </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="vkl_phone" className="col-sm-2 col-form-label">phone</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="vkl_phone" name='vkl_phone' value={vkl_user.vkl_phone}
                    onChange={(ev)=>setVkl_User({...vkl_user,vkl_phone:ev.target.value})}/>
                </div>
        </div>



        <div className="mb-3 row">
            <label htmlFor="vkl_active" className="col-sm-2 col-form-label">active</label>
                <div className="col-sm-10">
                    <input type="radio" id="vkl_active_true" className='mx-3' checked={true}
                    onChange={(ev)=>setVkl_User({...vkl_user,vkl_active:ev.target.value})} 
                    value={true} name='vkl_active'/> 
                    <label htmlFor='vkl_active_true'>Hoat dong</label>
                    <input type="radio" id="vkl_active_false" className='mx-3'  
                    onChange={(ev)=>setVkl_User({...vkl_user,vkl_phone:ev.target.value})}
                    value={false} name='vkl_active'/> 
                    <label htmlFor='vkl_active_false'>Tam khoa</label>
                </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className='btn btn-primary mx-2 px-3' name='btnVklCreate' onClick={vklHandleSubmit}>Create</button>
                <button className='btn btn-secondary mx-2 px-3' name='btnVklBack'>Back</button>
            </div>
        </div> 
        </from>
    </div>
  )
}
