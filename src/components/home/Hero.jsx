
import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { portfolioDAO } from '../../daos/PortfolioDAO';

const Hero = () => {
    const personalInfo = portfolioDAO.getProfile();

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Glows */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary-light text-sm font-medium mb-6"
                >
                    👋 Olá, eu sou {personalInfo.name}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                >
                    Criando Experiências Web <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light via-purple-500 to-pink-500 animate-gradient">
                        Modernas e Intuitivas
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
                >
                    {personalInfo.tagline}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a href="#projects">
                        <Button
                            type="primary"
                            size="large"
                            icon={<ArrowRightOutlined />}
                            className="h-12 px-8 text-base bg-primary hover:bg-primary-hover border-none rounded-full"
                        >
                            Ver Projetos
                        </Button>
                    </a>
                    <a href="#contact">
                        <Button
                            size="large"
                            className="h-12 px-8 text-base bg-white/5 border-white/10 text-white hover:text-primary-light hover:border-primary-light rounded-full hover:bg-white/10"
                        >
                            Entrar em Contato
                        </Button>
                    </a>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
