import React, { Component } from 'react'
import VklFuncCompEvent1 from './components/vklFuncCompEvent1';
import VklClassCompEvent1 from './components/vklClassCompEvent1';
import VklFuncCompEventProps from './components/vklFuncCompEventProps';
import VklClassCompEventProps from './components/vklClassCompEventProps';
import VklClassCompEventState from './components/vklClassCompEventState';
import VklClassCompEventPostData from './components/vklClassCompEventPostData';

class vklApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      vklNoiDung:"chua co gi",
    }
  }
  //ham xu ly su kien khi component con chuyen du lieu len 
  vklHandleDataToApp = (content)=>{
    alert(content);
    this.setState({
      vklNoiDung:content,
    })
  }
  render() {
      return (
        <div className='container border mt-3'>
          <h1 className='text-center alert alert-info my-2'>K23CNT2 - Vu Khanh Linh - Event and Form</h1>
          <hr/>

          <div>
            <h2>Function Component - Event</h2>
            <VklFuncCompEvent1 />
          </div>
          <hr/>
          <div>
            <h2>Class components - Event</h2>
            <VklClassCompEvent1 />
          </div>
          <hr/>
          <div>
            <h2>Function components - Event: props</h2>
            <VklFuncCompEventProps vklRenderName="vu khanh linh" />
          </div>
          <hr/>
          <div>
            <h2>Class components - Event: props</h2>
            <VklClassCompEventProps vklRenderTitle = "welcome to vu linh"/>
          </div>
          <hr/>
          <div>
            <h2>Class components - Event: state</h2>
            <VklClassCompEventState />
          </div>
          <hr/>
          <div>
            <h1>{this.state.vklNoiDung}</h1>
            <h2>Class components - Event: Post Date to app</h2>
            <VklClassCompEventPostData onVklDataToApp={this.vklHandleDataToApp} />
          </div>
        </div>
      );
  }
}


export default vklApp