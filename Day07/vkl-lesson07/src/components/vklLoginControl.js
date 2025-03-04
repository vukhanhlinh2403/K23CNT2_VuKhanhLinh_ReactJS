import React, { Component } from 'react'
import VklLoginComp from './vklLoginComp';
import VklLogoutComp from './vklLogoutComp';

class vklLoginControl extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn:false,
        }
    }
    // ham xu ly su kien login 
    vklHandleLogin = (event)=>{
        event.preventDefault();
        this.setState({
            isLoggedIn:true,
        })
    }
  render() {
    let {isLoggedIn}=this.state
    let vklElement = isLoggedIn?<VklLoginComp /> : <VklLogoutComp />
    return (
      <div className='alert alert-danger'>
            {vklElement}
            {
                isLoggedIn?
                <button onClick={()=>this.setState({isLoggedIn:false})}>Logout</button>
                :<button onClick={this.vklHandleLogin}>Login</button>
            }
      </div>
    )
  }
}
export default vklLoginControl;