import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Props from './components/Props'

const App = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Props name="Raihan" message="Kiw, im " />
    </>
  )
}

export default App
