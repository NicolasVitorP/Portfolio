// Icons are now loaded from skillicons.dev

export const portfolioData = {
  personalInfo: {
    name: "Nicolas Vitor",
    role: "Desenvolvedor Front-End React",
    tagline: "Transformo desafios complexos em interfaces intuitivas que unem performance, código limpo e acessibilidade.",
    bio: `Desenvolvedor Front-End com formação técnica especializada e mentalidade de produto. Transformo desafios complexos em interfaces intuitivas que unem performance, código limpo e acessibilidade. Possuo domínio sólido em HTML5, CSS3, SASS, Tailwind CSS e JavaScript moderno (ES6+ e POO), com foco aplicado no ecossistema React (Hooks, Componentização, React Router). Sou movido por aprendizado contínuo acelerado, colaboração eficaz e uma mentalidade de dono, buscando minha primeira oportunidade para entregar valor tangível, evoluir com a equipe e contribuir para soluções reais em um ambiente que priorize qualidade e inovação.`,
    email: "nicolas.vitor@outlook.com",
    location: "Brasília - Disponibilidade Imediata (Remoto/Híbrido)",
    github: "https://github.com/NicolasVitorP",
    linkedin: "https://www.linkedin.com/in/nicolasvitorfrontend",
  },
  skills: {
    solid: [
      { name: "React", iconId: "react", color: "#61DAFB" },
      { name: "JavaScript (ES6+)", iconId: "js", color: "#F7DF1E" },
      { name: "HTML5", iconId: "html", color: "#E34F26" },
      { name: "CSS3", iconId: "css", color: "#1572B6" },
      { name: "SASS", iconId: "sass", color: "#CC6699" },
      { name: "Tailwind CSS", iconId: "tailwind", color: "#06B6D4" },
      { name: "Git", iconId: "git", color: "#F05032" },
      { name: "GitHub", iconId: "github", color: "#181717" },
    ],
    learning: [
      { name: "Redux Toolkit", iconId: "redux", color: "#764ABC" },
      { name: "Context API", iconId: "react", color: "#61DAFB" },
      { name: "Next.js", iconId: "nextjs", color: "#000000" },
      { name: "TypeScript", iconId: "ts", color: "#3178C6" },
      { name: "Vite", iconId: "vite", color: "#646CFF" },
      { name: "GraphQL", iconId: "graphql", color: "#E10098" },
      { name: "Core Web Vitals", iconId: "google", color: "#4285F4" }, // Using google or generic for metrics
    ],
    soft: [
      "Proatividade Estratégica",
      "Colaboração e Comunicação Clara",
      "Aprendizado Contínuo",
      "Mentalidade de Dono",
      "Atenção a Detalhes Críticos"
    ]
  },
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
      description: "Base sólida em algoritmos e pensamento computacional.",
      type: "course"
    },
    {
      company: "Outros",
      role: "Certificação Learn to Program",
      period: "Concluído",
      description: "Fundamentos de programação.",
      type: "course"
    }
  ],
  projects: [
    {
      title: "Sistema de Monitoramento Climático (ClimaMaster)",
      description: "Sistema modular completo com 3 CRUDs interconectados, relacionamentos complexos e geração de relatórios. Arquitetura em camadas com React e Ant Design, utilizando padrão DAO para persistência (LocalStorage/MongoDB).",
      technologies: ["React", "Ant Design", "JavaScript", "DAO", "MongoDB"],
      repoLink: "https://github.com/NicolasVitorP/Sistema-De-Monitoramento-Climatico-ClimaMaster-",
      featured: true
    },
    {
      title: "Arquitetura Avançada de POO com JS Vanilla",
      description: "Aplicação focada em princípios avançados de POO sem frameworks. Arquitetura totalmente desacoplada, aplicando SOLID e padrões como Module e Factory.",
      technologies: ["JavaScript Vanilla", "POO", "Clean Code", "SOLID"],
      repoLink: "https://github.com/NicolasVitorP/BFD_JS_OO",
      featured: false
    },
    {
      title: "Portfólio de Alta Performance",
      description: "Aplicação React otimizada para performance e SEO. Utiliza Vite para build otimizado, lazy loading e foco rigoroso nas métricas de Core Web Vitals.",
      technologies: ["React", "Vite", "CSS3", "Performance", "SEO"],
      repoLink: "https://github.com/NicolasVitorP/vitejs-vite-ejwaxlas",
      featured: false
    }
  ],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Nível Profissional" },
    { language: "Espanhol", level: "Básico" },
    { language: "Alemão", level: "Inicial" },
  ]
};
