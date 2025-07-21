import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-navy text-white">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Florida's <span className="text-gold">Premier</span>
              <br />
              Personal Injury Lawyers
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0">
              With over 20 years of dedicated experience, we have recovered millions for accident victims across Florida. Your fight is our fight.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-300 font-semibold">
              Free Consultation. No Fee Unless We Win.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/free-consultation"
                className="bg-gold text-navy font-bold py-4 px-8 rounded-lg hover:bg-gold-dark transition-all text-lg shadow-lg"
              >
                Get Free Case Review
              </Link>
              <a
                href="tel:+1-800-LAWYER-FL"
                className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-navy transition-all text-lg flex items-center justify-center"
              >
                <Phone size={20} className="mr-3" />
                Call 24/7: (800) LAWYER-FL
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Florida Personal Injury Lawyer"
              className="rounded-lg shadow-2xl w-full max-w-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;