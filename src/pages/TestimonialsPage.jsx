import React from 'react'
import './TestimonialsPage.css'

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      case: "Car Accident",
      rating: 5,
      text: "After my car accident, I was overwhelmed with medical bills and insurance companies. Florida Accident Lawyer fought for me and got me the settlement I deserved. I can't thank them enough!",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$125,000"
    },
    {
      name: "Michael Rodriguez",
      case: "Motorcycle Accident",
      rating: 5,
      text: "Professional, caring, and results-driven. They handled everything while I focused on recovery. The settlement exceeded my expectations. Highly recommend!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$200,000"
    },
    {
      name: "Maria Garcia",
      case: "Wrongful Death",
      rating: 5,
      text: "When my husband was killed in a workplace accident, I didn't know where to turn. This firm helped our family through the darkest time and secured our financial future.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$750,000"
    },
    {
      name: "David Thompson",
      case: "Slip & Fall",
      rating: 5,
      text: "I slipped and fell at a grocery store and suffered a serious back injury. The legal team was thorough, professional, and got me fair compensation for my injuries.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$85,000"
    },
    {
      name: "Jennifer Williams",
      case: "Medical Malpractice",
      rating: 5,
      text: "The attorneys at Florida Accident Lawyer took on my complex medical malpractice case when others wouldn't. Their expertise and dedication resulted in a substantial settlement.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$500,000"
    },
    {
      name: "Robert Chen",
      case: "Truck Accident",
      rating: 5,
      text: "After being hit by an 18-wheeler, I thought my life was over. This law firm fought the trucking company and their insurance, securing compensation that covers my ongoing medical needs.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      settlement: "$1,200,000"
    }
  ]

  const renderStars = (rating) => {
    return '★'.repeat(rating)
  }

  return (
    <div className="testimonials-page">
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1>Client <span className="highlight">Testimonials</span></h1>
            <p>Real stories from real people we've helped recover millions in compensation</p>
          </div>
        </div>
      </section>

      <section className="testimonials-content">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="client-photo"
                  />
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <p className="case-type">{testimonial.case}</p>
                    <div className="stars">{renderStars(testimonial.rating)}</div>
                  </div>
                  <div className="settlement">
                    <span className="settlement-amount">{testimonial.settlement}</span>
                    <span className="settlement-label">Settlement</span>
                  </div>
                </div>
                
                <div className="testimonial-text">
                  <p>"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Track Record</h2>
            <p>Numbers that speak for themselves</p>
          </div>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">$50M+</div>
              <div className="stat-label">Total Recovered</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Cases Won</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">5.0</div>
              <div className="stat-label">AVVO Rating</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get the Compensation You Deserve?</h2>
            <p>Join hundreds of satisfied clients who trusted us with their cases</p>
            <button className="cta-button cta-button-primary">Get Your Free Consultation</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage