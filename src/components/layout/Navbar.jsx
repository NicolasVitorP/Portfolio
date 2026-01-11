
import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { 
    MenuOutlined, 
    UserOutlined, 
    ThunderboltOutlined, 
    ProjectOutlined, 
    HistoryOutlined, 
    MailOutlined,
    GithubOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Sobre', href: '#about', icon: <UserOutlined /> },
        { name: 'Skills', href: '#skills', icon: <ThunderboltOutlined /> },
        { name: 'Projetos', href: '#projects', icon: <ProjectOutlined /> },
        { name: 'Experiência', href: '#experience', icon: <HistoryOutlined /> },
        { name: 'Contato', href: '#contact', icon: <MailOutlined /> },
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
        <div className="fixed w-full z-50 px-4 pt-6 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="max-w-5xl mx-auto pointer-events-auto bg-black/40 backdrop-blur-xl py-3 px-6 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border border-white/5"
            >
                <div className="flex justify-between items-center">
                    <a
                        href="#"
                        onClick={(e) => scrollToSection(e, '#hero')}
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-purple-400"
                    >
                        Nicolas<span className="text-white">.Dev</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex flex-col items-center px-4 py-2 text-gray-400 hover:text-white transition-all group relative"
                            >
                                <span className="text-lg mb-0.5 group-hover:scale-110 transition-transform">
                                    {link.icon}
                                </span>
                                <span className="text-[10px] uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-1">
                                    {link.name}
                                </span>
                                <span className="text-xs font-medium group-hover:opacity-0 transition-opacity">
                                    {link.name}
                                </span>
                                <span className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </a>
                        ))}
                        
                        <div className="w-px h-6 bg-white/10 mx-2" />
                        
                        <Button
                            type="text"
                            icon={<GithubOutlined className="text-xl" />}
                            href="https://github.com/NicolasVitorP"
                            target="_blank"
                            className="text-gray-400 hover:text-white flex items-center justify-center p-2 rounded-xl hover:bg-white/5 transition-all"
                            aria-label="GitHub"
                        />
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Button
                        className="md:hidden text-white border-none bg-white/5 hover:bg-white/10"
                        type="text"
                        icon={<MenuOutlined />}
                        onClick={() => setMobileMenuOpen(true)}
                    />
                </div>

                {/* Mobile Drawer */}
                <Drawer
                    title={<span className="text-white font-bold">Menu Principal</span>}
                    placement="right"
                    onClose={() => setMobileMenuOpen(false)}
                    open={mobileMenuOpen}
                    styles={{
                        body: { backgroundColor: '#0a0a0a', padding: '1.5rem 0' },
                        header: { backgroundColor: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.05)' },
                        content: { backgroundColor: '#0a0a0a' }
                    }}
                    closeIcon={<span className="text-white text-xl">✕</span>}
                >
                    <div className="flex flex-col gap-2 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="flex items-center gap-4 p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-lg font-medium"
                            >
                                <span className="text-xl text-primary-light">{link.icon}</span>
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="https://github.com/NicolasVitorP"
                            target="_blank"
                            className="flex items-center gap-4 p-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all text-lg font-medium mt-4 border-t border-white/5 pt-8"
                        >
                            <GithubOutlined className="text-xl" />
                            GitHub Profile
                        </a>
                    </div>
                </Drawer>
            </motion.nav>
        </div>
    );
};

export default Navbar;
