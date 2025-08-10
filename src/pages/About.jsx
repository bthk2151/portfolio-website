import Divider from '../components/Divider';
import SkillBadge from '../components/SkillBadge';
import HobbyBadge from '../components/HobbyBadge';

import imgMe from '../assets/me.jpeg';
import imgMeWithBike from '../assets/me-with-bike.jpeg';
import imgMotorbike from '../assets/icons/motorbike.png';
import imgWeightlifting from '../assets/icons/weightlifting.png';
import imgInstrument from '../assets/icons/guitar.png';
import imgCoffee from '../assets/icons/coffee.png';

export default function About() {
  return (
    <div className="container">
      {/* Intro */}
      <div className="row align-items-center mb-4">
        <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0">
          <img src={imgMe} alt="A picture of a fine young lad" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-8 px-2 text-center text-md-start">
          <h1 className="display-5">Hi, I'm Bryan Tan Hoe Kin</h1>
          <p className="lead mb-0">Full-Stack C# .NET Developer | Software Engineer | Aspiring Solutions Architect</p>
          <small className="lead text-muted">Future Serial Techpreneur</small>
        </div>
      </div>

      <Divider />

      {/* Tech Stack */}
      <div className="row align-items-start">
        <div className="col-12 col-md-4 px-2 mb-3 mb-md-0 text-center text-md-start">
          <h1 className="display-6">Tech Stack</h1>
          <p className="lead mb-2 mb-md-0">
            <span className="badge bg-dark p-2">Darker</span> badges indicate strong proficiency
          </p>
        </div>
        <div className="col-12 col-md-8 px-3">
          <div className="row">
            <div className="col-12 col-sm-6">
              <p className="lead mb-2">Frontend</p>
              <SkillBadge text="HTML" iconClass="devicon-html5-plain" isMain="1" />
              <SkillBadge text="CSS" iconClass="devicon-css3-plain" isMain="1" />
              <SkillBadge text="SCSS" iconClass="devicon-sass-plain" isMain="1" />
              <SkillBadge text="JavaScript" iconClass="devicon-javascript-plain" isMain="1" />
              <SkillBadge text="jQuery" iconClass="devicon-jquery-plain" isMain="1" />
              <SkillBadge text="React.js" iconClass="devicon-react-plain" isMain="1" />
              <SkillBadge text="Bootstrap" iconClass="devicon-bootstrap-plain" isMain="1" />
              <SkillBadge text="Material UI" iconClass="devicon-materialui-plain" isMain="0" />
              <SkillBadge text="Tailwind CSS" iconClass="devicon-tailwindcss-plain" isMain="0" />
            </div>
            <div className="col-12 col-sm-6">
              <p className="lead mb-2">Backend</p>
              <SkillBadge text="ASP.NET" iconClass="devicon-dot-net-plain" isMain="1" />
              <SkillBadge text=".NET Core" iconClass="devicon-dotnetcore-plain" isMain="1" />
              <SkillBadge text="Entity Framework" iconClass="devicon-entityframeworkcore-plain" isMain="1" />
              <SkillBadge text="Node.js" iconClass="devicon-nodejs-plain" isMain="0" />
              <SkillBadge text="Django" iconClass="devicon-python-plain" isMain="0" />
            </div>
          </div>

          <Divider spacing={3} />

          <p className="lead mb-2">Database</p>
          <SkillBadge text="Azure SQL Server" iconClass="devicon-azuresqldatabase-plain" isMain="1" />
          <SkillBadge text="MongoDB" iconClass="devicon-mongodb-plain" isMain="1" />
          <SkillBadge text="SQLite" iconClass="devicon-sqlite-plain" isMain="1" />
          <SkillBadge text="MySQL" iconClass="devicon-mysql-plain" isMain="0" />
          <SkillBadge text="PostgreSQL" iconClass="devicon-postgresql-plain" isMain="0" />

          <Divider spacing={3} />

          <div className="row">
            <div className="col-12 col-sm-6">
              <p className="lead mb-2">DevOps</p>
              <SkillBadge text="Azure DevOps" iconClass="devicon-azuredevops-plain" isMain="1" />
              <SkillBadge text="Git" iconClass="devicon-git-plain" isMain="1" />
              <SkillBadge text="Docker" iconClass="devicon-docker-plain" isMain="0" />
              <SkillBadge text="OpenShift" iconClass="devicon-redhat-plain" isMain="0" />
              <SkillBadge text="SonarQube" iconClass="devicon-sonarqube-plain" isMain="0" />
            </div>
            <div className="col-12 col-sm-6">
              <p className="lead mb-2">Cloud</p>
              <SkillBadge text="Azure" iconClass="devicon-azure-plain" isMain="1" />
              <SkillBadge text="Vercel" iconClass="devicon-vercel-plain" isMain="0" />
              <SkillBadge text="Google Cloud" iconClass="devicon-googlecloud-plain" isMain="0" />
              <SkillBadge text="Nginx" iconClass="devicon-nginx-plain" isMain="0" />
            </div>
          </div>
          <Divider spacing={3} />

          <p className="lead mb-2">Development Tools</p>
          <SkillBadge text="Postman" iconClass="devicon-postman-plain" isMain="1" />
          <SkillBadge text="Swagger" iconClass="devicon-swagger-plain" isMain="1" />
          <SkillBadge text="Visual Studio" iconClass="devicon-visualstudio-plain" isMain="1" />
          <SkillBadge text="VS Code" iconClass="devicon-vscode-plain" isMain="1" />
          <SkillBadge text="Nginx" iconClass="devicon-nginx-plain" isMain="0" />
        </div>
      </div>

      <Divider />

      {/* About Me */}
      <div className="row align-items-center">
        <div className="col-12 col-md-4 px-4 px-md-2 mb-3 mb-md-0">
          <img src={imgMeWithBike} alt="A picture of a fine young with his ride" className="img-fluid rounded shadow-sm" />
        </div>
        <div className="col-12 col-md-8 px-3 text-center text-md-start">
          <h1 className="display-6 mb-3">A Little About Me</h1>
          <p className="regular-text">With a strong interest in systems and processes — especially within the fintech space — I bring deep domain knowledge, a sharp eye and a go-getter spirit for implementing modern, practical solutions. I believe the best solutions are simple, not complex — and I strive to bring that clarity and precision to every project I work on.</p>
          <p className="regular-text">I incorporate AI extensively to accelerate my development delivery, but never at the expense of fully understanding the technologies, processes and functionalities in place. I do not believe that AI is here to replace our professions — but to evolve them instead. As the landscape shifts, I believe that remaining agile and adaptable is the key in remaining relevant and thriving.</p>
          <p className="regular-text">Aside from building solutions, some of my hobbies include:</p>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            <HobbyBadge text="Motorcycling" imgSrc={imgMotorbike} />
            <HobbyBadge text="Weightlifting" imgSrc={imgWeightlifting} />
            <HobbyBadge text="Instruments" imgSrc={imgInstrument} />
            <HobbyBadge text="Coffee" imgSrc={imgCoffee} />
          </div>
        </div>
      </div>
    </div>
  );
}