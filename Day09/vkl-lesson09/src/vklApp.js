import React from 'react'
import VklUseState from './components/VklUseState'
import VklUseStateListObject from './components/VklUseStateListObject'
import VklUserEffect1 from './components/VklUserEffect1'
import VklCounter from './components/VklCounter'
import VklInputFocus from './components/VklInputFocus'
import VklAutoCounter from './components/VklAutoCounter'
import VklConfirmExit from './components/VklConfirmExit'
import VklThemeProvider, { VklThemedComponent } from './components/VklThemeProvider'

export default function VklApp() {
  return (
    <div className='container border mt-3'>
        <h1> React Hook - Vu Khanh Linh</h1>
      <hr/>
      <VklUseState />
      <VklUseStateListObject />

      <VklUserEffect1 />

      <VklCounter />

      <VklInputFocus />

      <VklAutoCounter />

      <VklConfirmExit />

      <VklThemeProvider>
        <VklThemedComponent />
      </VklThemeProvider>
    </div>
  )
}