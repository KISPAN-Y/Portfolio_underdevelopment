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
        <h3 className="project-title z-index-3">{project.title}</h3>
        <p className="project-description z-index-2">{project.description}</p>
        <div className="project-tags z-index-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag z-index-2">
              {tag}
            </span>
          ))}
        </div>
        <div className='drops z-index-1'>
          <p className='drop z-index-1 opacity-05'></p>
          <p className='drop z-index-1 opacity-05'></p>
          <p className='drop z-index-1 opacity-05'></p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;