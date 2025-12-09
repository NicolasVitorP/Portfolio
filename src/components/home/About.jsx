
import React from 'react';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import profileImg from '../../assets/profile.png';

const About = () => {
    return (
        <Section id="about" title="Sobre Mim" subtitle="Minha jornada no desenvolvimento web">
            <div className="flex flex-col md:flex-row items-center gap-12 mt-8">
                {/* Image Placeholder */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-500 rounded-2xl rotate-6 opacity-20 blur-md"></div>
                        <div className="absolute inset-0 border-2 border-white/10 rounded-2xl rotate-3"></div>
                        <div className="relative w-full h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/5">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-2/3">
                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        {portfolioData.personalInfo.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="opacity-90">{paragraph.trim()}</p>
                        ))}
                    </div>

                    <div className="mt-8 flex gap-4">
                        <Button icon={<DownloadOutlined />} size="large" className="bg-transparent border-primary text-primary hover:text-white hover:bg-primary-hover hover:border-primary-hover rounded">
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
