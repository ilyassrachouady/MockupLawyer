import React from 'react'
import './PracticeAreasPage.css'

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      title: "Car Accidents",
      description: "Injured in a car accident? We help you recover compensation for medical bills, lost wages, and pain & suffering. Our experienced team handles all types of vehicle collisions.",
      details: [
        "Rear-end collisions",
        "Head-on crashes",
        "Side-impact accidents",
        "Multi-vehicle accidents",
        "Hit-and-run cases",
        "Uninsured motorist claims"
      ],
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Truck Accidents",
      description: "Commercial truck accidents often result in severe injuries. We have the expertise to take on trucking companies and their insurance providers.",
      details: [
        "18-wheeler accidents",
        "Delivery truck crashes",
        "Construction vehicle accidents",
        "Jackknife accidents",
        "Truck driver fatigue cases",
        "Improper loading incidents"
      ],
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Motorcycle Accidents",
      description: "Motorcyclists face unique challenges after accidents. We understand your specific needs and rights as a motorcycle rider.",
      details: [
        "Lane splitting accidents",
        "Left-turn collisions",
        "Road hazard incidents",
        "Defective motorcycle parts",
        "Hit-and-run cases",
        "Insurance bad faith claims"
      ],
      image: "https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Slip & Fall",
      description: "Property owners must maintain safe premises. We hold negligent parties accountable for your injuries on their property.",
      details: [
        "Wet floor accidents",
        "Uneven surfaces",
        "Poor lighting incidents",
        "Defective stairs/railings",
        "Snow and ice accidents",
        "Inadequate security cases"
      ],
      image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Wrongful Death",
      description: "When negligence leads to loss of life, we help families seek justice and fair compensation for their devastating loss.",
      details: [
        "Fatal car accidents",
        "Medical malpractice deaths",
        "Workplace fatalities",
        "Defective product deaths",
        "Nursing home neglect",
        "Criminal acts resulting in death"
      ],
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards. We fight for victims of medical negligence and substandard care.",
      details: [
        "Surgical errors",
        "Misdiagnosis cases",
        "Birth injuries",
        "Medication errors",
        "Hospital negligence",
        "Failure to treat"
      ],
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ]

  return (
    <div className="practice-areas-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Our <span className="highlight">Practice Areas</span></h1>
            <p>We specialize in personal injury cases throughout Florida, fighting for the compensation you deserve.</p>
          </div>
        </div>
      </section>

      <section className="practice-areas-content">
        <div className="container">
          <div className="practice-areas-grid">
            {practiceAreas.map((area, index) => (
              <div key={index} className="practice-area-card">
                <div className="card-image">
                  <img src={area.image} alt={area.title} />
                </div>
                <div className="card-content">
                  <h3>{area.title}</h3>
                  <p className="description">{area.description}</p>
                  <div className="details">
                    <h4>We Handle:</h4>
                    <ul>
                      {area.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  <button className="cta-button">Get Free Consultation</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Florida Accident Lawyer?</h2>
            <p>Our proven track record speaks for itself</p>
          </div>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚖️</div>
              <h3>Experienced Legal Team</h3>
              <p>Over 20 years of combined experience in personal injury law</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>No Win, No Fee</h3>
              <p>We only get paid when you receive compensation</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">📞</div>
              <h3>24/7 Availability</h3>
              <p>Available around the clock for emergencies</p>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h3>Proven Results</h3>
              <p>Millions recovered for our clients</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PracticeAreasPage