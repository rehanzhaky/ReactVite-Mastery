import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Props from './components/Props'
import DestructuringProps from './components/DestructuringProps'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Props name="Raihan" message="Kiw, im " />
        <DestructuringProps age="23" job="Software Engineer"/>
    </>
  )
}

export default App
