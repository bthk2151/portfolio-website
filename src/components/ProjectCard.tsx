import Image from "next/image";
import type { projects } from "@/data/portfolio";
import Icon from "./Icon";
type Project = (typeof projects)[number];

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const featured = index === 0;
  return (
    <article className={`project-card${featured ? " project-featured" : ""}`}>
      <a
        className={`project-visual visual-${project.theme}`}
        href={project.projectUrl ?? project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Explore ${project.title}`}
      >
        <div className="project-visual-top">
          <span>{String(index + 1).padStart(2, "0")} / SELECTED WORK</span>
          <span className="project-launch">
            <Icon name="arrow-up-right" />
          </span>
        </div>
        <div className="project-browser">
          <div className="browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
            <small>{project.title}</small>
          </div>
          <Image
            src={project.image}
            alt={project.imageAlt}
            sizes={
              featured
                ? "(max-width: 760px) 90vw, 65vw"
                : "(max-width: 760px) 90vw, 44vw"
            }
          />
        </div>
        {featured && (
          <span className="project-visual-caption">
            YOUR DOCUMENTS. CONNECTED.
          </span>
        )}
      </a>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.stack.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title === "Portfolio Website"
                ? "Visit website"
                : "View project"}
              <Icon name="arrow-up-right" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Source code <Icon name="arrow-up-right" />
          </a>
          {"pressUrl" in project && project.pressUrl && (
            <a
              href={project.pressUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              In the press <Icon name="arrow-up-right" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
