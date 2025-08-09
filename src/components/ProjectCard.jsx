export default function ProjectCard({ title, imgSrc, description, projectUrl = null, githubUrl = null }) {
    return (
        <div className="card shadow-sm">
            <img src={imgSrc} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title lead">{title}</h5>
                <p className="card-text regular-text">{description}</p>
            </div>
            <div className="card-body">
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