import React from 'react'
import './Aboutus.css'
import Picsimg from '../../assets/cams.png'
const Aboutus = () => {
  return (
    <div>
      {/* <!-- ABOUT US --> */}
      <section className="about">
        <div className="about-text">
          <h3>About us</h3>
          <h2>Building skills <br/> Building future</h2>
          <p>At morning className Digital Skills Academy, we provide practical training that helps you create a future</p>
          <ul>
            <li>&#10004; Practical Hands-on </li>
            <li>&#10004; Expert Instrutors</li>
            <li>&#10004; Flexible Learning Schedule</li>
            <a href="dev.html" className="btn">Learn more</a>
          </ul>
        </div>
        <div className="about-image">
        <img src={Picsimg} alt="students learning"/>
        </div>
      </section>
    </div>
  )
}

export default Aboutus
