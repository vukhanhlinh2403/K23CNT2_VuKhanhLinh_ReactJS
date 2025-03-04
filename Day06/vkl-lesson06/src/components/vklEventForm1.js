import React, { Component } from 'react'

class vklEventForm1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklStudentName:"vu linh",
        }
    }
    // ham xu ly su kien khi du lieu tren textbox
    vklHandleChange = (event)=> {
        // cap nghap ;ai state
        this.setState({
            vklStudentName:event.target.value
        })
    }
    // khi submit form, lay du lieu va hien thi 
    vklHandleSubmit = (ev)=>{
        alert('xin chao:' + this.state.vklStudentName);
    }
  render() {
    return (
      <div className='alert alert-info'>
        <h2>Form Input</h2>
        <form onSubmit={this.vklHandleSubmit}>
            <label htmlFor='vklStudentName'>
                <input type='text' name='vklStudentName' id='vklStudentName' 
                    value={this.state.vklStudentName}
                    onChange={this.vklHandleChange}
                />
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    )
  }
}
export default vklEventForm1;