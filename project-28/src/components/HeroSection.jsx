import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-800-LAWYER-FL'
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Florida's <span className="highlight">Premier</span> Personal Injury Lawyers</h1>
            <p>Over 20 years of experience fighting for accident victims. We've recovered millions in compensation for our clients. Free consultation - No fees unless we win.</p>
            <div className="hero-cta">
              <button onClick={scrollToContact} className="cta-button cta-button-primary">
                Get Free Case Review
              </button>
              <button onClick={handlePhoneClick} className="cta-button">
                Call 24/7: (800) LAWYER-FL
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
              alt="Florida Personal Injury Lawyer" 
              className="lawyer-photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection