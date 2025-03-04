import React, { Component } from 'react'

class vklEventForm2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course: 'CSS3',
        };

    };
    // ham xu ly su kien khbi thay doi khoa hoc
    vklHandleChange = (event) => {
        // cap nhap lai state
        this.setState(
            {
                course: event.target.value
            }
        );
    };
    // ham xu ly su kien khi ubmit form
    vklHandleSubmit = (event) => {
        alert('khoa hoc da chon khi submit:' +this.state.course);
        event.preventDefault();
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form select</h2>
        <form onSubmit={this.vklHandleSubmit}>
            <label htmlFor=''>
               <select  name='course' id='course'
                    value={this.state.course} 
                    onChange={this.vklHandleChange} >
                    <option value={'HTML5'}>HTML5</option>
                    <option value={'CSS3'}>CSS</option>
                    <option value={'JS'}>JS</option>
                    <option value={'REACTJS'}>reactjs</option>
               </select>
            </label>
            <button className='btn btn-primary'>Click here</button>
        </form>
      </div>
    )
  }
}
export default vklEventForm2