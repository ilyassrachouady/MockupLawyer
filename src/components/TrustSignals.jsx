import React from 'react'
import './TrustSignals.css'

const TrustSignals = ({ isVisible }) => {
  return (
    <section className={`trust-signals ${isVisible ? 'fade-in-up' : ''}`} id="trustSignals" data-animate>
      <div className="container">
        <div className="trust-grid">
          <div className="trust-item">
            <div className="trust-icon">⚖️</div>
            <h3>20+ Years Experience</h3>
            <p>Decades of proven legal expertise</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">💰</div>
            <h3>$50M+ Recovered</h3>
            <p>Millions won for our clients</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">⭐</div>
            <h3>5-Star AVVO Rating</h3>
            <p>Top-rated by peers and clients</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">📞</div>
            <h3>Available 24/7</h3>
            <p>Emergency legal support</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">✅</div>
            <h3>No Win, No Fee</h3>
            <p>Free consultation guaranteed</p>
          </div>
          
          <div className="trust-item">
            <div className="trust-icon">🏆</div>
            <h3>1000+ Cases Won</h3>
            <p>Proven track record of success</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSignals