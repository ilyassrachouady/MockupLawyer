import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ currentPage, navigateTo, mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (page, e) => {
    e.preventDefault()
    navigateTo(page)
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-800-LAWYER-FL'
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Header Bar */}
      <div className="header-top">
        <div className="container">
          <div className="header-content">
            <div className="emergency-contact">
              <span>🚨 Emergency? Call Now!</span>
              <button onClick={handlePhoneClick} className="phone-number">
                (800) LAWYER-FL
              </button>
            </div>
            <div className="header-info">
              <span>📍 Serving All of Florida • ⏰ Available 24/7 • 💼 Free Consultations</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <nav className="nav-content">
            <button 
              onClick={(e) => handleNavClick('home', e)} 
              className="logo"
            >
              Florida<span>AccidentLawyer</span>
            </button>
            
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li>
                <button 
                  onClick={(e) => handleNavClick('home', e)}
                  className={currentPage === 'home' ? 'active' : ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('about', e)}
                  className={currentPage === 'about' ? 'active' : ''}
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('practice-areas', e)}
                  className={currentPage === 'practice-areas' ? 'active' : ''}
                >
                  Practice Areas
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('testimonials', e)}
                  className={currentPage === 'testimonials' ? 'active' : ''}
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('blog', e)}
                  className={currentPage === 'blog' ? 'active' : ''}
                >
                  Blog
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleNavClick('contact', e)}
                  className={currentPage === 'contact' ? 'active' : ''}
                >
                  Contact
                </button>
              </li>
            </ul>
            
            <div className="header-actions">
              <button 
                onClick={(e) => handleNavClick('free-consultation', e)}
                className="cta-button"
              >
                Free Case Review
              </button>
              <button 
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header