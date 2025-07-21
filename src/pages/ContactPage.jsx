import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        console.log(data); // Replace with actual submission logic
        alert('Thank you for your message. We will be in touch shortly.');
        reset();
    };

    return (
        <div>
            <Helmet>
                <title>Contact Us | Florida Accident Lawyer</title>
                <meta name="description" content="Contact Florida Accident Lawyer for a free, no-obligation case review. We are available 24/7 to help you with your personal injury claim." />
            </Helmet>

            <motion.section
                className="bg-navy text-white text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold">Contact <span className="text-gold">Our Team</span></h1>
                <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Ready to fight for your rights? Contact us today. We're available 24/7.</p>
            </motion.section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-navy mb-4">Get Your FREE Case Review</h2>
                            <p className="text-gray-600 mb-8">Florida law limits the time to file a claim. Don't wait. Contact us for a free, no-obligation consultation.</p>
                            <div className="space-y-6">
                                <div className="flex items-start"><Phone className="text-gold h-6 w-6 mr-4 mt-1" /><a href="tel:+1-800-LAWYER-FL" className="text-lg text-navy hover:text-gold"> (800) LAWYER-FL <span className="block text-sm text-gray-500">Call 24/7 for Emergencies</span></a></div>
                                <div className="flex items-start"><Mail className="text-gold h-6 w-6 mr-4 mt-1" /><a href="mailto:info@floridaaccidentlawyer.com" className="text-lg text-navy hover:text-gold">info@floridaaccidentlawyer.com <span className="block text-sm text-gray-500">We respond promptly</span></a></div>
                                <div className="flex items-start"><MapPin className="text-gold h-6 w-6 mr-4 mt-1" /><p className="text-lg text-navy">123 Legal Plaza, Miami, FL<span className="block text-sm text-gray-500">Free parking available</span></p></div>
                                <div className="flex items-start"><Clock className="text-gold h-6 w-6 mr-4 mt-1" /><p className="text-lg text-navy">Mon-Fri: 8am-6pm, Sat: 9am-2pm<span className="block text-sm text-gray-500">Emergency calls anytime</span></p></div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-lg"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" {...register("name", { required: "Full name is required" })} className={`mt-1 block w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" id="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })} className={`mt-1 block w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`} />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" {...register("phone")} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">How can we help?</label>
                                    <textarea id="message" {...register("message", { required: "Please describe your case" })} rows="4" className={`mt-1 block w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-gold focus:border-gold`}></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                                </div>
                                <button type="submit" className="w-full bg-gold text-navy font-bold py-3 px-4 rounded-lg hover:bg-gold-dark transition-all text-lg shadow-lg">Submit Free Case Review</button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;