import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import TrustSignals from '../components/TrustSignals';
import PracticeAreas from '../components/PracticeAreas';
// import Testimonials from '../components/Testimonials';
// import AsSeenIn from '../components/AsSeenIn';
// import ContactSection from '../components/ContactSection';
// import FAQSection from '../components/FAQSection';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Florida Accident Lawyer - Top-Rated Personal Injury Attorney</title>
        <meta name="description" content="Hurt in an accident? Our Florida accident lawyers offer a free consultation. We've recovered millions for clients. No fee unless we win. Call now!" />
        <meta property="og:title" content="Florida Accident Lawyer - Top-Rated Personal Injury Attorney" />
        <meta property="og:description" content="Hurt in an accident? Our Florida accident lawyers offer a free consultation. We've recovered millions for clients. No fee unless we win. Call now!" />
        <meta property="og:image" content="https://www.example.com/images/og-image-home.jpg" />
        <meta property="og:url" content="https://www.example.com/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.example.com/" />
      </Helmet>
      <HeroSection />
      <TrustSignals />
      <PracticeAreas />
      {/* <Testimonials /> */}
      {/* <AsSeenIn /> */}
      {/* <ContactSection /> */}
      {/* <FAQSection /> */}
    </div>
  );
};

export default HomePage;