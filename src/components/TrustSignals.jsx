import React from 'react';
import { motion } from 'framer-motion';
import { Scale, DollarSign, Star, Phone, CheckCircle, Award } from 'lucide-react';

const TrustSignals = () => {
  const signals = [
    { icon: <Scale size={40} />, title: "20+ Years Experience", description: "Decades of proven legal expertise" },
    { icon: <DollarSign size={40} />, title: "$50M+ Recovered", description: "Millions won for our clients" },
    { icon: <Star size={40} />, title: "5-Star AVVO Rating", description: "Top-rated by peers and clients" },
    { icon: <Phone size={40} />, title: "Available 24/7", description: "Emergency legal support" },
    { icon: <CheckCircle size={40} />, title: "No Win, No Fee", description: "You pay nothing unless we win" },
    { icon: <Award size={40} />, title: "1000+ Cases Won", description: "Proven track record of success" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4"
              variants={itemVariants}
            >
              <div className="text-gold mb-3">
                {signal.icon}
              </div>
              <h3 className="text-lg font-bold text-navy">{signal.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{signal.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;