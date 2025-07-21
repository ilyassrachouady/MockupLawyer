import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Tag, Clock, Calendar } from 'lucide-react';

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const blogPosts = [
        { title: "What to Do After a Car Accident", date: "Jan 15, 2025", category: "Car Accidents", readTime: "5 min", image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400" },
        { title: "Florida's No-Fault Insurance", date: "Jan 12, 2025", category: "Insurance", readTime: "7 min", image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400" },
        // ... more posts
    ];
    const categories = ["All", "Car Accidents", "Insurance", "Motorcycle Accidents", "Slip & Fall", "Legal Tips"];

    const filteredPosts = selectedCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === selectedCategory);

    return (
        <div>
            <Helmet>
                <title>Legal Blog | Florida Accident Lawyer</title>
                <meta name="description" content="Stay informed with the latest legal insights, tips, and news on personal injury law in Florida from our expert attorneys." />
            </Helmet>

            <motion.section
                className="bg-navy text-white text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <h1 className="text-4xl md:text-6xl font-extrabold">Legal <span className="text-gold">Blog</span></h1>
                <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">Insights and news on personal injury law in Florida.</p>
            </motion.section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Category Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full font-semibold transition-colors ${selectedCategory === category ? 'bg-gold text-navy' : 'bg-white text-gray-600 hover:bg-gray-200'}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <div className="flex items-center text-sm text-gray-500 mb-2">
                                        <Tag size={14} className="mr-1" /> {post.category}
                                        <span className="mx-2">|</span>
                                        <Calendar size={14} className="mr-1" /> {post.date}
                                        <span className="mx-2">|</span>
                                        <Clock size={14} className="mr-1" /> {post.readTime}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy mb-3">{post.title}</h3>
                                    <Link to="#" className="font-semibold text-gold hover:underline">Read More →</Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;