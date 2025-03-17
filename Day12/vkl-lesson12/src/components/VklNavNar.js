import React from 'react'
import {Link} from 'react-router-dom'
export default function VklNavNar() {
  return (
    <div>
        <ul>
            <Link to={"/"}>Home</Link> |
            <Link to={"/about"}>abot us</Link> |
            <Link to={"/contact"}>contact</Link> |
            <Link to={"/list-user"}>list-user</Link> |
            <Link to={"/create-user"}>create-user</Link>
        </ul>
    </div>
  )
}
