import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div>
        {/* <!-- FOOTER --> */}
      <footer>
          <div className="footer-container">
            {/* <!-- ABOUT US --> */}
             <div className="footer-box">
              <h2>Our Digital Skills Academy</h2>
              <p>
                Empowering students with practical digital <br/> skills for a better 
                future.
              </p>
             </div>

             {/* <!-- QUICK LINES --> */}
              <div className="footer-box">
                <h3>Quick Lines</h3>
                <a href="">HOME</a>
                <a href="">ABOUT US</a>
                <a href="">COURSES</a>
                <a href="">CONTACT</a>
              </div>
                  {/* <!-- CONTACT US --> */}

          <div className="footer-box">
            <h3>Contact us</h3>

            <p>Email:code@edits.com</p>
           
            <p>Phone: +234 908765443</p>
           
            <p>Owerri, Imo state</p>
          </div>
          </div>

      

          {/* <!-- Copy-right --> */}

          <div className="copy-right">
            <p> &copy; 2026 Our digital skills academy. All right Reserved</p>
          </div>


      </footer>
    </div>
  )
}

export default Footer
