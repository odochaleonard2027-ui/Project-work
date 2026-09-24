import React from 'react'
import LandingPageScreens from './Screens/LandingPageScreens'
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header'
import Contactusscreen from './Screens/Contactusscreen'
import Aboutus from './Screens/Aboutus'
import Home from './Screens/Home'
import Services from './Screens/Services'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/"element={<LandingPageScreens/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Contactusscreen" element={<Contactusscreen/>}/>
      <Route path="/Aboutus" element={<Aboutus/>}/>
      <Route path="/Services" element={<Services/>}/>
    </Routes>
    <Footer/> 
    </>
  )
}

export default App
     

    

