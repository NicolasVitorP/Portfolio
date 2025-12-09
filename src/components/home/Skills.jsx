import React from 'react';
import Section from '../common/Section';
import { portfolioDAO } from '../../daos/PortfolioDAO';
import { Card } from 'antd';

const SkillCard = ({ skill }) => (
    <div
        className="group relative bg-[#121212] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(25,118,210,0.15)]"
    >
        <div className="text-4xl transition-transform group-hover:scale-110">
            <img
                src={`https://skillicons.dev/icons?i=${skill.iconId}&theme=dark`}
                alt={skill.name}
                className="w-12 h-12"
            />
        </div>
        <h3 className="text-gray-300 font-medium group-hover:text-white text-center text-sm">{skill.name}</h3>
    </div>
);

const Skills = () => {
    const skills = portfolioDAO.getSkills();

    return (
        <Section id="skills" title="Habilidades" subtitle="Tecnologias e Competências">
            <div className="space-y-16 mt-12 mb-12">
                {/* Domínio Sólido */}
                <div>
                    <div className="flex items-end gap-3 mb-8">
                        <h3 className="text-2xl font-bold text-white border-l-4 border-primary pl-4 leading-none">
                            Domínio Sólido
                        </h3>
                        <span className="text-sm text-gray-400 pb-1 hidden sm:inline-block">
                            (Pronto para Produção)
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.solid.map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Em Aprendizado */}
                <div>
                    <div className="flex items-end gap-3 mb-8">
                        <h3 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4 leading-none">
                            Em Aprendizado Avançado
                        </h3>
                        <span className="text-sm text-gray-400 pb-1 hidden sm:inline-block">
                            (Aplicando em Projetos)
                        </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {skills.learning.map((skill, index) => (
                            <SkillCard key={index} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Habilidades Comportamentais */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 leading-none">
                        Habilidades Comportamentais
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {skills.soft.map((skill, index) => (
                            <div key={index} className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white hover:border-green-500/50 hover:bg-green-500/10 transition-all cursor-default text-sm md:text-base">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Skills;
