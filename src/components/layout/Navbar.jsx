
import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { motion, useScroll } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre', href: '#about' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Experiência', href: '#experience' },
        { name: 'Contato', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4 shadow-lg border-b border-white/10'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
                <a
                    href="#"
                    onClick={(e) => scrollToSection(e, '#hero')}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-purple-600"
                >
                    Nicolas<span className="text-white">.Dev</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-gray-300 hover:text-white transition-colors relative group text-sm font-medium"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <Button
                        type="primary"
                        href="https://github.com/NicolasVitorP"
                        target="_blank"
                        className="bg-primary hover:bg-primary-hover border-none"
                        aria-label="Visitar perfil no GitHub"
                    >
                        GitHub
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <Button
                    className="md:hidden text-white border-white/20"
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={() => setMobileMenuOpen(true)}
                    aria-label="Abrir menu de navegação"
                />

                {/* Mobile Drawer */}
                <Drawer
                    title={<span className="text-white">Menu</span>}
                    placement="right"
                    onClose={() => setMobileMenuOpen(false)}
                    open={mobileMenuOpen}
                    styles={{
                        body: { backgroundColor: '#121212', padding: 0 },
                        header: { backgroundColor: '#121212', borderBottom: '1px solid rgba(255,255,255,0.1)' },
                        content: { backgroundColor: '#121212' }
                    }}
                    closeIcon={<span className="text-white">✕</span>}
                >
                    <div className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="py-4 text-gray-300 hover:text-white border-b border-white/5 text-lg"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </Drawer>
            </div>
        </motion.nav>
    );
};

export default Navbar;
