import React from 'react'

export default function vklFuncCompEventProps(vklProps) {
    // ham xu ly su kien 
    const vklHanldeButtonClick1 = ()=>{
        alert("du lieu tu props:" + vklProps.vklRenderName);
        console.log("xin chao:",vklProps.vklRenderName);
    }

    const vklHanldeButtonClick2 = (param)=>{
        // lay du lieu tu Props
        alert("du lieu tu vklProps (button 2 click):" + vklProps.vklRenderName);
        // du lieu tu tham so param 
        console.log('========================');
        console.log("hi:",param);
        console.log('========================');
    }
  return (
    <div className='alert alert-danger'>
        <button className='btn btn-primary mx-1'
            onClick={vklHanldeButtonClick1}>button1</button>

        <button className='btn btn-success mx-1'
            onClick={()=>vklHanldeButtonClick2("Button 2")}>button2</button>
    </div>
  )
}
