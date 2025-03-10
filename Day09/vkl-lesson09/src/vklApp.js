import React, { useState} from 'react'
import UseVklState from './components/useVklState'

export default class vklApp extends useState {
  render() {
    return (
      <div>
        <h1 className='text-center'>vu khanh linh - k23cnt2 - jsHook </h1>
        <hr/>

        <UseVklState />
      </div>
    )
  }
}
