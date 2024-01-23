import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component from './Components/SimpleComponent'
import SimpleComponent from './Components/SimpleComponent'
import PureComponent from './Components/PureComponents'

function App() {


  return (
    <>
      <SimpleComponent/>
      <PureComponent/>
    </>
  )
}

export default App
