
import React from 'react';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Card } from 'antd';

const Skills = () => {
    return (
        <Section id="skills" title="Habilidades" subtitle="Tecnologias e ferramentas que domino">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-8">
                {portfolioData.skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group relative bg-[#121212] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(25,118,210,0.15)]"
                    >
                        <div className="text-4xl transition-transform group-hover:scale-110">
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.iconId}&theme=dark`}
                                alt={skill.name}
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-gray-300 font-medium group-hover:text-white">{skill.name}</h3>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
