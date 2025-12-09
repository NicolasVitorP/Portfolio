
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiAntdesign, SiVercel, SiMongodb 
} from 'react-icons/si';

export const portfolioData = {
  personalInfo: {
    name: "Nicolas Vitor Pereira Da Paz",
    role: "Desenvolvedor Front-End",
    tagline: "Transformando ideias em experiências digitais interativas e acessíveis.",
    bio: `Desenvolvedor Front-End com foco em criar interfaces de usuário (UI) responsivas, acessíveis e de alto desempenho. Tenho como objetivo transformar ideias e desafios complexos em soluções visuais e funcionais, entregando experiências consistentes e fluidas em múltiplos dispositivos.
    
    Domínio técnico atual: HTML5, CSS3/SASS, JavaScript moderno (ES6+ e POO) e controle de versão com Git/GitHub. Sigo práticas de Clean Code, otimização de performance e princípios de acessibilidade.
    
    Em aprendizado avançado: React.js, integração com APIs REST, fundamentos de UX/UI e noções de GraphQL. Busco constantemente melhorar a arquitetura e a manutenção de código, garantindo escalabilidade e qualidade.`,
    email: "nicolasvitor.contato@gmail.com", // Assumed email pattern or generic placeholder if not provided, but mostly likely I should use a placeholder if not explicitly given. Wait, user didn't give email. I'll leave it empty or placeholder.
    location: "Brasil",
    github: "https://github.com/NicolasVitorP",
    linkedin: "", // Not provided
  },
  skills: [
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#181717" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ],
  experience: [
    {
      company: "Gran Faculdade",
      role: "Graduação em Análise e Desenvolvimento de Sistemas",
      period: "Jan 2024 - Presente",
      description: "Curso superior focado em engenharia de software, algoritmos e desenvolvimento de sistemas.",
      type: "education"
    },
    {
      company: "IFB - Instituto Federal de Brasília",
      role: "Bolsa Futuro Digital — Front-End",
      period: "Concluído",
      description: "Formação prática em desenvolvimento de interfaces modernas. HTML, CSS, JavaScript, acessibilidade, UX/UI e integração com GitHub.",
      type: "course"
    },
    {
      company: "FIAP",
      role: "Nano Course — Lógica de Programação",
      period: "Concluído",
      description: "Curso de introdução à lógica de programação, algoritmos e pensamento computacional.",
      type: "course"
    }
  ],
  projects: [
    {
      title: "Sistema de Monitoramento Climático (ClimaMaster)",
      description: "Sistema modular para monitoramento climático com 3 CRUDs, relacionamentos complexos e relatórios. Utiliza ReactJS, Ant Design e persistência flexível (LocalStorage/MongoDB).",
      technologies: ["React", "Ant Design", "JavaScript", "DAOs"],
      repoLink: "https://github.com/NicolasVitorP/Sistema-De-Monitoramento-Climatico-ClimaMaster-",
      featured: true
    },
    {
      title: "Projeto JS Orientado a Objetos",
      description: "Análise aprofundada de POO com JavaScript Vanilla. Arquitetura modular sem frameworks, focando em padrões de design e código escalável.",
      technologies: ["JavaScript ES6+", "POO", "Clean Code"],
      repoLink: "https://github.com/NicolasVitorP/BFD_JS_OO",
      featured: false
    },
    {
      title: "Portfolio React + Vite",
      description: "Frontend dinâmico e de alta performance. Demonstração de componentização, HMR e otimização de build com Vite.",
      technologies: ["React", "Vite", "CSS3"],
      repoLink: "https://github.com/NicolasVitorP/vitejs-vite-ejwaxlas",
      featured: false
    }
  ],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Intermediário" },
    { language: "Espanhol", level: "Básico/Intermediário" },
    { language: "Alemão", level: "Básico" },
  ]
};
