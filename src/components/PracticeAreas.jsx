import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Car, Truck, Motorcycle, PersonStanding, HeartHandshake, Stethoscope } from 'lucide-react';

const PracticeAreas = () => {
  const areas = [
    { title: "Car Accidents", icon: <Car size={40} />, description: "Seeking justice for victims of negligent driving and road accidents." },
    { title: "Truck Accidents", icon: <Truck size={40} />, description: "Handling complex cases involving commercial vehicle collisions." },
    { title: "Motorcycle Accidents", icon: <Motorcycle size={40} />, description: "Protecting the rights of motorcyclists on Florida's roads." },
    { title: "Slip & Fall", icon: <PersonStanding size={40} />, description: "Holding property owners accountable for unsafe conditions." },
    { title: "Wrongful Death", icon: <HeartHandshake size={40} />, description: "Compassionate legal support for families who lost a loved one." },
    { title: "Medical Malpractice", icon: <Stethoscope size={40} />, description: "Fighting for patients harmed by medical negligence." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-navy mb-4">Our Practice Areas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            We are a full-service personal injury law firm dedicated to providing exceptional legal representation to clients throughout Florida.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              variants={itemVariants}
            >
              <div className="text-gold mb-4">{area.icon}</div>
              <h3 className="text-2xl font-bold text-navy mb-3">{area.title}</h3>
              <p className="text-gray-600 flex-grow">{area.description}</p>
              <Link to="/practice-areas" className="text-gold font-semibold mt-6 hover:underline self-start">
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-navy mb-3">Don't See Your Case Type?</h3>
          <p className="text-gray-600 mb-6">The legal system is complex. We handle a wide variety of injury cases. Contact us for a free, confidential review of your situation.</p>
          <Link
            to="/free-consultation"
            className="bg-gold text-navy font-bold py-4 px-8 rounded-lg hover:bg-gold-dark transition-all text-lg shadow-lg"
          >
            Get a Free Case Review
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;