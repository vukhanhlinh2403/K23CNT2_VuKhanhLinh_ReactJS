import React from 'react'
import VklReadApiLocal from './components/VklReadApiLocal'
import VklReadMockApi from './components/VklReadMockApi'
import VklCreateMockApi from './components/VklCreateMockApi'

export default function TvcApp() {
  return (
    <div className='container border my-3 p-3'>
        <h1> ReactJS - API - Trịnh Văn Chung</h1>
        <hr/>
        <VklReadApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ MockAPi (mockapi.io)</h2>
        <VklReadMockApi />

        <VklCreateMockApi />
    </div>
  )
}