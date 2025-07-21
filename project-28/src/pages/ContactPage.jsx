import React, { useState } from 'react'
import './ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    incidentDate: '',
    description: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would submit to a server
    alert('Thank you for your submission! We will contact you within 24 hours.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      caseType: '',
      incidentDate: '',
      description: ''
    })
  }

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-800-LAWYER-FL'
  }

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@floridaaccidentlawyer.com'
  }

  return (
    <div className="contact-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Contact <span className="highlight">Our Team</span></h1>
            <p>Ready to fight for your rights? Contact us today for a free consultation. We're available 24/7 to help you get the justice you deserve.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get Your FREE Case Review</h2>
              <p className="mb-6">Don't wait - Florida law limits your time to file a claim. Contact us today for a free, no-obligation consultation.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-content">
                    <h3>Call 24/7</h3>
                    <button onClick={handlePhoneClick} className="contact-link">
                      (800) LAWYER-FL
                    </button>
                    <p>Available around the clock for emergencies</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email Us</h3>
                    <button onClick={handleEmailClick} className="contact-link">
                      info@floridaaccidentlawyer.com
                    </button>
                    <p>We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Office Location</h3>
                    <p>123 Legal Plaza<br />Miami, FL 33101</p>
                    <p>Free parking available</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">⏰</div>
                  <div className="method-content">
                    <h3>Office Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                       Saturday: 9:00 AM - 2:00 PM<br />
                       Sunday: Emergency calls only</p>
                  </div>
                </div>
              </div>
              
              <div className="why-choose-us">
                <h3>✅ Why Choose Us?</h3>
                <ul>
                  <li>✓ No fees unless we win</li>
                  <li>✓ Free consultation</li>
                  <li>✓ 20+ years experience</li>
                  <li>✓ Millions recovered</li>
                  <li>✓ Available 24/7</li>
                  <li>✓ Bilingual staff</li>
                </ul>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Request Your Free Consultation</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="caseType">Type of Case *</label>
                <select 
                  id="caseType" 
                  name="caseType" 
                  value={formData.caseType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Case Type</option>
                  <option value="car-accident">Car Accident</option>
                  <option value="truck-accident">Truck Accident</option>
                  <option value="motorcycle-accident">Motorcycle Accident</option>
                  <option value="slip-fall">Slip & Fall</option>
                  <option value="wrongful-death">Wrongful Death</option>
                  <option value="medical-malpractice">Medical Malpractice</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="incidentDate">Date of Incident</label>
                <input 
                  type="date" 
                  id="incidentDate" 
                  name="incidentDate" 
                  value={formData.incidentDate}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Brief Description of Your Case *</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please describe what happened..." 
                  required
                />
              </div>
              
              <button type="submit" className="cta-button cta-button-primary submit-button">
                Get My Free Consultation
              </button>
              
              <p className="form-disclaimer">
                By submitting this form, you agree to receive communications from our firm. 
                Your information is confidential and protected by attorney-client privilege.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <div className="section-title">
            <h2>Visit Our Office</h2>
            <p>Conveniently located in downtown Miami</p>
          </div>
          
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <h3>📍 Florida Accident Lawyer</h3>
                <p>123 Legal Plaza<br />Miami, FL 33101</p>
                <p><strong>Directions:</strong> Located in the heart of downtown Miami, 
                   easily accessible by public transportation. Free parking available 
                   in the building garage.</p>
                <button className="cta-button">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage