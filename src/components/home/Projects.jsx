
import React from 'react';
import Section from '../common/Section';
import { portfolioData } from '../../data/portfolioData';
import { Button, Tag } from 'antd';
import { GithubOutlined, StarOutlined } from '@ant-design/icons';

const Projects = () => {
    return (
        <Section id="projects" title="Projetos" subtitle="Uma seleção dos meus melhores trabalhos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {portfolioData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-[#121212] rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
                    >
                        {/* Visual Header / Banner - Generating a gradient pattern for now since no image provided */}
                        <div className={`h-40 w-full bg-gradient-to-br ${index === 0 ? 'from-primary to-purple-700' : index === 1 ? 'from-success to-teal-700' : 'from-warning to-red-600'} relative p-6 flex flex-col justify-between`}>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            <div className="relative z-10 flex justify-between items-start">
                                {project.featured && <Tag color="gold" className="border-none font-bold">Destaque</Tag>}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white drop-shadow-md">{project.title}</h3>
                            </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <p className="text-gray-400 mb-6 flex-grow leading-relaxed line-clamp-4">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, i) => (
                                    <Tag key={i} className="bg-white/5 border-white/10 text-gray-300 mr-0">
                                        {tech}
                                    </Tag>
                                ))}
                            </div>

                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                                <Button
                                    type="link"
                                    icon={<GithubOutlined />}
                                    href={project.repoLink}
                                    target="_blank"
                                    className="text-gray-400 hover:text-white px-0"
                                >
                                    Ver Código
                                </Button>
                                {index === 0 && <span className="text-yellow-500 flex items-center gap-1 text-sm"><StarOutlined /> Principal</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
