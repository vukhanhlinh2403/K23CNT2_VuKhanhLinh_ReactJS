import React from 'react'
import {Link} from 'react-router-dom'
import VklHome from './VklHome'
export default function VklNavBar() {
  return (
    <nav>
        <Link to='/' >Home</Link> |
        <Link to='vkl-list-user'>List user</Link> |
        <Link to='vkl-create-user'>Create user</Link>
    </nav>
  )
}
