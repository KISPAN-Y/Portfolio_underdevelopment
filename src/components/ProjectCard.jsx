import useScrollAnimation from '../hooks/UseScrollAnimation';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card animate-up">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-links">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-external-link-alt"></i>
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;