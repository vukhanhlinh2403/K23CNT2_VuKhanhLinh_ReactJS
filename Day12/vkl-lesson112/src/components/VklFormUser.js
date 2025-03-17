import React, { useState } from 'react'

export default function VklFormUser({onVklAddNew}) {

    const [id, setId]  = useState('')
    const [vklProductName, setVklProductName]  = useState('')
    const [vklProductPrice, setVklProductPrice]  = useState('')


    const vklHandleSubmit = (event) => {
        event.preventDefault();
        console.log(id,vklProductName,vklProductPrice)
        onVklAddNew({id,vklProductName,vklProductPrice})
    }
  return (
    <div>
        <form>
            <p>Ma san pham:
                <input type='text' name='id' value={id} onChange={(ev)=>setId(ev.target.value)} /> </p>
            <p>Ten san pham:
                <input type='text'  name='vklProductName' value={vklProductName} onChange={(ev)=>setVklProductName(ev.target.value)}/> </p>
            <p>Gia ca:
                <input type='text'  name='vklProductPrice' value={vklProductPrice} onChange={(ev)=>setVklProductPrice(ev.target.value)}/> </p>
            <p>
                <button name='vklSave' onClick={vklHandleSubmit}>Save</button>
            </p>
        </form>
    </div>
  )
}
