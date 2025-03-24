import React from 'react'
import {BrowserRouter as VklRouter, Route, Routes} from 'react-router-dom'
import VklNavBar from './components/VklNavBar'
import VklHome from './components/VklHome'
import VklListUser from './components/VklListUser'
import VklCreateUser from './components/VklCreateUser'
import VklEditUser from './components/VklEditUser'
export default function vklApp() {
  return (
    <div className='container boder my-3 p-3'>
      <h1 className='alert alert-success text-center'>K23CNT2 - Vũ Khánh Linh - 2310900056</h1>
      <hr/>

      <VklRouter>
          <VklNavBar />
          <hr/>
          <Routes>
              <Route path='/' element={<VklHome/>} />
              <Route path='/vkl-list-user' element={<VklListUser/>} />
              <Route path='/vkl-create-user' element={<VklCreateUser/>} />
              <Route path='/vkl-edit-user/:id' element={<VklEditUser/>} />
          </Routes>
      </VklRouter>
    </div>
  )
}
