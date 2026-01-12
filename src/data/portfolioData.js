// Icons are now loaded from skillicons.dev

export const portfolioData = {
  personalInfo: {
    name: "Nicolas Vitor Pereira da Paz",
    role: "Programador Front-End Júnior",
    tagline:
      "Desenvolvedor Front-End especializado em React.js, focado em criar interfaces intuitivas, responsivas e acessíveis através de Clean Code.",
    bio: `Desenvolvedor Front-End com trajetória dedicada ao aprimoramento constante em HTML5, CSS3/SASS e JavaScript (ES6+), com foco em frameworks modernos como React.js. Especialista em criar interfaces intuitivas, responsivas e experiências de usuário envolventes, aplicando rigorosamente padrões de Clean Code e acessibilidade (WCAG). Possuo experiência prática no desenvolvimento de interfaces escaláveis, integração de APIs REST e otimização de fluxo de trabalho com suporte de ferramentas de IA (Antigravity). Comprometido com a entrega de soluções eficientes e o aprendizado contínuo para a evolução técnica constante.`,
    email: "nicolas.vitor@outlook.com",
    location: "Brasília, DF",
    github: "https://github.com/NicolasVitorP",
    linkedin: "https://www.linkedin.com/in/nicolasvitorfrontend",
  },
  skills: {
    solid: [
      {
        name: "React.js",
        iconId: "react",
        color: "#61DAFB",
        url: "https://react.dev/",
      },
      {
        name: "JavaScript (ES6+)",
        iconId: "js",
        color: "#F7DF1E",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "HTML5",
        iconId: "html",
        color: "#E34F26",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        name: "CSS3",
        iconId: "css",
        color: "#1572B6",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        name: "SASS",
        iconId: "sass",
        color: "#CC6699",
        url: "https://sass-lang.com/",
      },
      {
        name: "Ant Design",
        iconId: "antd",
        color: "#0170FE",
        url: "https://ant.design/",
      },
      {
        name: "Git",
        iconId: "git",
        color: "#F05032",
        url: "https://git-scm.com/",
      },
      {
        name: "GitHub",
        iconId: "github",
        color: "#FFFFFF",
        url: "https://github.com/",
      },
    ],
    learning: [
      {
        name: "Vite",
        iconId: "vite",
        color: "#FFFFFF",
        url: "https://vitejs.dev/",
      },
      {
        name: "Vercel",
        iconId: "vercel",
        color: "#FFFFFF",
        url: "https://vercel.com/",
      },
      {
        name: "Antigravity (IA)",
        iconId: "antigravity",
        color: "#FFFFFF",
        url: "https://antigravity.google/",
      },
      {
        name: "Leaflet",
        iconId: "leaflet",
        color: "#199900",
        url: "https://leafletjs.com/",
      },
    ],
    concepts: [
      {
        name: "Clean Code",
        url: "https://www.freecodecamp.org/news/clean-coding-for-beginners/",
      },
      {
        name: "APIs REST",
        url: "https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api",
      },
      {
        name: "Arquitetura DAO",
        url: "https://www.geeksforgeeks.org/data-access-object-pattern/",
      },
      {
        name: "UX/UI",
        url: "https://www.interaction-design.org/literature/topics/ux-design",
      },
      {
        name: "Acessibilidade (WCAG)",
        url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/",
      },
      {
        name: "SEO",
        url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
      {
        name: "Lógica de Programação",
        url: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
      },
      {
        name: "POO",
        url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming",
      },
    ],
  },
  experience: [
    {
      company: "Projetos de Desenvolvimento",
      role: "Desenvolvedor Front-End",
      period: "Jul 2025 – Nov 2025",
      description:
        "Desenvolvimento de interfaces modernas e escaláveis utilizando React e Vite. Implementação de design responsivo e acessibilidade (WCAG). Gestão de versionamento com Git/GitHub e consumo de APIs REST. Otimização com suporte de Antigravity IA.",
      type: "work",
    },
    {
      company: "Gran Faculdade",
      role: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      period: "Jan 2024 – Presente (Último Semestre)",
      description:
        "Formação focada em engenharia de software e desenvolvimento de sistemas.",
      type: "education",
    },
    {
      company: "IFB – Instituto Federal de Brasília",
      role: "Formação em Front-End",
      period: "Concluído",
      description:
        "Formação prática em tecnologias Front-End e interfaces modernas.",
      type: "education",
    },
    {
      company: "FIAP",
      role: "Certificação Learn to Program",
      period: "Concluído",
      description: "Fundamentos de lógica de programação.",
      type: "course",
    },
  ],
  projects: [
    {
      title: "ClimaMaster – Monitoramento Climático",
      description:
        "Aplicação para análise de dados meteorológicos em tempo real desenvolvida com ReactJS e Ant Design. Implementação de gerenciamento de estados, integração de mapas com Leaflet e utilização de arquitetura DAO para escalabilidade.",
      technologies: ["ReactJS", "Ant Design", "Leaflet", "DAO"],
      repoLink:
        "https://github.com/NicolasVitorP/Sistema-De-Monitoramento-Climatico-ClimaMaster-",
      featured: true,
    },
    {
      title: "Portfólio Profissional",
      description:
        "Projeto focado em performance e arquitetura estratégica utilizando React e Vite. Fluxo de trabalho otimizado via Antigravity (DeepMind) para aceleração de prototipagem e implementação de padrões modernos.",
      technologies: ["React", "Vite", "Antigravity", "Clean Code"],
      repoLink: "https://github.com/NicolasVitorP/Portfolio",
      featured: true,
    },
    {
      title: "Arquitetura Avançada de POO com JS Vanilla",
      description:
        "Aplicação focada em princípios avançados de POO sem frameworks. Arquitetura totalmente desacoplada, aplicando SOLID e padrões como Module e Factory.",
      technologies: ["JavaScript Vanilla", "POO", "Clean Code", "SOLID"],
      repoLink: "https://github.com/NicolasVitorP/BFD_JS_OO",
      featured: false,
    },
    {
      title: "Componentização com React",
      description:
        "Aplicação React otimizada para performance e SEO. Utiliza Vite para build otimizado, lazy loading e foco rigoroso nas métricas de Core Web Vitals.",
      technologies: ["React", "Vite", "SEO", "Performance"],
      repoLink: "https://github.com/NicolasVitorP/vitejs-vite-ejwaxlas",
      featured: false,
    },
  ],
  languages: [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Intermediário" },
    { language: "Espanhol", level: "Básico a Intermediário" },
    { language: "Alemão", level: "Básico" },
  ],
};
