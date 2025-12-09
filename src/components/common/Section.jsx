
import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, subtitle, children, className = "" }) => {
    return (
        <section id={id} className={`py-20 px-4 md:px-8 relative ${className}`}>
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 text-center"
                    >
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-purple-600">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                {subtitle}
                            </p>
                        )}
                        <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
