import React, { useState } from "react";

const VklMemberList = ({ members, removeMember, updateMember }) => {
  const [vkleditMember, setVklEditMember] = useState(null);
  const [vklupdatedInfo, setVklUpdatedInfo] = useState({ vklFullName: "", vklUserName: "", vklPassword: "" });
//hàm chỉnh sửa thông tin
  const vklhandleEdit = (member) => {
    setVklEditMember(member.vklId);
    setVklUpdatedInfo({ vklFullName: member.vklFullName, vklUserName: member.vklUserName, vklPassword: member.vklPassword });
  };
//lưu thông tin sau khi chỉnh sửa
  const vklhandleUpdate = () => {
    updateMember({ vklId: vkleditMember, ...vklupdatedInfo });
    setVklEditMember(null);
  };

  return (
    <div className="card p-3 mt-3">
      <h2 className="text-secondary">Danh sách tài khoản</h2>
      <ul className="list-group">
        {members.map((member) => (
           <li key={member.vklId} className="list-group-item d-flex justify-content-between align-items-center">
            {vkleditMember === member.vklId ? (
              //Hiển thị form nếu đang chỉnh sửa
              <>
                <input type="text" className="form-control me-2" value={vklupdatedInfo.vklFullName} onChange={(e) => setVklUpdatedInfo({ ...vklupdatedInfo, vklFullName: e.target.value })} />
                <input type="text" className="form-control me-2" value={vklupdatedInfo.vklUserName} onChange={(e) => setVklUpdatedInfo({ ...vklupdatedInfo, vklUserName: e.target.value })} />
                <input type="vklPassword" className="form-control me-2" value={vklupdatedInfo.vklPassword} onChange={(e) => setVklUpdatedInfo({ ...vklupdatedInfo, vklPassword: e.target.value })} />
                <button className="btn btn-success" onClick={vklhandleUpdate}>Lưu</button>
              </>
            ) : (
              //hiển thị thông tiên nếu không chỉnh sửa
              <>
                {member.vklFullName} ({member.vklUserName})
                <div className="d-flex gap-1">
                <button className="btn btn-warning me-2" onClick={() => vklhandleEdit(member)}>Sửa</button>
                <button className="btn btn-danger" onClick={() => removeMember(member.vklId)}>Xóa</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VklMemberList;