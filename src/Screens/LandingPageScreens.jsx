import React from 'react'
import Aboutus from '../components/Aboutus/Aboutus'
import Testimony from '../components/Testimony/Testimony'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Cta from '../components/Cta/Cta'

const LandingPageScreens = () => {
  return (
    <div>
   
      <Hero />
      <Aboutus/>
     <Testimony /> 
      <Cta />
     
    </div>
  )
}

export default LandingPageScreens

