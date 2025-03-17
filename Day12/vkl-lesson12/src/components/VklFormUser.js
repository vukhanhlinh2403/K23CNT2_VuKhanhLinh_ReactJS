import React, { useState } from 'react'

export default function VklFormUser({onVklAddNew}) {

    const [id, setId]  = useState('')
    const [vklFullName, setVklFullName]  = useState('')
    const [vklUserName, setVklUserName]  = useState('')
    const [vklPass, setVklPass]  = useState('')


    const vklHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id,vklFullName,vklUserName,vklPass)
        onVklAddNew({id,vklFullName,vklUserName,vklPass})
    }
  return (
    <div>
        <form>
            <p>Ma sinh vien:
                <input type='text' name='id' value={id} onChange={(ev)=>setId(ev.target.value)} /> </p>
            <p>Ho va Ten:
                <input type='text'  name='vklFullName' value={vklFullName} onChange={(ev)=>setVklFullName(ev.target.value)}/> </p>
            <p>Tai khoan:
                <input type='text'  name='vklUserName' value={vklUserName} onChange={(ev)=>setVklUserName(ev.target.value)}/> </p>
            <p>Mat khau:
                <input type='password'  name='vklPass' value={vklPass} onChange={(ev)=>setVklPass(ev.target.value)}/> </p>
            <p>
                <button name='vklSave' onClick={vklHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
