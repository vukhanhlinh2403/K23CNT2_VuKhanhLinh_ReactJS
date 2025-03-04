import React, { Component } from 'react'
import VklEventForm1 from './components/vklEventForm1';
import VklEventForm2 from './components/vklEventForm2';
import VklEventForm3 from './components/vklEventForm3';
import VklEventForm4 from './components/vklEventForm4';
import VklEventForm5 from './components/vklEventForm5';

class vklApp  extends Component {

  render() {
    return (
      <div className='container border my-3 bg-white'>
        <h1 className='text-center'>Event Form - Demo</h1>
        <hr/>
        <VklEventForm1 />
        <VklEventForm2 />
        <VklEventForm3 />
        <VklEventForm4 />
        <VklEventForm5 />
      </div>
    );
  }
}
export default vklApp