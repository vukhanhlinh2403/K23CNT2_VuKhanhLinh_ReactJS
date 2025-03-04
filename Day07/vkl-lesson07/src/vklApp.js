import React, { Component } from 'react'
import VklLoginControl from './components/vklLoginControl';
import VklRenderList from './components/vklRenderList';
import VklRenderListStudent from './components/vklRenderListStudent';
import VklRenderListPhone from './components/vklRenderListPhone';
class vklApp extends Component {
  render() {
    return (
      <div className='container border my-3'>
        <h1 className='text-center'>vu khanh linh - render condition, list key</h1>
        <hr/>
        <VklLoginControl />

        <VklRenderList />


        <VklRenderListStudent />


        <VklRenderListPhone />
      </div>
    )
  }
}
export default vklApp