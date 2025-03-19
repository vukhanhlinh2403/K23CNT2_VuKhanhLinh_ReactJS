import React, { useState } from 'react'
import VklHome from './components/VklHome'
import VklListUser from './components/VklListUser'
import VklCreateUser from './components/VklCreateUser'
import VklNavBar from './components/VklNavBar'
import VklEditUser from './components/VklEditUser'
import {Route, BrowserRouter as Router, Routes}  from 'react-router-dom'

export default function TvcApp() {
  const listUsers = [
    {id:"SV001", vkl_name:"Vu Khanh Linh", vkl_email:"linhlinh@gmail.com", vkl_phone:"06549489594"},
    {id:"SV002", vkl_name:"nguyen van luong", vkl_email:"luongluong@gmail.com", vkl_phone:"06549489594"},
    {id:"SV003", vkl_name:"nguyen huu tuan", vkl_email:"tuantuan@gmail.com", vkl_phone:"06549489594"},
  ]
  const[vklUsers, setVklUser] = useState(listUsers)
  // ham xu ly su kien them moi
  const  vklHandleAdd = (vklParam)=>{
    console.log("vklHandleAdd:", vklParam);

    setVklUser(prev =>{ 
      return [
          ...prev,
          vklParam
        ]
    })
  }
  return (
    <div className='container-border my-3'>
      <h1>React Router Dom - Demo - [Vu khanh Linh - K23CNT2]</h1>
      <hr/>
      <Router>
          <VklNavBar />
          <Routes>
            <Route path='/' element = {<VklHome />} />
            <Route path='/list-user' element = {<VklListUser renderVklUsers={vklUsers}/>} />
            <Route path='/create-user' element = {<VklCreateUser onVklAddNew={vklHandleAdd}/>} />
          </Routes>
          <VklEditUser />
      </Router>
    </div>
  )
}