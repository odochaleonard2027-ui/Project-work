import React from 'react'
import './Testimony.css'
import carding from '../../assets/flower.png'

const Testimony = () => {
  return (
    <div>
       {/* <!-- Testimony Section --> */}
      <section className="testimonial">
        <h4>TESTIMONIES</h4>
        <h2>Feedback From Our Students</h2>
        <div className="testimonial-container">
          <div className="card">
            <img src={carding} alt="Students image"/>
            <h3>Oluchi Iweze</h3>
            <p>This academy completely changed my career. I learned alot which improved my tech skills</p>
          </div>
          <div className="card">
            <img src={carding}alt="Students image"/>
            <h3>Odocha Leonard</h3>
            <p>This academy completely changed my career. They have the qualified well trained tutors </p>
          </div>
          <div className="card">
            <img src={carding} alt="Students image"/>
            <h3>Joseph Claret</h3>
            <p>This academy completely changed my career. I had an awesome experince and learnt the concept of temwork </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimony
