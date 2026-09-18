import imgSeb from "@/assets/companies/seb.png";
import imgFusionex from "@/assets/companies/fusionex.png";
import imgCorematter from "@/assets/companies/corematter.png";
import imgRagBot from "@/assets/projects/rag-bot.png";
import imgTradingBot from "@/assets/projects/trading-bot.png";
import imgPortfolio from "@/assets/projects/portfolio-website.png";
import imgMemorial from "@/assets/projects/c19memorial.png";
import imgPfp from "@/assets/projects/pfp.png";

export const career = [
  {
    company: "SEB",
    title: "Software Developer",
    date: "2025 — Present",
    domain: "Life & pension",
    description:
      "Currently at Skandinaviska Enskilda Banken, driving the modernization of life and pension processes for advisors and brokers, with a focus on efficiency and innovation.",
    image: imgSeb,
  },
  {
    company: "Fusionex / FXI Solutions",
    title: "Technical Consultant",
    date: "2023 — 2025",
    domain: "Payments & platforms",
    description:
      "Engineered scalable platforms and developed secure, high-performance online payment solutions for both enterprise and consumer markets.",
    image: imgFusionex,
  },
  {
    company: "CoreMatter",
    title: "Software Engineer",
    date: "2020 — 2023",
    domain: "Legal & accounting",
    description:
      "Built advanced legal and accounting technology solutions, streamlining backend processes and enhancing SaaS product performance.",
    image: imgCorematter,
  },
];

export const projects = [
  {
    title: "RAG Bot",
    category: "AI & knowledge retrieval",
    description:
      "Built with a partner, RAG Bot turns uploaded files into searchable vector embeddings, retrieves relevant context for Gemini-powered answers, and secures backend requests with short-lived JWTs.",
    image: imgRagBot,
    imageAlt:
      "RAG Bot interface showing uploaded documents and a contextual conversation",
    stack: ["React.js", "Next.js", "Tailwind CSS", "FastAPI", "Gemini"],
    projectUrl: "https://chatbot-ui-zeta-eight-78.vercel.app/",
    githubUrl: "https://github.com/bthk2151/chatbot-ui",
    theme: "sage",
  },
  {
    title: "Personal Finance Project",
    category: "Finance & everyday tools",
    description:
      "A personal finance tracking application for multiple users. An experiment in building beyond my familiar .NET stack with React, Django, and MySQL.",
    image: imgPfp,
    imageAlt:
      "Personal Finance Project dashboard with income and expense analytics",
    stack: ["React.js", "Material UI", "Django", "MySQL"],
    githubUrl: "https://github.com/bthk2151/PersonalFinanceProject",
    theme: "sand",
  },
  {
    title: "c19memorialmy",
    category: "Technology for community",
    description:
      "A not-for-profit, volunteer-run online memorial remembering those who lost their lives to Covid-19 in Malaysia.",
    image: imgMemorial,
    imageAlt: "The Covid-19 Memorial Malaysia website",
    stack: ["React.js", "Tailwind CSS"],
    projectUrl: "https://c19memorial.my/",
    githubUrl: "https://github.com/c19memorialmy/frontend",
    pressUrl:
      "https://codeblue.galencentre.org/2021/09/online-memorial-remembers-malaysians-killed-by-covid-19/",
    theme: "lavender",
  },
  {
    title: "Sentiment Trading Bot",
    category: "Data & experimentation",
    description:
      "Built alongside a partner using Python, the Alpaca API, and Lumibot to explore sentiment-driven strategies and backtesting.",
    image: imgTradingBot,
    imageAlt: "Sentiment Trading Bot analysis and backtesting report",
    stack: ["Python", "Jupyter Notebook"],
    projectUrl: "/sentiment-trading-bot.html",
    githubUrl: "https://github.com/bthk2151/SentimentTradingBot",
    theme: "rose",
  },
  {
    title: "Portfolio Website",
    category: "Design & development",
    description:
      "Originally a challenge to design and build a frontend portfolio in under a week. Rewritten in Next.js in 2026 and now reimagined as one continuous experience.",
    image: imgPortfolio,
    imageAlt: "The original portfolio website before its single-page redesign",
    stack: ["React.js", "Next.js", "Vercel"],
    projectUrl: "https://bthk2151.dev",
    githubUrl: "https://github.com/bthk2151/portfolio-website",
    theme: "slate",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "jQuery",
      "React.js",
      "Next.js",
      "Bootstrap",
      "Material UI",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "C#",
      "ASP.NET",
      ".NET Core",
      "Entity Framework",
      "Node.js",
      "Django",
      "FastAPI",
    ],
  },
  {
    category: "Databases",
    items: ["Azure SQL Server", "MongoDB", "SQLite", "MySQL", "PostgreSQL"],
  },
  {
    category: "DevOps",
    items: ["Azure DevOps", "Git", "Docker", "OpenShift", "SonarQube"],
  },
  {
    category: "Cloud & hosting",
    items: ["Azure", "Vercel", "Google Cloud", "Nginx"],
  },
  {
    category: "Development tools",
    items: ["Postman", "Swagger", "Visual Studio", "VS Code"],
  },
];

export const services = [
  {
    title: "Product development & maintenance",
    description:
      "From concept to launch, I craft bespoke, 0-to-1 software solutions tailored to your vision, with ongoing support to keep them up to date.",
  },
  {
    title: "Collaborative development",
    description:
      "An extra set of hands for your project. I work closely with stakeholders, developers, and designers to deliver functional requirements and collaborate from start to finish.",
  },
  {
    title: "AI workflow automation",
    description:
      "Reduce repetitive work with AI agents and automated workflows. I connect your tools, APIs, and business systems through Model Context Protocol (MCP) integrations to help teams move from manual steps to reliable, connected processes.",
  },
  {
    title: "AI & data solutions",
    description:
      "Turn your data and documents into useful insights and answers. I build retrieval-augmented generation (RAG) solutions with vector search and contextual AI responses, collaborating with a data specialist on pipelines, data structuring, and machine learning where needed.",
  },
  {
    title: "Integrated solutions",
    description:
      "A tailored combination of services to fit your business, from a custom dashboard or backend system to a broader digital transformation.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    detail: "bthk2151@gmail.com",
    href: "mailto:bthk2151@gmail.com?subject=Solutions%20Development%20Inquiry&body=Hi%20Bryan%2C%20I%20am%20interested%20in%20your%20solutions%20development%20services.",
  },
  {
    label: "LinkedIn",
    detail: "Let’s connect",
    href: "https://www.linkedin.com/in/bthk2151/",
  },
  {
    label: "WhatsApp",
    detail: "Start a conversation",
    href: "https://wa.me/60173682770?text=Hi%20Bryan%2C%20I%20am%20interested%20in%20your%20solutions%20development%20services.",
  },
  {
    label: "Instagram",
    detail: "Beyond the code",
    href: "https://instagram.com/bthk2151",
  },
];
