import Image from "next/image";
import portrait from "@/assets/me/me.jpeg";
import personalPhoto from "@/assets/me/me-with-bike.jpeg";
import Icon from "@/components/Icon";
import ProjectCard from "@/components/ProjectCard";
import Timeline from "@/components/Timeline";
import ServicesAccordian from "@/components/ServicesAccordian";
import { contactLinks, projects, skills } from "@/data/portfolio";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section id="home" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            Driving <em>impact.</em>
          </h1>
          <p className="hero-description">
            I’m <strong>Bryan Tan Hoe Kin</strong>, a full-stack .NET developer,
            software engineer, and solutions architect based in Malaysia.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Icon name="arrow-down" />
            </a>
            <div className="hero-secondary-actions">
              <a
                className="text-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <Icon name="arrow-up-right" />
              </a>
              <a className="text-link" href="#services">
                Services <Icon name="arrow-down" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-portrait personal-photo">
          <Image
            src={portrait}
            alt="Bryan Tan in Kuala Lumpur, with the Petronas Twin Towers in the background"
            priority
            sizes="(max-width: 760px) 90vw, 440px"
          />
        </div>
      </section>

      <section
        id="work"
        className="section shell work-section"
        aria-labelledby="work-title"
      >
        <div className="section-heading">
          <div>
            <h2 id="work-title">
              Selected <em>work.</em>
            </h2>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="experience-band"
        aria-labelledby="experience-title"
      >
        <div className="section shell experience-layout">
          <div className="experience-intro">
            <p className="eyebrow section-index">02 / THE JOURNEY</p>
            <h2 id="experience-title">
              Built on
              <br />
              <em>experience.</em>
            </h2>
            <p>
              From legal technology to payments and life & pension, I’ve worked
              across the systems that keep businesses moving.
            </p>
            <p>
              C# and .NET at the core.
              <br />A wider perspective with every project.
            </p>
            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my résumé <Icon name="arrow-up-right" />
            </a>
          </div>
          <Timeline />
        </div>
      </section>

      <section
        id="expertise"
        className="section shell"
        aria-labelledby="expertise-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow section-index">03 / THE TOOLKIT</p>
            <h2 id="expertise-title">
              The right tools.
              <br />
              <em>Thoughtfully applied.</em>
            </h2>
          </div>
          <p>
            Languages, frameworks, and platforms
            <br className="desktop-break" /> I’ve worked with along the way.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <div className="skill-group" key={group.category}>
              <div className="skill-heading">
                <span>0{index + 1}</span>
                <h3>{group.category}</h3>
              </div>
              <ul className="tag-list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="section shell about-layout"
        aria-labelledby="about-title"
      >
        <div className="about-photo">
          <div className="about-photo-frame personal-photo">
            <Image
              src={personalPhoto}
              alt="Bryan with his motorcycle outdoors"
              sizes="(max-width: 760px) 90vw, 40vw"
            />
          </div>
          <span className="photo-caption">OFFLINE, MORE SO THAN YOU THINK.</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow section-index">04 / BEYOND THE KEYBOARD</p>
          <h2 id="about-title">
            Curious by nature.
            <br />
            <em>Practical by design.</em>
          </h2>
          <p>
            I’m drawn to systems and processes, especially in fintech. I bring
            domain knowledge, an eye for detail, and a go-getter spirit to
            making modern solutions work in the real world.
          </p>
          <p>
            My approach is simple: understand the problem, question the
            complexity, and build with clarity. I use AI to accelerate delivery
            while staying hands-on with the technology and decisions behind it.
          </p>
          <p>
            I see AI as an evolution of our professions. Staying curious, agile,
            and adaptable is part of the work.
          </p>
          <div className="personal-interests">
            <span>AWAY FROM THE DESK</span>
            <ul>
              <li>Motorcycling</li>
              <li>Weightlifting</li>
              <li>Instruments</li>
              <li>Coffee</li>
              <li>Chess</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="section shell services-layout"
        aria-labelledby="services-title"
      >
        <div>
          <p className="eyebrow section-index">05 / HOW I CAN HELP</p>
          <h2 id="services-title">
            Good ideas deserve
            <br />
            <em>good execution.</em>
          </h2>
          <p className="section-description">
            I take on projects outside my regular working hours, helping turn a
            clear ambition into something useful.
          </p>
        </div>
        <ServicesAccordian />
      </section>

      <section
        id="contact"
        className="contact-band"
        aria-labelledby="contact-title"
      >
        <div className="section shell">
          <div className="contact-top">
            <p className="eyebrow">06 / THE NEXT CHAPTER</p>
            <span className="contact-availability">
              <span className="status-dot" /> OPEN TO PROJECT CONVERSATIONS
            </span>
          </div>
          <a className="contact-headline" href={contactLinks[0].href}>
            <h2 id="contact-title">
              Let’s build
              <br />
              something <em>meaningful.</em>
            </h2>
            <Icon name="arrow-up-right" />
          </a>
          <div className="contact-bottom">
            <p>
              Have a problem to solve or an idea to explore?
              <br />
              I’d like to hear about it.
            </p>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={
                    link.label === "Email" ? undefined : "noopener noreferrer"
                  }
                >
                  <span>
                    {link.label}
                    <small>{link.detail}</small>
                  </span>
                  <Icon name="arrow-up-right" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
