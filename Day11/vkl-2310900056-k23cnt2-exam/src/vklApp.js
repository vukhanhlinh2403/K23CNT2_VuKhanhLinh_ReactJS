import React, { useState } from "react";
import VklMemberList from "./components/VklMemberList";
import VklMemberAdd from "./components/VklMemberAdd";



const VklApp = () => {
  //khởi tạo thành viên
  const [members, setMembers] = useState([
    { vklId: "2310900056", vklFullName: "Vu Khanh Linh",vklUserName: "linhlinh", vklPassword: "123456a@" },
    { vklId: "SV001", vklFullName: "Luu Thi Quynh Huong",vklUserName: "huonghuong", vklPassword: "123456a@" },
    { vklId: "SV002", vklFullName: "Nguyen Thi Thanh Hang",vklUserName: "hanghang", vklPassword: "123456a@" },
  ]);
//thêm mới
  const vkladdMember = (member) => {
    setMembers([...members, member]);
  };
    // Hàm xóa thành viên theo ID
    const removeMember = (vklId) => {
      setMembers(members.filter(member => member.vklId !== vklId));
  };

  // Hàm cập nhật thông tin thành viên
  const updateMember = (updatedMember) => {
    setMembers(members.map(member => (member.vklId === updatedMember.vklId ? updatedMember : member)));
  };


  return (
    <div className="container mt-4">
      <h1 className="text-primary">Danh sách thành viên</h1>
      <VklMemberList members={members} removeMember={removeMember} updateMember={updateMember}/>
      <VklMemberAdd vkladdMember={vkladdMember}/>
      
    </div>
  );
};

export default VklApp;