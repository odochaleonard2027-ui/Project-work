import React from 'react'
import './Aboutus.css'
import Pics from '../assets/cams.png'
const Aboutus = () => {
  return (
    <div>
      <section className="T-about">
       <div className="about">
         <h1>What to know about us</h1>
         <h2>Building skills <br/> Building future</h2>
         <p>We specialized on, hands-on training programs designed to prepare students for specific careers or trades in a fraction of the time. We Provide specialized training tailored to specific careers or industries,<br /> preparing students for immediate entry into the workforce upon graduation.</p>
         <ul>
           <li>&#10004; Practical Hands-on </li>
           <li>&#10004; Expert Instrutors</li>
           <li>&#10004; Flexible Learning Schedule</li>
           <a href="" className="btn">Learn more </a>
         </ul>
       </div>
       <div className="image">
         <img src={Pics} alt="picture" /> 
       </div> 
     </section>

          
   </div>
  )
}

export default Aboutus
