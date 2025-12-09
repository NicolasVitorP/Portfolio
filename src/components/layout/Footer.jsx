
import React from 'react';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { portfolioDAO } from '../../daos/PortfolioDAO';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const personalInfo = portfolioDAO.getProfile();

    return (
        <footer className="bg-[#050505] border-t border-white/10 py-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Nicolas Vitor</h2>
                <p className="text-gray-400 mb-8">{personalInfo.role}</p>

                <div className="flex justify-center gap-6 mb-8">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="Visitar GitHub">
                        <Button shape="circle" icon={<GithubOutlined />} size="large" className="bg-white/5 border-white/10 text-white hover:text-primary-light hover:border-primary-light" />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} aria-label="Enviar Email">
                        <Button shape="circle" icon={<MailOutlined />} size="large" className="bg-white/5 border-white/10 text-white hover:text-primary-light hover:border-primary-light" />
                    </a>
                </div>

                <p className="text-gray-600 text-sm">
                    © {currentYear} Nicolas Vitor Pereira Da Paz. Todos os direitos reservados.
                </p>
                <p className="text-gray-700 text-xs mt-2">
                    Feito com React, Ant Design e muito ☕
                </p>
            </div>
        </footer>
    );
};

export default Footer;
