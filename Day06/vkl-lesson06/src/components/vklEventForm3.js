import React, { Component } from 'react'

class vklEventForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklGioiTinh:'Nam',
        }
    }
    // ham xu ly su kien change
    vklHandleChange = (event)=>{
        this.setState({
            vklGioiTinh:event.target.value,
        });
    }
    // ham xu ly su kien submit
    vklHandleSubmit = (event)=>{

    }
  render() {
    return (
      <div className='alert alert-success'>
            <h2> form input - radio</h2>
            <form>
                <div>
                <label htmlFor=''>Giới tính:</label> 
                        <input type='radio' name='vklGioiTinh'  id='vklNam' className='mx-2'
                            value="Nam" checked={this.state.vklGioiTinh === 'Nam'} onChange={this.vklHandleChange}/> 
                            <label htmlFor='vklNam'>Nam</label>  
                        <input type='radio' name='vklGioiTinh'  id='vklNu' className='mx-2'
                            value="Nữ" checked={this.state.vklGioiTinh === 'Nữ'} onChange={this.vklHandleChange}/> 
                            <label htmlFor='vklNu'>Nữ</label>  
                        <input type='radio' name='vklGioiTinh' id='vklKhac' className='mx-2'
                            value="Khác" checked={this.state.vklGioiTinh === 'Khác'} onChange={this.vklHandleChange}/> 
                <label htmlFor='vklKhac'>Khác</label>
                </div>
            </form>
      </div>
    )
  }
}
export default  vklEventForm3