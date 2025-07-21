import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1-800-LAWYER-FL';
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      {/* Top Bar */}
      <div className="bg-navy text-white py-2 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center"><MapPin size={14} className="mr-1" /> Serving All of Florida</span>
            <span className="flex items-center"><Clock size={14} className="mr-1" /> Available 24/7</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🚨 Emergency? Call Now!</span>
            <a href="tel:+1-800-LAWYER-FL" className="font-bold hover:text-gold transition-colors">
              (800) LAWYER-FL
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-navy">
            Florida<span className="text-gold">AccidentLawyer</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>About</NavLink></li>
            <li><NavLink to="/practice-areas" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>Practice Areas</NavLink></li>
            <li><NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')}>Contact</NavLink></li>
          </ul>

          <div className="flex items-center">
            <Link to="/free-consultation" className="hidden md:inline-block bg-gold text-white px-6 py-2 rounded-md hover:bg-gold-dark transition-all font-semibold">
              Free Case Review
            </Link>
            <button
              className="md:hidden text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl">
            <ul className="flex flex-col items-center space-y-4 py-4">
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>About</NavLink></li>
            <li><NavLink to="/practice-areas" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>Practice Areas</NavLink></li>
            <li><NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>Testimonials</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-gold font-semibold' : 'text-navy hover:text-gold transition-colors')} onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
              <li>
                <Link to="/free-consultation" className="w-full text-center bg-gold text-white px-8 py-3 rounded-md hover:bg-gold-dark transition-all font-semibold" onClick={() => setMobileMenuOpen(false)}>
                  Free Case Review
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;