
import React from 'react';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Timeline, ConfigProvider } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const Experience = () => {
    return (
        <Section id="experience" title="Experiência" subtitle="Minha trajetória acadêmica e profissional">
            <div className="max-w-4xl mx-auto mt-12 bg-[#121212] p-8 rounded-2xl border border-white/5">
                <ConfigProvider
                    theme={{
                        components: {
                            Timeline: {
                                tailColor: 'rgba(255, 255, 255, 0.1)',
                                dotBorderWidth: 2,
                            }
                        }
                    }}
                >
                    <Timeline
                        mode="left"
                        items={portfolioData.experience.map((item, index) => ({
                            label: <span className="text-gray-400 text-sm">{item.period}</span>,
                            dot: <ClockCircleOutlined style={{ fontSize: '16px', color: '#1976D2' }} />,
                            children: (
                                <div className="mb-8 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                                    <h3 className="text-xl font-bold text-white mb-1">{item.company}</h3>
                                    <p className="text-primary-light font-medium mb-2">{item.role}</p>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            ),
                        }))}
                    />
                </ConfigProvider>
            </div>
        </Section>
    );
};

export default Experience;
