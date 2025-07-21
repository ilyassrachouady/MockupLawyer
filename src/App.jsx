import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PracticeAreasPage from './pages/PracticeAreasPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import FreeConsultationPage from './pages/FreeConsultationPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      const path = window.location.pathname
      const page = path === '/' ? 'home' : path.slice(1)
      setCurrentPage(page)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (page) => {
    setCurrentPage(page)
    const path = page === 'home' ? '/' : `/${page}`
    window.history.pushState(null, null, path)
    setMobileMenuOpen(false)
    
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />
      case 'practice-areas':
        return <PracticeAreasPage />
      case 'testimonials':
        return <TestimonialsPage />
      case 'contact':
        return <ContactPage />
      case 'blog':
        return <BlogPage />
      case 'free-consultation':
        return <FreeConsultationPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="App">
      <Header 
        currentPage={currentPage}
        navigateTo={navigateTo}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App