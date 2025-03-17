import React from 'react'

export default function VklListUser({renderVklUsers}) {

    const vklElements = renderVklUsers.map((vklItem, index)=>{
        return(
            <>
            <tr key={index}>
                <td>{index+1}</td>
                <td>{vklItem.id}</td>
                <td>{vklItem.vklProductName}</td>
                <td>{vklItem.vklProductPrice}</td>
            </tr>
        </>)
    })
  return (
    <div>
        <h2>Danh sach tai khoan</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>ProductName</th>
                    <th>ProductPrice</th>
                </tr>
            </thead>
            <tbody>
                {vklElements}
            </tbody>
        </table>
    </div>
  )
}
