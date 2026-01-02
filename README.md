#   Portfólio Profissional - Nicolas Vitor

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant_Design-5.12.0-0170FE?style=for-the-badge&logo=antdesign&logoColor=white)
![AI-Powered](https://img.shields.io/badge/AI--Powered-Antigravity-FF6B6B?style=for-the-badge&logo=google&logoColor=white)

**Portfólio de alta performance focado em UX/UI, acessibilidade e código limpo**

[📱 Ver Demo](https://portfolio-ten-xi-lguafn88c4.vercel.app/) • [📧 Contato](mailto:nicolas.vitor@outlook.com) • [💼 LinkedIn](https://www.linkedin.com/in/nicolasvitorfrontend)

</div>

---

## 📋 Sobre o Projeto

Portfólio profissional desenvolvido com as melhores práticas de desenvolvimento front-end moderno. Aplicação otimizada para performance, SEO e acessibilidade, demonstrando domínio técnico em React e design de interfaces premium.

### ✨ Destaques

- 🎨 **Design Premium**: Interface moderna com glassmorphism, gradientes e micro-animações
- ⚡ **Alta Performance**: Lazy loading, code splitting e otimização de Core Web Vitals
- ♿ **Acessibilidade**: Conformidade WCAG AA, navegação por teclado e ARIA labels
- 📱 **Responsivo**: Mobile-first design com breakpoints otimizados
- 🌙 **Dark Mode**: Tema escuro profissional com paleta de cores semântica
- 🔍 **SEO Otimizado**: Meta tags, estrutura semântica e performance otimizada

---

## 🛠️ Stack Tecnológica

### Core
- **React 18.2** - Biblioteca UI com Hooks e componentização modular
- **Vite 5.0** - Build tool ultrarrápido com HMR
- **JavaScript ES6+** - Sintaxe moderna e clean code

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Ant Design 5.12** - Biblioteca de componentes enterprise
- **Framer Motion 10.16** - Animações fluidas e performáticas
- **React Icons 4.12** - Biblioteca de ícones otimizada

### Ferramentas & Otimização
- **React Router DOM 6.20** - Roteamento SPA
- **ESLint** - Linting e qualidade de código
- **PostCSS & Autoprefixer** - Compatibilidade cross-browser

---

## 📁 Estrutura do Projeto

```
Portfolio-main/
├── public/                    # Arquivos estáticos
├── src/
│   ├── assets/               # Imagens e recursos
│   ├── components/           # Componentes React
│   │   ├── common/          # Componentes reutilizáveis
│   │   │   ├── Section.jsx
│   │   │   └── SkeletonLoading.jsx
│   │   ├── home/            # Seções da página inicial
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   └── Contact.jsx
│   │   └── layout/          # Layout components
│   │       ├── Navbar.jsx
│   │       └── Footer.jsx
│   ├── data/                # Dados centralizados
│   │   └── portfolioData.js
│   ├── daos/                # Data Access Objects
│   ├── models/              # Modelos de dados
│   ├── pages/               # Páginas da aplicação
│   │   └── Home.jsx
│   ├── App.jsx              # Componente raiz
│   ├── App.css              # Estilos globais
│   ├── index.css            # Estilos base e Tailwind
│   └── main.jsx             # Entry point
├── .gitignore
├── eslint.config.js         # Configuração ESLint
├── index.html               # HTML template
├── package.json             # Dependências
├── postcss.config.js        # PostCSS config
├── tailwind.config.js       # Tailwind config
├── vite.config.js           # Vite config
└── README.md
```

---

## 🚀 Começando

### Pré-requisitos

- **Node.js** 16.x ou superior
- **npm** ou **yarn**

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/NicolasVitorP/Portfolio.git
cd Portfolio-main
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção otimizado |
| `npm run preview` | Preview do build de produção |
| `npm run lint` | Executa linting do código |

---

## 🎨 Características Técnicas

### Performance

- ⚡ **Lazy Loading**: Componentes carregados sob demanda com React.lazy()
- 🔄 **Code Splitting**: Divisão automática de código pelo Vite
- 🖼️ **Skeleton Loading**: Estados de carregamento para melhor UX
- 📦 **Bundle Otimizado**: Build minificado e tree-shaking

### Acessibilidade (a11y)

- ♿ **WCAG AA**: Conformidade com diretrizes de acessibilidade
- ⌨️ **Navegação por Teclado**: Suporte completo para navegação
- 🏷️ **ARIA Labels**: Atributos semânticos para leitores de tela
- 🎨 **Contraste**: Paleta de cores com contraste adequado

### SEO

- 📝 **Meta Tags**: Descrições e títulos otimizados
- 🏗️ **HTML Semântico**: Estrutura semântica adequada
- 🔍 **Heading Hierarchy**: Hierarquia de títulos correta
- ⚡ **Core Web Vitals**: Otimização para métricas do Google

### Design System

```javascript
// Paleta de Cores Semântica
{
  primary: '#1976D2',      // Ações principais
  success: '#388E3C',      // Feedback positivo
  warning: '#F57C00',      // Alertas
  error: '#D32F2F',        // Erros
  background: '#121212',   // Fundo dark mode
}
```

---

## 📦 Componentes Principais

### Hero Section
Seção de apresentação com animações e gradientes dinâmicos.

### About Section
Biografia profissional com foco em habilidades e diferenciais.

### Skills Section
Exibição de habilidades técnicas com ícones 

### Projects Section
Showcase de projetos com cards interativos e links para repositórios.

### Experience Section
Timeline de formação acadêmica e cursos.

### Contact Section
Formulário de contato com validação e feedback visual.

---

## 🎯 Boas Práticas Implementadas

### Código Limpo
- ✅ Componentização modular e reutilizável
- ✅ Separação de responsabilidades (SoC)
- ✅ DRY (Don't Repeat Yourself)
- ✅ Nomenclatura semântica e consistente

### Performance
- ✅ Lazy loading de componentes
- ✅ Otimização de imagens
- ✅ Minimização de re-renders
- ✅ Code splitting automático

### Manutenibilidade
- ✅ Dados centralizados em `portfolioData.js`
- ✅ Configurações externalizadas
- ✅ Estrutura de pastas organizada
- ✅ Comentários e documentação

---

## 🌐 Deploy

### Build de Produção

```bash
npm run build
```

O build otimizado será gerado na pasta `dist/`.

### Plataformas Recomendadas

- **Vercel** - Deploy automático com GitHub
- **Netlify** - CI/CD integrado
- **GitHub Pages** - Hospedagem gratuita
- **Cloudflare Pages** - Performance global

### Exemplo de Deploy (Vercel)

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Deploy
vercel
```

---

## 📊 Métricas de Performance

| Métrica | Score |
|---------|-------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

*Medido com Lighthouse no modo produção*

---

## 🔧 Configuração Personalizada

### Tailwind CSS

Personalize cores, fontes e animações em [`tailwind.config.js`](./tailwind.config.js):

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#1976D2',
        hover: '#1565C0',
        light: '#42A5F5',
      },
    },
  },
}
```

### Ant Design

Tema configurado em [`App.jsx`](./src/App.jsx):

```javascript
<ConfigProvider
  theme={{
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#1976D2',
      fontFamily: "'Inter', sans-serif",
    },
  }}
>
```

---

## 📝 Dados do Portfólio

Todos os dados são centralizados em [`portfolioData.js`](./src/data/portfolioData.js):

- ✏️ Informações pessoais
- 🛠️ Habilidades técnicas
- 💼 Experiência profissional
- 🚀 Projetos
- 🌍 Idiomas

Para atualizar o conteúdo, edite este arquivo.

---

## 👤 Autor

**Nicolas Vitor**

- 💼 LinkedIn: [@nicolasvitorfrontend](https://www.linkedin.com/in/nicolasvitorfrontend)
- 🐙 GitHub: [@NicolasVitorP](https://github.com/NicolasVitorP)
- 📧 Email: nicolas.vitor@outlook.com
- 📍 Localização: Brasília, DF - Brasil

---

## 🤖 Desenvolvimento Moderno com IA

Este projeto foi desenvolvido utilizando **Antigravity by Google DeepMind**, demonstrando proficiência no uso de ferramentas de IA modernas para desenvolvimento front-end de alta qualidade.

### Por que isso é um diferencial?

- 🚀 **Produtividade Acelerada**: Desenvolvimento ágil sem comprometer qualidade
- 🎯 **Melhores Práticas**: Código seguindo padrões da indústria desde o início
- 🔄 **Aprendizado Contínuo**: Estudo e compreensão profunda de cada implementação
- 🧑‍💻 **Futuro da Engenharia**: Alinhamento com as práticas modernas de desenvolvimento

> 💼 **Nota Profissional**: O uso de ferramentas de IA para desenvolvimento é uma habilidade valorizada na indústria tech moderna. Grandes empresas como Google, Microsoft e Meta incentivam seus engenheiros a utilizarem assistentes de IA para aumentar produtividade e qualidade de código.

---

## 🙏 Agradecimentos

- [React](https://react.dev/) - Biblioteca UI
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Ant Design](https://ant.design/) - Componentes UI
- [Framer Motion](https://www.framer.com/motion/) - Animações
- [Antigravity](https://deepmind.google/technologies/gemini/) - AI-Powered Development

---

<div align="center">

**Desenvolvido com ❤️ e ☕ por Nicolas Vitor**

⭐ Se este projeto foi útil, considere dar uma estrela!

</div>
