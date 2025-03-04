import React from 'react'

export default function vklRenderList() {
    const vklList = ["vu linh", "ReactJS", "FIT-NTU"];

    const vklElement = vklList.map(item=>{
        return  <li>{item}</li>
    })
  return (
    <div className='alert alert-success'>
        <h2>Danh sach:</h2>
        <ul>
        {
            vklList.map(item=>{
                return <li>{item}</li>
            })
        }
        </ul>
    </div>
  )
}
