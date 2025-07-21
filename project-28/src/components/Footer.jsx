import React from 'react'
import './Footer.css'

const Footer = ({ navigateTo }) => {
  const handleNavClick = (page, e) => {
    e.preventDefault()
    navigateTo(page)
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-800-LAWYER-FL'
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@floridaaccidentlawyer.com'
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Florida Accident Lawyer</h3>
            <p>Fighting for accident victims across Florida for over 20 years. We don't get paid unless you win.</p>
            <div className="contact-info">
              <p>📞 <button onClick={handlePhoneClick} className="footer-link">(800) LAWYER-FL</button></p>
              <p>📧 <button onClick={handleEmailClick} className="footer-link">info@floridaaccidentlawyer.com</button></p>
              <p>📍 123 Legal Plaza, Miami, FL 33101</p>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div className="footer-section">
            <h3>Practice Areas</h3>
            <ul>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Car Accidents</button></li>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Truck Accidents</button></li>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Motorcycle Accidents</button></li>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Slip & Fall</button></li>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Wrongful Death</button></li>
              <li><button onClick={(e) => handleNavClick('practice-areas', e)} className="footer-link">Medical Malpractice</button></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><button onClick={(e) => handleNavClick('about', e)} className="footer-link">About Us</button></li>
              <li><button onClick={(e) => handleNavClick('testimonials', e)} className="footer-link">Client Testimonials</button></li>
              <li><button onClick={(e) => handleNavClick('blog', e)} className="footer-link">Legal Blog</button></li>
              <li><button onClick={(e) => handleNavClick('contact', e)} className="footer-link">FAQ</button></li>
              <li><button onClick={(e) => handleNavClick('contact', e)} className="footer-link">Case Results</button></li>
              <li><button onClick={(e) => handleNavClick('free-consultation', e)} className="footer-link">Free Consultation</button></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="footer-section">
            <h3>Legal Information</h3>
            <ul>
              <li><button className="footer-link">Privacy Policy</button></li>
              <li><button className="footer-link">Terms of Service</button></li>
              <li><button className="footer-link">Legal Disclaimer</button></li>
              <li><button className="footer-link">Sitemap</button></li>
            </ul>
            <div className="footer-cta">
              <button 
                onClick={(e) => handleNavClick('free-consultation', e)}
                className="cta-button"
              >
                Get Free Consultation
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Florida Accident Lawyer. All rights reserved. | Attorney Advertising | Prior results do not guarantee a similar outcome.</p>
          <p className="disclaimer">This website is designed for general information only. The information presented should not be construed to be formal legal advice nor the formation of a lawyer/client relationship.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer