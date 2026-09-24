import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div>
      {/* <!-- HERO SECTION --> */}
      <section className="hero">
        <div className="overlay">
          <div className="hero-content"><h1>Welcome to my web page</h1>
            <p>Learn fullstack development, UI/UX, Graphics Design and other digital skills</p>
          <button>Get started</button>
           </div>  
        </div>
      </section>
    </div>
  )
}

export default Hero
