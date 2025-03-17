import React from 'react'
import {Link} from 'react-router-dom'
export default function VklNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link> |
            <Link to={"/about"}>Gioi Thieu</Link> |
            <Link to={"/contact"}>Lien He</Link> |
            <Link to={"/tintuc"}>Tin Tuc</Link> |
            <Link to={"/sanpham"}>San Pham</Link> |
            <Link to={"/list-user"}>list-user</Link> |
            <Link to={"/create-user"}>create-user</Link>
        </ul>
    </div>
  )
}
