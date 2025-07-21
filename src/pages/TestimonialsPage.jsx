import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';

const TestimonialsPage = () => {
    const testimonials = [
        { name: "Sarah J.", case: "Car Accident", rating: 5, text: "They fought for me and got me the settlement I deserved. I can't thank them enough!", image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", settlement: "$125,000" },
        { name: "Michael R.", case: "Motorcycle Accident", rating: 5, text: "Professional, caring, and results-driven. The settlement exceeded my expectations.", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", settlement: "$200,000" },
        { name: "Maria G.", case: "Wrongful Death", rating: 5, text: "This firm helped our family through the darkest time and secured our financial future.", image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face", settlement: "$750,000" },
        // ... more testimonials
    ];

    const renderStars = (rating) => (
        <div className="flex">
            {[...Array(rating)].map((_, i) => <Star key={i} className="text-yellow-400 fill-current" size={20} />)}
        </div>
    );

    return (
        <div>
            <Helmet>
                <title>Client Testimonials | Florida Accident Lawyer</title>
                <meta name="description" content="Read real stories from satisfied clients of Florida Accident Lawyer. See why we are a top-rated personal injury law firm." />
            </Helmet>

            <motion.section
                className="bg-navy text-white text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold">Client <span className="text-gold">Testimonials</span></h1>
                <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Real stories from real people we've helped across Florida.</p>
            </motion.section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-8 flex flex-col"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Quote className="text-gold w-10 h-10 mb-4" />
                                <p className="text-gray-600 italic mb-6 flex-grow">"{testimonial.text}"</p>
                                <div className="flex items-center mt-auto">
                                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                                    <div>
                                        <h4 className="font-bold text-navy text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.case} Client</p>
                                        {renderStars(testimonial.rating)}
                                    </div>
                                    <div className="ml-auto text-right">
                                        <p className="text-lg font-bold text-green-600">{testimonial.settlement}</p>
                                        <p className="text-sm text-gray-500">Settlement</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gold text-navy text-center py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-4">Ready to Share Your Story?</h2>
                    <p className="text-lg mb-8">If you've been injured, let us fight for you. Your success story could be next.</p>
                    <Link
                        to="/free-consultation"
                        className="bg-navy text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all text-lg shadow-lg"
                    >
                        Get a Free Case Review
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;