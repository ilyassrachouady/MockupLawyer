import React, { useState } from 'react'
import './FreeConsultationPage.css'

const FreeConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    caseType: '',
    incidentDate: '',
    description: '',
    injuries: '',
    medicalTreatment: '',
    insuranceClaim: ''
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
    alert('Thank you for your detailed submission! We will contact you within 2 hours to schedule your free consultation.')
    setFormData({
      name: '',
      phone: '',
      email: '',
      caseType: '',
      incidentDate: '',
      description: '',
      injuries: '',
      medicalTreatment: '',
      insuranceClaim: ''
    })
  }

  return (
    <div className="free-consultation-page">
      <section className="hero-section">
        <div class="container">
          <div className="hero-content">
            <h1>Get Your <span className="highlight">FREE</span> Case Review</h1>
            <p>Don't wait - Florida law limits your time to file a claim. Get your free, no-obligation consultation today.</p>
            
            <div className="hero-benefits">
              <div className="benefit">
                <span className="benefit-icon">✓</span>
                <span>100% Free Consultation</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">✓</span>
                <span>No Fees Unless We Win</span>
              </div>
              <div className="benefit">
                <span className="benefit-icon">✓</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="consultation-content">
        <div className="container">
          <div className="consultation-grid">
            <div className="consultation-info">
              <h2>What to Expect</h2>
              
              <div className="expectation-item">
                <div className="expectation-number">1</div>
                <div className="expectation-content">
                  <h3>Free Case Evaluation</h3>
                  <p>We'll review your case details and determine if you have a valid personal injury claim.</p>
                </div>
              </div>
              
              <div className="expectation-item">
                <div className="expectation-number">2</div>
                <div className="expectation-content">
                  <h3>Legal Strategy Discussion</h3>
                  <p>Our experienced attorneys will explain your legal options and potential outcomes.</p>
                </div>
              </div>
              
              <div className="expectation-item">
                <div className="expectation-number">3</div>
                <div className="expectation-content">
                  <h3>No Obligation Decision</h3>
                  <p>You're under no obligation to hire us. The consultation is completely free.</p>
                </div>
              </div>
              
              <div className="consultation-stats">
                <h3>Our Track Record</h3>
                <div className="stats-grid">
                  <div className="stat">
                    <div className="stat-number">$50M+</div>
                    <div className="stat-label">Recovered</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">1000+</div>
                    <div className="stat-label">Cases Won</div>
                  </div>
                  <div className="stat">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="urgent-notice">
                <h3>⚠️ Time is Critical</h3>
                <p>Florida law gives you limited time to file a personal injury claim. Don't wait - contact us today to protect your rights.</p>
              </div>
            </div>
            
            <form className="consultation-form" onSubmit={handleSubmit}>
              <h3>Request Your Free Consultation</h3>
              <p className="form-subtitle">Fill out this form and we'll contact you within 2 hours</p>
              
              <div className="form-row">
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
                <label htmlFor="incidentDate">Date of Incident *</label>
                <input 
                  type="date" 
                  id="incidentDate" 
                  name="incidentDate" 
                  value={formData.incidentDate}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Describe What Happened *</label>
                <textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide details about the incident..." 
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="injuries">What Injuries Did You Sustain?</label>
                <textarea 
                  id="injuries" 
                  name="injuries" 
                  value={formData.injuries}
                  onChange={handleInputChange}
                  placeholder="Describe your injuries..."
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="medicalTreatment">Have You Received Medical Treatment?</label>
                <select 
                  id="medicalTreatment" 
                  name="medicalTreatment" 
                  value={formData.medicalTreatment}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="yes-ongoing">Yes, ongoing treatment</option>
                  <option value="yes-completed">Yes, treatment completed</option>
                  <option value="no">No medical treatment</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="insuranceClaim">Have You Filed an Insurance Claim?</label>
                <select 
                  id="insuranceClaim" 
                  name="insuranceClaim" 
                  value={formData.insuranceClaim}
                  onChange={handleInputChange}
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                  <option value="unsure">Not sure</option>
                </select>
              </div>
              
              <button type="submit" className="cta-button cta-button-primary submit-button">
                Get My Free Consultation Now
              </button>
              
              <p className="form-disclaimer">
                By submitting this form, you agree to receive communications from our firm. 
                Your information is confidential and protected by attorney-client privilege.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FreeConsultationPage