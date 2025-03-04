import React, { Component } from 'react'

class vklRenderListPhone extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklPhone:[
                {vklproductId:"P001",vklproductName:"ip11", vklquantity:15, vklprice:"1000"},
                {vklproductId:"P002",vklproductName:"ip12", vklquantity:20, vklprice:"1250"},
                {vklproductId:"P003",vklproductName:"ip13", vklquantity:10, vklprice:"1500"},
                {vklproductId:"P004",vklproductName:"ip14", vklquantity:15, vklprice:"2000"},
            ],
        }
    }
  render() {
    let vklElement = this.state.vklPhone.map((vklItem, index)=>{
        return(
            <tr>
                    <td>{index+1}</td>
                    <td>{vklItem.vklId}</td>
                    <td>{vklItem.vklproductName}</td>
                    <td>{vklItem.vklquantity}</td>
                    <td>{vklItem.vklprice}</td>
                    <td>
                        <button>Sửa</button>
                        <button>Xóa</button>
                    </td>
            </tr>
        )
    })
    return (
      <div className='alert alert-info'>
        <h2>danh sách điện thoại ip</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>vkl ma san pham</th>
                    <th>vkl so luong</th>
                    <th>vkl giá thành</th>
                    <th>vkl màu </th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {vklElement}
                </tr>
            </tbody>
        </table>
      </div>
    );
  }
}
export default vklRenderListPhone;