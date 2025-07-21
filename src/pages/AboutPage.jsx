import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    { name: "John Smith, Esq.", title: "Senior Partner", experience: "20+ years in personal injury law, specializing in complex car accident and wrongful death cases.", image: "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Maria Rodriguez, Esq.", title: "Associate Attorney", experience: "15+ years focusing on slip & fall and medical malpractice. Fluent in English and Spanish.", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "David Johnson, Esq.", title: "Trial Attorney", experience: "12+ years of courtroom experience, specializing in motorcycle accidents and premises liability.", image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ];

  const benefits = [
    "No fees unless we win your case",
    "Free, no-obligation consultation",
    "Available 24/7 for emergencies",
    "Bilingual staff (English/Spanish)",
    "Proven track record of success",
    "Personalized attention for every client"
  ];

  return (
    <div>
      <Helmet>
        <title>About Us | Florida Accident Lawyer</title>
        <meta name="description" content="Learn about Florida Accident Lawyer's mission, experience, and the dedicated legal team fighting for accident victims' rights across Florida." />
      </Helmet>

      {/* Hero Section */}
      <motion.section
        className="bg-navy text-white text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">About <span className="text-gold">Florida Accident Lawyer</span></h1>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            For over two decades, we have been Florida's trusted advocates for accident victims, fighting tirelessly to secure the justice and compensation our clients deserve.
          </p>
        </div>
      </motion.section>

      {/* Mission & Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-4">Our Mission & Philosophy</h2>
              <p className="text-gray-600 mb-4">
                At Florida Accident Lawyer, our mission is simple: to provide compassionate, aggressive, and effective legal representation to those injured by the negligence of others. We believe that justice isn't just a concept; it's a right. We handle the legal burdens so you can focus on healing.
              </p>
              <h3 className="text-2xl font-bold text-navy mb-4 mt-6">Decades of Experience</h3>
              <p className="text-gray-600">
                With a combined experience of over 50 years, our legal team has successfully navigated thousands of personal injury cases, recovering millions of dollars for our clients. We understand the physical, emotional, and financial toll an accident takes, and we use our extensive knowledge to fight for you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.pexels.com/photos/1251844/pexels-photo-1251844.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Legal documents and gavel" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-12">Why Choose Florida Accident Lawyer?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CheckCircle className="text-gold h-6 w-6 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-navy text-center mb-4">Our Dedicated Legal Team</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">Meet the experienced attorneys fighting for your rights.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                <p className="text-gold font-semibold mb-2">{member.title}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;