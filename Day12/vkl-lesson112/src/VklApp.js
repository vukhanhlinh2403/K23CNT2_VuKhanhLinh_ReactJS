import React, { useState } from 'react'
import {Route, BrowserRouter as Router, Routes}  from 'react-router-dom'
import VklNavNar from './components/VklNavNar'
import VklHome from './components/VklHome'
import VklAbout from './components/VklAbout'
import VklContact from './components/VklContact'
import VklListUser from './components/VklListUser'
import VklFormUser from './components/VklFormUser'
import VklTinTuc from './components/VklTinTuc'
import VklSanPham from './components/VklSanPham'
export default function VklApp() {

  const listUsers = [
    {id:"SV001", vklProductName:"Tinh dau buoi", vklProductPrice:"10000000"},
    {id:"SV001", vklProductName:"Tinh dau hoa hong", vklProductPrice:"20000000"},
    
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
          <VklNavNar />
          <Routes>
            <Route path='/' element = {<VklHome />} />
            <Route path='/about' element = {<VklAbout />} />
            <Route path='/contact' element = {<VklContact />} />
            <Route path='/tintuc' element = {<VklTinTuc />} />
            <Route path='/sanpham' element = {<VklSanPham />} />
            <Route path='/list-user' element = {<VklListUser renderVklUsers={vklUsers}/>} />
            <Route path='/create-user' element = {<VklFormUser onVklAddNew={vklHandleAdd}/>} />
          </Routes>
      </Router>
    </div>
  )
}
