
import React from 'react';
import Section from '../common/Section';
import { portfolioDAO } from '../../daos/PortfolioDAO';
import { Button, Tag } from 'antd';
import { GithubOutlined, StarOutlined } from '@ant-design/icons';

const Projects = () => {
    const projects = portfolioDAO.getProjects();

    return (
        <Section id="projects" title="Projetos" subtitle="Uma seleção dos meus melhores trabalhos">
            <div className="flex flex-wrap justify-center gap-8 mt-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative w-full md:w-[45%] max-w-xl bg-[#0a0a0a] rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(97,218,251,0.15)] hover:-translate-y-2 flex flex-col"
                    >
                        {/* Decorative Background Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Visual Header / Banner */}
                        <div className="h-48 w-full relative p-8 flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-b border-white/5">
                            {/* Abstract Shapes */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-20 -mt-20 group-hover:bg-primary/20 transition-colors duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] -ml-16 -mb-16 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                            
                            {/* Grid Pattern Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                            <div className="relative z-10 flex justify-between items-start">
                                {project.featured && (
                                    <Tag color="cyan" className="border-none px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-lg bg-primary/20 text-primary-light">
                                        Destaque
                                    </Tag>
                                )}
                            </div>
                            <div className="relative z-10 mt-auto">
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <div className="h-1 w-12 bg-primary/50 rounded-full group-hover:w-full transition-all duration-500 ease-out"></div>
                            </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow relative z-10">
                            <p className="text-gray-400 mb-8 flex-grow leading-relaxed text-base line-clamp-4 group-hover:text-gray-300 transition-colors">
                                {project.description}
                            </p>

                            <div className="space-y-6 mt-auto">
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <Tag key={i} className="px-3 py-1 bg-white/5 border-white/10 text-gray-300 mr-0 text-sm hover:bg-white/10 hover:text-white transition-colors">
                                            {tech}
                                        </Tag>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                                    <Button
                                        type="primary"
                                        ghost
                                        icon={<GithubOutlined />}
                                        href={project.repoLink}
                                        target="_blank"
                                        className="border-white/20 text-white hover:text-primary hover:border-primary px-6 h-10 rounded-full flex items-center gap-2 group-hover:bg-primary/10"
                                    >
                                        Ver Código
                                    </Button>
                                    {index === 0 && (
                                        <span className="text-yellow-500 flex items-center gap-2 text-sm font-medium bg-yellow-500/10 px-3 py-1.5 rounded-full">
                                            <StarOutlined /> Principal
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
