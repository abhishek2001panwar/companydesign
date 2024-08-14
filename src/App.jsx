import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OrbitingCirclesProps from './components/OrbitingCirclesProps'
import { StickyScrolls } from './components/StickyScrolls'

function App() {
  return (
    <div>
      <Navbar />
     <div >
     <Hero />
     <OrbitingCirclesProps />
     
     </div> 
     <StickyScrolls/>


    </div>
  )
}

export default App