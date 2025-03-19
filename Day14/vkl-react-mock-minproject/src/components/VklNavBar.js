import React from 'react'
import {Link} from 'react-router-dom'
export default function VklNavBar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link> |
            <Link to={"/list-user"}>Danh sach tai khoan</Link> |
            <Link to={"/create-user"}>them moi tai khoan</Link> |
        </ul>
    </div>
  )
}
