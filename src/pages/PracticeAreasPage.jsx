import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckSquare, Scale, DollarSign, Phone, Award } from 'lucide-react';

const PracticeAreasPage = () => {
  const practiceAreas = [
    {
      title: "Car Accidents",
      description: "We help you recover compensation for medical bills, lost wages, and pain & suffering. Our experienced team handles all types of vehicle collisions.",
      details: ["Rear-end collisions", "Head-on crashes", "Side-impact accidents", "Hit-and-run cases", "Uninsured motorist claims"],
      image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Truck Accidents",
      description: "Commercial truck accidents can cause severe injuries. We have the expertise to take on large trucking companies and their insurance providers.",
      details: ["18-wheeler accidents", "Delivery truck crashes", "Jackknife accidents", "Driver fatigue cases", "Improper loading incidents"],
      image: "https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    // ... Add other practice areas similarly
  ];

  const benefits = [
      { icon: <Scale size={32} />, title: "Experienced Legal Team", description: "Over 20 years of combined experience." },
      { icon: <DollarSign size={32} />, title: "No Win, No Fee", description: "You pay nothing unless we win your case." },
      { icon: <Phone size={32} />, title: "24/7 Availability", description: "We're here for you around the clock." },
      { icon: <Award size={32} />, title: "Proven Results", description: "Millions recovered for our clients." },
  ];

  return (
    <div>
      <Helmet>
        <title>Practice Areas | Florida Accident Lawyer</title>
        <meta name="description" content="Explore the personal injury practice areas of Florida Accident Lawyer, including car accidents, truck accidents, slip & fall, and more. We fight for you." />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="bg-navy text-white text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">Our <span className="text-gold">Practice Areas</span></h1>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Specializing in a wide range of personal injury cases throughout Florida, we are committed to fighting for the maximum compensation you deserve.
          </p>
        </div>
      </motion.section>

      {/* Practice Areas Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className={`order-1 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <img src={area.image} alt={area.title} className="rounded-lg shadow-xl" />
                </div>
                <div className={`order-2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h2 className="text-3xl font-bold text-navy mb-4">{area.title}</h2>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <h4 className="font-bold text-navy mb-3">Common case types include:</h4>
                  <ul className="space-y-2">
                    {area.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <CheckSquare className="text-gold h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/free-consultation" className="inline-block bg-gold text-navy font-bold py-3 px-6 rounded-lg hover:bg-gold-dark transition-all mt-6">
                    Discuss Your Case
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-navy mb-12">Why We're the Right Choice for You</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="text-gold inline-block p-4 bg-gray-100 rounded-full mb-4">
                            {benefit.icon}
                        </div>
                        <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;