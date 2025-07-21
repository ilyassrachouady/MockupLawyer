import React, { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import TrustSignals from '../components/TrustSignals'
import PracticeAreas from '../components/PracticeAreas'
import Testimonials from '../components/Testimonials'
import AsSeenIn from '../components/AsSeenIn'
import ContactSection from '../components/ContactSection'
import FAQSection from '../components/FAQSection'

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }))
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="home-page">
      <HeroSection />
      <TrustSignals isVisible={isVisible.trustSignals} />
      <PracticeAreas isVisible={isVisible.practiceAreas} />
      <Testimonials isVisible={isVisible.testimonials} />
      <AsSeenIn isVisible={isVisible.asSeenIn} />
      <ContactSection isVisible={isVisible.contactSection} />
      <FAQSection isVisible={isVisible.faqSection} />
    </div>
  )
}

export default HomePage