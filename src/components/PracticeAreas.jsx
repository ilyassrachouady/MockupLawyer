import React from 'react'
import './PracticeAreas.css'

const PracticeAreas = ({ isVisible }) => {
  const practiceAreas = [
    {
      title: "Car Accidents",
      description: "Injured in a car accident? We fight for maximum compensation for medical bills, lost wages, and pain & suffering.",
      icon: "🚗",
      cases: ["Rear-end collisions", "Head-on crashes", "Side-impact accidents", "Hit-and-run cases"]
    },
    {
      title: "Truck Accidents",
      description: "Commercial truck accidents often result in severe injuries. We have the expertise to take on trucking companies.",
      icon: "🚛",
      cases: ["18-wheeler accidents", "Delivery truck crashes", "Jackknife accidents", "Driver fatigue cases"]
    },
    {
      title: "Motorcycle Accidents",
      description: "Motorcyclists face unique challenges after accidents. We understand your specific needs and rights.",
      icon: "🏍️",
      cases: ["Lane splitting accidents", "Left-turn collisions", "Road hazard incidents", "Defective parts"]
    },
    {
      title: "Slip & Fall",
      description: "Property owners must maintain safe premises. We hold negligent parties accountable for your injuries.",
      icon: "⚠️",
      cases: ["Wet floor accidents", "Uneven surfaces", "Poor lighting", "Defective stairs"]
    },
    {
      title: "Wrongful Death",
      description: "When negligence leads to loss of life, we help families seek justice and fair compensation.",
      icon: "⚖️",
      cases: ["Fatal car accidents", "Medical malpractice", "Workplace fatalities", "Defective products"]
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards. We fight for victims of medical negligence.",
      icon: "🏥",
      cases: ["Surgical errors", "Misdiagnosis", "Birth injuries", "Medication errors"]
    }
  ]

  return (
    <section className={`practice-areas ${isVisible ? 'fade-in-up' : ''}`} id="practiceAreas" data-animate>
      <div className="container">
        <div className="section-title">
          <h2>Our Practice Areas</h2>
          <p>We specialize in personal injury cases throughout Florida</p>
        </div>
        
        <div className="practice-areas-grid">
          {practiceAreas.map((area, index) => (
            <div key={index} className="practice-area-card">
              <div className="practice-icon">{area.icon}</div>
              <h3>{area.title}</h3>
              <p className="practice-description">{area.description}</p>
              <ul className="practice-cases">
                {area.cases.map((caseType, caseIndex) => (
                  <li key={caseIndex}>{caseType}</li>
                ))}
              </ul>
              <button className="cta-button">Learn More</button>
            </div>
          ))}
        </div>
        
        <div className="practice-areas-cta">
          <h3>Don't See Your Case Type?</h3>
          <p>We handle all types of personal injury cases. Contact us for a free consultation.</p>
          <button className="cta-button cta-button-primary">Get Free Case Review</button>
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas