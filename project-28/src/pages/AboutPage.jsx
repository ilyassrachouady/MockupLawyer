import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>About <span className="highlight">Florida Accident Lawyer</span></h1>
            <p>For over two decades, we have been Florida's trusted advocates for accident victims, fighting tirelessly to secure the compensation our clients deserve.</p>
          </div>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2>Our Mission</h2>
              <p>At Florida Accident Lawyer, we believe that everyone deserves justice when they've been injured due to someone else's negligence. Our mission is to provide compassionate, aggressive legal representation to accident victims throughout Florida.</p>
              
              <h2>Our Experience</h2>
              <p>With over 20 years of combined experience, our legal team has successfully handled thousands of personal injury cases, recovering millions of dollars for our clients. We understand the physical, emotional, and financial toll that accidents can take on victims and their families.</p>
              
              <h2>Why Choose Us?</h2>
              <ul className="benefits-list">
                <li>✓ No fees unless we win your case</li>
                <li>✓ Free initial consultation</li>
                <li>✓ Available 24/7 for emergencies</li>
                <li>✓ Bilingual staff (English/Spanish)</li>
                <li>✓ Proven track record of success</li>
                <li>✓ Personalized attention to every case</li>
              </ul>
            </div>
            
            <div className="content-image">
              <img 
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="Florida Accident Lawyer Team" 
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Legal Team</h2>
            <p>Meet the experienced attorneys fighting for your rights</p>
          </div>
          
          <div className="team-grid">
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
                alt="Senior Partner" 
                className="team-photo"
              />
              <h3>John Smith, Esq.</h3>
              <p className="title">Senior Partner</p>
              <p>20+ years of personal injury law experience. Specializes in complex car accident and wrongful death cases.</p>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
                alt="Associate Attorney" 
                className="team-photo"
              />
              <h3>Maria Rodriguez, Esq.</h3>
              <p className="title">Associate Attorney</p>
              <p>15+ years focusing on slip & fall and medical malpractice cases. Fluent in English and Spanish.</p>
            </div>
            
            <div className="team-member">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop" 
                alt="Trial Attorney" 
                className="team-photo"
              />
              <h3>David Johnson, Esq.</h3>
              <p className="title">Trial Attorney</p>
              <p>12+ years of courtroom experience. Specializes in motorcycle accidents and premises liability cases.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage