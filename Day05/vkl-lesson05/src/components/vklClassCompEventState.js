import React, { Component } from 'react';

class vklClassCompEventState extends Component {
    constructor(props){
        super(props);
        this.state = {
            vklFullName:"vu khanh linh",
            vklAge:45,
        }
    }
    //ham xu ly su kien
    vklEventHandleClick1 = ()=>{
        // lay du lieu trong state
        alert ("FullName: " +this.state.vklFullName + "\n Age:" + this.state.vklAge);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.vklEventHandleClick1}>button 1 -  du lieu trong state</button>
            </div>
        );
  }
}
export default vklClassCompEventState