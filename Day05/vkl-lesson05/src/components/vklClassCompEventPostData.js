import React, { Component } from 'react'

class vklClassCompEventPostData extends Component {
    constructor(props){
        super(props);
    }
    // ham su ly su kien
    vklEventHandleClick = ()=>{
        // chuyen du lieu app thong qua props
        this.props.onVklDataToApp("du lieu tu component con - vklClassCompEventPostData ");
    }
  render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary'
                    onClick={this.vklEventHandleClick}>
                        Button 1 - chuyen du lieu len app 
                </button>
            </div>
        );
  }
}
export default vklClassCompEventPostData