import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function VklEditUser() {
     const vklUser = {
            id:0,
            'vkl_name':'',
            'vkl_email':'',
            'vkl_phone':'',
            'vkl_active':true
        }
    
        const [vkl_user, setVkl_User] = useState(vklUser);
        const vklApi = "https://67e0cffa58cc6bf78522fa48.mockapi.io/vkl-k23cnt2-vukhanhlinh-2310900056/vkl_users"

        const {id} = useParams();

        useEffect(()=>{
            axios.get(vklApi+"/"+`${id}`)
            .then(vkl_response => {
                // Xử lý dữ liệu trả về từ API
                console.log(vkl_response.data); // Dữ liệu từ API
                setVkl_User(vkl_response.data)
            })
            .catch(error => {
                // Xử lý lỗi
                console.error('Có lỗi xảy ra:', error);
            });
        },[])
        const navigate = useNavigate();
        const vklHandlSubmit = (ev)=>{
            ev.preventDefault();
            console.log(vkl_user);
            axios
            .put(vklApi+`/${id}`, vkl_user)
            .then((vkl_response) => {
                alert('Cập nhật thành công!');
                navigate('/vkl-list-user'); // Sau khi lưu, chuyển về trang danh sách
            })
        }
  return (
    <div>
      <h2>Sửa thông tin user</h2>
      <form>
        <div className="mb-3 row">
          <label htmlFor="vkl_name" className="col-sm-2 col-form-label">FullName</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="vkl_name"
                name="vkl_name"
                value={vkl_user.vkl_name} 
                onChange={(ev)=>setVkl_User({...vkl_user,vkl_name:ev.target.value})} 
                />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="vkl_email" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="vkl_email" 
             name="vkl_email"
             value={vkl_user.vkl_email} 
             onChange={(ev)=>setVkl_User({...vkl_user,vkl_email:ev.target.value})} 

             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="vkl_phone" className="col-sm-2 col-form-label">Phone</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="vkl_phone" 
             name="vkl_phone"
             value={vkl_user.vkl_phone} 
             onChange={(ev)=>setVkl_User({...vkl_user,vkl_phone:ev.target.value})} 
             />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="vkl_active" className="col-sm-2 col-form-label">Active</label>
          <div className="col-sm-10">
            <input type="radio" id="vkl_active_true"  className="mx-3"   
                onChange={(ev)=>setVkl_User({...vkl_user,vkl_active:ev.target.value})}
                value={true}
                name="vkl_active"  /> 
            <label htmlFor="vkl_active_true">Hoạt động</label>
            <input type="radio" id="vkl_active_false"  className="mx-3"
                onChange={(ev)=>setVkl_User({...vkl_user,vkl_active:ev.target.value})}
                value={false} 
                name="vkl_active" /> 
            <label htmlFor="vkl_active_false">Tạm khóa</label>
          </div>
        </div>

        <div className="mb-3 row">
            <label htmlFor="" className="col-sm-2 col-form-label"></label>
            <div className="col-sm-10">
                <button className="btn btn-primary mx-2 px-3" name="btnVklCreate" 
                    onClick={vklHandlSubmit}
                    >Update</button>
                <button className="btn btn-secondary mx-2 px-3" name="btnVklBack">Back</button>
            </div>
        </div>
      </form>
    </div>
  )
}