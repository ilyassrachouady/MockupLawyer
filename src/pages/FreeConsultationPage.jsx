import React from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const FreeConsultationPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert('Thank you for your submission! We will contact you shortly.');
        reset();
    };

    return (
        <div>
            <Helmet>
                <title>Free Case Review | Florida Accident Lawyer</title>
                <meta name="description" content="Get a free, confidential case review from our experienced personal injury attorneys. Florida law limits your time to file a claim, so act now." />
            </Helmet>

            <section className="bg-navy text-white text-center py-20">
                <motion.h1 className="text-4xl md:text-6xl font-extrabold" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                    Get Your <span className="text-gold">FREE</span> Case Review
                </motion.h1>
                <motion.p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    Don't wait. Florida law limits your time to file a claim.
                </motion.p>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            className="bg-white p-8 rounded-lg shadow-2xl"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold text-navy mb-6">Request Your Free Consultation</h2>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                {/* Form fields using react-hook-form */}
                                <input {...register("name", { required: true })} placeholder="Full Name *" className="w-full p-3 border rounded" />
                                {errors.name && <span className="text-red-500">This field is required</span>}

                                <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email Address *" className="w-full p-3 border rounded" />
                                {errors.email && <span className="text-red-500">Valid email is required</span>}

                                <input {...register("phone")} placeholder="Phone Number" className="w-full p-3 border rounded" />

                                <textarea {...register("message", { required: true })} placeholder="Briefly describe your case *" rows="5" className="w-full p-3 border rounded"></textarea>
                                {errors.message && <span className="text-red-500">This field is required</span>}

                                <button type="submit" className="w-full bg-gold text-navy font-bold py-4 rounded-lg hover:bg-gold-dark transition-all text-lg">Submit for Free Review</button>
                                <p className="text-xs text-gray-500 text-center mt-2">Your information is confidential and protected by attorney-client privilege.</p>
                            </form>
                        </motion.div>

                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-3xl font-bold text-navy mb-4">What to Expect</h3>
                            <ul className="space-y-4 text-gray-700">
                                <li className="flex items-start"><CheckCircle className="text-green-500 h-6 w-6 mr-3 mt-1" /><span><strong>Free Evaluation:</strong> We'll review your case details to determine your claim's validity.</span></li>
                                <li className="flex items-start"><CheckCircle className="text-green-500 h-6 w-6 mr-3 mt-1" /><span><strong>Legal Strategy:</strong> Our attorneys will explain your options and potential outcomes.</span></li>
                                <li className="flex items-start"><CheckCircle className="text-green-500 h-6 w-6 mr-3 mt-1" /><span><strong>No Obligation:</strong> The consultation is completely free. You are not obligated to hire us.</span></li>
                            </ul>

                            <div className="mt-8 bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                                <p className="font-bold flex items-center"><AlertTriangle className="mr-2"/>Time is Critical</p>
                                <p>Florida's statute of limitations restricts the time you have to file a personal injury claim. Contact us today to protect your rights.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FreeConsultationPage;