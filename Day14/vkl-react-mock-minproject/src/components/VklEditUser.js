import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function VklEditUser() {

    //api
    const VklApiUrl = "https://67da463c35c87309f52bbe3f.mockapi.io/K23CNT2_VuKhanhLinh2403/vkl_user"
    //lấy biến id trên url
    const { id } = useParams(); 
    //Khởi tạo state cho component
    const [Vkl_editUser, setVklEditUser] = useState({
        vkl_name: '', vkl_email: '', vkl_phone: '', vkl_active: false
    })


    useEffect(() => {
        console.log("Fetching data from API:", `${VklApiUrl}/${id}`);
        axios
            .get(`${VklApiUrl}/${id}`)
            .then((Vkl_response) => {
                console.log("Data received:", Vkl_response.data);
                setVklEditUser(Vkl_response.data);
            })
            .catch((error) => {
                console.error("Lỗi khi đọc dữ liệu từ API:", error);
            });
    }, [id]);

    //Hàm xử lí khi người dùng thay đổi trạng thái Active
    const VklHandleRadioChange = (ev) => {
        setVklEditUser({
            ...Vkl_editUser,
            vkl_active: ev.target.value === "true", // Chuyển "true" thành true (boolean)
        });
    };
    //tạo navigate từ react router dom để điều hướng khi cập nhật thành công hoặc back
    const navigate = useNavigate();

    //Khi người dùng nhấn nút submit => lấy dữ liệu từ form post vào api
    //Hàm cập nhật những thay đổi trên form vào api
    const VklHandleSubmit = (event) => {
        event.preventDefault();
        console.log("Data to update:", Vkl_editUser);
    
        axios
            .put(`${VklApiUrl}/${id}`, Vkl_editUser)
            .then((Vkl_response) => {
                console.log("Update Success:", Vkl_response.data);
                alert('Successed!');
                navigate('/list-user');
            })
            .catch((error) => {
                console.error("Lỗi khi cập nhật dữ liệu:", error);
            });
    };
    // khi click vào nút back
    const VklHandleBack = (event) => {
        event.preventDefault();
        navigate('/list-user')
    };

    return (
        <div>
            <h2 className="alert alert-success">Sửa thông tin User</h2>
            <form>
                <div className="mb-3 row">
                    <label htmlFor="vkl_name" className="col-sm-2 col-form-label">
                        Full Name
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="vkl_name"
                            name="vkl_name"
                            value={Vkl_editUser.vkl_name}
                            onChange={(ev) => setVklEditUser({ ...Vkl_editUser, vkl_name: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="vkl_email" className="col-sm-2 col-form-label">
                        Email
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="email"
                            className="form-control"
                            id="vkl_email"
                            name="vkl_email"
                            value={Vkl_editUser.vkl_email}
                            onChange={(ev) => setVklEditUser({ ...Vkl_editUser, vkl_email: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="vkl_phone" className="col-sm-2 col-form-label">
                        Phone
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="tel"
                            className="form-control"
                            id="vkl_phone"
                            name="vkl_phone"
                            value={Vkl_editUser.vkl_phone}
                            onChange={(ev) => setVklEditUser({ ...Vkl_editUser, vkl_phone: ev.target.value })}
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="vkl_active" className="col-sm-2 col-form-label">
                        Active
                    </label>
                    <div className="col-sm-6">
                        <input
                            type="radio"
                            id="vkl_active_true"
                            name="vkl_active"
                            value={'true'}
                            checked={Vkl_editUser.vkl_active === 'true' || Vkl_editUser.vkl_active === true} // Kiểm tra nếu giá trị là "true"
                            onChange={VklHandleRadioChange}
                        /> <label htmlFor="vkl_active_true" className="mx-2 text-success">Hoạt động</label>
                        <input
                            type="radio"
                            id="vkl_active_false"
                            name="vkl_active"
                            value={'false'}
                            checked={Vkl_editUser.vkl_active === 'false' || Vkl_editUser.vkl_active === false} // Kiểm tra nếu giá trị là "false"
                            onChange={VklHandleRadioChange}
                        /> <label htmlFor="vkl_active_false" className="mx-2 text-danger">Đang khóa</label>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-6">
                        <button className="btn btn-primary mx-1" onClick={(e)=>VklHandleSubmit(e)}>Update</button>
                        <button className='btn btn-success px-3' onClick={VklHandleBack}>Back</button>
                    </div>
                </div>
            </form>
        </div>
    )
}