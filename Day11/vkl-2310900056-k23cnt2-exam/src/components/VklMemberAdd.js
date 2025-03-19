import React, { useState } from "react";

const VklMemberAdd = ({ vkladdMember }) => {
    //lưu thông tin thành viên mới
  const [vklnewMember, setVklNewMember] = useState({ vklId: "", vklFullName: "", vklUserName: "", vklPassword: "" });
  //hàm xử lý thay đổi gía trị input
  const vklhandleChange = (e) => {
    setVklNewMember({ ...vklnewMember, [e.target.name]: e.target.value });
  };
//hàm xử lý khi gửi form thêm tv
  const vklhandleSubmit = (e) => {
    e.preventDefault();
    if (vklnewMember.vklId && vklnewMember.vklFullName && vklnewMember.vklUserName && vklnewMember.vklPassword) {
      vkladdMember(vklnewMember);
      setVklNewMember({ vklId: "", vklFullName: "", vklUserName: "", vklPassword: "" });
    }
  };

  return (
    <div className="card p-3 mt-3">
      <h2>Thêm thành viên</h2>
      <form onSubmit={vklhandleSubmit} className="d-flex gap-2">
        <input type="text" className="form-control" name="vklId" placeholder="vklId" value={vklnewMember.id} onChange={vklhandleChange} required />
        <input type="text" className="form-control" name="vklFullName" placeholder="Họ và tên" value={vklnewMember.vklFullName} onChange={vklhandleChange} required />
        <input type="text" className="form-control" name="vklUserName" placeholder="vklUserName" value={vklnewMember.vklUserName} onChange={vklhandleChange} required />
        <input type="vklPassword" className="form-control" name="vklPassword" placeholder="Mật khẩu" value={vklnewMember.vklPassword} onChange={vklhandleChange} required />
        <button type="submit" className="btn btn-primary" >Thêm</button>
      </form>
    </div>
  );
};

export default VklMemberAdd;