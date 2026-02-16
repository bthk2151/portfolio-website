import imgSeb from '@/assets/companies/seb.png';
import imgFusionex from '@/assets/companies/fusionex.png';
import imgCorematter from '@/assets/companies/corematter.png';
import imgTradingBot from '@/assets/projects/trading-bot.png';
import imgPortfolioWebsite from '@/assets/projects/portfolio-website.png';
import imgPfp from '@/assets/projects/pfp.png';
import imgC19Memorial from '@/assets/projects/c19memorial.png';

import Divider from '@/components/Divider';
import Timeline from '@/components/Timeline';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';


const careerTimelineData = [
    {
        title: "Software Developer at SEB",
        date: "2025+",
        description:
            "Currently at Skandinaviska Enskilda Banken, driving the modernization of life and pension processes for advisors and brokers, with a focus on efficiency and innovation.",
        imgSrc: imgSeb
    },
    {
        title: "Technical Consultant at Fusionex / FXI Solutions",
        date: "2023 - 2025",
        description:
            "Engineered scalable platforms and developed secure, high-performance online payment solutions for both enterprise and consumer markets.",
        imgSrc: imgFusionex
    },
    {
        title: "Software Engineer at CoreMatter",
        date: "2020 - 2023",
        description:
            "Built advanced legal and accounting technology solutions, streamlining backend processes and enhancing SaaS product performance.",
        imgSrc: imgCorematter
    }
];

const projectsData = [
    {
        title: "Sentiment Trading Bot",
        description: "Alongside a partner, we built a sentiment-driven trading bot using the Alpaca Broker Trading API for live execution and the Lumibot library to design and backtest our strategy.",
        imgSrc: imgTradingBot,
        skills: [
            { text: "Python", iconClass: "devicon-python-plain" },
            { text: "Jupyter Notebook", iconClass: "devicon-jupyter-plain" }
        ],
        projectUrl: "https://bthk2151.dev/sentiment-trading-bot.html",
        githubUrl: "https://github.com/bthk2151/SentimentTradingBot"
    },
    {
        title: "Portfolio Website",
        description: "I challenged myself to design and build this pure frontend portfolio website in under a week — and I am pleased with the outcome. In 2026, it was rewritten using Next.js!",
        imgSrc: imgPortfolioWebsite,
        skills: [
            { text: "React.js", iconClass: "devicon-react-plain" },
            { text: "Next.js", iconClass: "devicon-nextjs-plain" },
            { text: "Bootstrap", iconClass: "devicon-bootstrap-plain" },
            { text: "Vercel", iconClass: "devicon-vercel-plain" }
        ],
        projectUrl: "https://bthk2151.dev",
        githubUrl: "https://github.com/bthk2151/portfolio-website"
    },
    {
        title: "c19memorialmy",
        description: "The Covid-19 Memorial Malaysia website is a not-for-profit volunteer-run online memorial, for the sole purpose of remembering those who have lost their battles to Covid-19 in the country. <a href='https://codeblue.galencentre.org/2021/09/online-memorial-remembers-malaysians-killed-by-covid-19/' target='_blank'>Here</a> is one of the public mentions.",
        imgSrc: imgC19Memorial,
        skills: [
            { text: "React.js", iconClass: "devicon-react-plain" },
            { text: "Tailwind CSS", iconClass: "devicon-tailwindcss-plain" }
        ],
        projectUrl: "https://c19memorial.my/",
        githubUrl: "https://github.com/c19memorialmy/frontend"
    },
    {
        title: "Personal Finance Project (PFP)",
        description: "A web application serving as a personal finance tracking solution for >1 user. A little experiment to explore beyond my familiar .NET development stack. ",
        imgSrc: imgPfp,
        skills: [
            { text: "React.js", iconClass: "devicon-react-plain" },
            { text: "Material UI", iconClass: "devicon-materialui-plain" },
            { text: "Django", iconClass: "devicon-django-plain" },
            { text: "MySQL", iconClass: "devicon-mysql-plain" }
        ],
        githubUrl: "https://github.com/bthk2151/PersonalFinanceProject"
    }
];

export default function Experience() {
    return (
        <div className="container page-content">
            {/* Career */}
            <div className="row align-items-center mb-4">
                <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0 text-center text-md-start">
                    <h1 className="display-6">Career</h1>
                    <p className="lead mb-2">
                        Over the years, I have worked across multiple domains within the fintech sector, leveraging the <SkillBadge text="C#" iconClass="devicon-csharp-plain" includeMargin={0} /> <SkillBadge text=".NET" iconClass="devicon-dotnetcore-plain" includeMargin={0} /> stack extensively to deliver robust, high-performance solutions.
                    </p>
                    <p className="lead mb-4 mb-md-0">
                        Explore my full resume <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.
                    </p>
                </div>
                <div className="col-12 col-md-8 px-2 text-start">
                    <Timeline items={careerTimelineData} />
                </div>
            </div>

            <Divider />

            {/* Projects */}
            <div className="row align-items-center">
                <div className="col-12 px-2 text-center">
                    <h1 className="display-6 mb-3">Project Portfolio</h1>
                    <p className="lead mb-4">Welcome to my portfolio — a curated showcase of private and public projects I have worked on over the years, with more to come.</p>
                    <div className="row">
                        {projectsData.map((project, index) => (
                            <div className="col-md-4 mb-4" key={index}>
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    imgSrc={project.imgSrc}
                                    skills={project.skills}
                                    projectUrl={project.projectUrl}
                                    githubUrl={project.githubUrl}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}