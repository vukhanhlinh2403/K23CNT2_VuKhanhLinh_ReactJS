import React, { Component } from 'react'

class vklClassCompEvent1 extends Component {
    // ham su ly su kien
    vklEventHandleClick1 = ()=>{
        alert("Button 1 clicked");
    }
    vklEventHandleClick2 = (name)=>{
        alert("Button 2 clicked; name="+name);
    }
  render() {
        return (
        <div className='alert alert-danger'>
            <button className='btn btn-primary mx-1' onClick={this.vklEventHandleClick1}>button1</button>
            <button className='btn btn-success mx-1' 
                onClick={()=>this.vklEventHandleClick2("vu khanh linh")}>button2</button>
        </div>
    );
  }
}
export default vklClassCompEvent1
