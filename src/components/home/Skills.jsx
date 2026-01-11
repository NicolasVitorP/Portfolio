import React from 'react';
import Section from '../common/Section';
import { portfolioDAO } from '../../daos/PortfolioDAO';
import {
    SiReact, SiJavascript, SiHtml5, SiCss3, SiSass, SiTailwindcss,
    SiGit, SiGithub, SiRedux, SiNextdotjs, SiTypescript, SiVite,
    SiGraphql, SiGoogle, SiAntdesign, SiLeaflet
} from 'react-icons/si';

import githubWhite from '../../assets/github_white.png';
import antigravityIcon from '../../assets/antigravity.png';
import vercelIcon from '../../assets/vercel.png';
import viteIcon from '../../assets/vite.png';


// Mapeamento de iconId para componentes React Icons ou imagens locais
const iconMap = {
    react: SiReact,
    js: SiJavascript,
    html: SiHtml5,
    css: SiCss3,
    sass: SiSass,
    tailwind: SiTailwindcss,
    git: SiGit,
    github: githubWhite, // Using local image
    redux: SiRedux,
    nextjs: SiNextdotjs,
    ts: SiTypescript,
    vite: viteIcon, // Using local image
    vercel: antigravityIcon, // Using local image (file contains vercel logo)
    google: SiGoogle,
    antd: SiAntdesign,
    leaflet: SiLeaflet,
    antigravity: vercelIcon, // Using local image (file contains antigravity logo)
};

const SkillCard = ({ skill }) => {
    const IconContent = iconMap[skill.iconId] || SiReact;
    const isImage = typeof IconContent === 'string';

    const CardContent = (
        <>
            <div className="text-4xl transition-transform group-hover:scale-110 flex items-center justify-center w-12 h-12">
                {isImage ? (
                    <img 
                        src={IconContent} 
                        alt={skill.name} 
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <IconContent
                        className="w-full h-full"
                        style={{ color: skill.color }}
                    />
                )}
            </div>
            <h3 className="text-gray-300 font-medium group-hover:text-white text-center text-sm">{skill.name}</h3>
        </>
    );

    if (skill.url) {
        return (
            <a
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#121212] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(25,118,210,0.15)] cursor-pointer"
            >
                {CardContent}
            </a>
        );
    }

    return (
        <div
            className="group relative bg-[#121212] border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center gap-4 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(25,118,210,0.15)]"
        >
            {CardContent}
        </div>
    );
};

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

                {/* Habilidades Comportamentais / Conceitos */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-green-500 pl-4 leading-none">
                        {skills.concepts ? "Conceitos e Competências" : "Habilidades Comportamentais"}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {(skills.concepts || skills.soft || []).map((skill, index) => (
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
