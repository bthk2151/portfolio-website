import Divider from "../components/Divider";
import SkillBadge from "../components/SkillBadge";
import Timeline from "../components/Timeline";
import ProjectCard from "../components/ProjectCard";

import imgSeb from '../assets/companies/seb.png';
import imgFusionex from '../assets/companies/fusionex.png';
import imgCorematter from '../assets/companies/corematter.png';
import imgCoding from '../assets/coding.jpeg';
import imgPortfolioWebsite from '../assets/projects/portfolio-website.png';
import imgPfp from '../assets/projects/pfp.png';
import imgC19Memorial from '../assets/projects/c19memorial.png';

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

export default function Experience() {
  return (
    <div className="container">
      {/* Career */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0 text-center text-md-start">
          <h1 className="display-6">Career</h1>
          <p className="lead mb-4 mb-md-0">
            Over the years, I have worked across multiple domains within the fintech sector, leveraging the <SkillBadge text="C#" iconClass="devicon-csharp-plain" includeMargin="0" /> <SkillBadge text=".NET" iconClass="devicon-dotnetcore-plain" includeMargin="0" /> stack extensively to deliver robust, high-performance solutions.</p>
        </div>
        <div className="col-12 col-md-8 px-2 text-start">
          <Timeline items={careerTimelineData} />
        </div>
      </div>

      <Divider />

      {/* Projects */}
      <div className="row align-items-center">
        <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0">
          <img src={imgCoding} alt="A picture of a me coding at a Starbucks" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-8 px-3 text-center text-md-start">
          <h1 className="display-6 mb-3">Project Portfolio</h1>
          <p className="lead mb-2">Welcome to my portfolio — a curated showcase of private and public projects I have worked on over the years, with more to come.</p>
          <div className="d-flex flex-wrap justify-content-between">
            {/* <ProjectCard title="Test" description="Lorem ipsum bla bla bla" imgSrc={imgC19Memorial} /> */}
          </div>
        </div>
      </div>

    </div>
  );
}