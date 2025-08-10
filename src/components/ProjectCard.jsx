import SkillBadge from "./SkillBadge";

export default function ProjectCard({ title, imgSrc, description, skills = [], projectUrl = null, githubUrl = null }) {
    return (
        <div className="card shadow-sm text-start">
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body my-3 project-card-text-section">
                <h5 className="card-title lead fw-normal">{title}</h5>
                <p className="card-text regular-text" dangerouslySetInnerHTML={{ __html: description }}></p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item regular-text project-card-skill-section">
                    {skills.map((skill, index) => (
                        <SkillBadge key={index} text={skill.text} iconClass={skill.iconClass} />
                    ))}
                </li>
            </ul>
            <div className="card-body text-end">
                {projectUrl &&
                    <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                        <i className="devicon-chrome-plain" style={{ fontSize: '20px', marginLeft: '8px' }}></i>
                    </a>}
                {githubUrl &&
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted me-3">
                        <i className="devicon-github-plain" style={{ fontSize: '20px', marginLeft: '8px' }}></i>
                    </a>}
            </div>
        </div>
    );
};