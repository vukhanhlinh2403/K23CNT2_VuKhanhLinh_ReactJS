import React, { Component } from 'react'

class vklClassCompEventProps extends Component {
    //ham xu ly su kien
    vklEventHandleClick1 = ()=>{
        alert("Hello..." + this.props.vklRenderTitle);
    }
  render() {
        return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary' onClick={this.vklEventHandleClick1}>Button1</button>
        </div>
    );
  }
}
export default  vklClassCompEventProps