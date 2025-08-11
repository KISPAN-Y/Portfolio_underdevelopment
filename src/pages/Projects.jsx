import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="projects-page">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-filter">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Frontend</button>
          <button className="filter-btn">Backend</button>
          <button className="filter-btn">Full Stack</button>
          <button className="filter-btn">Design</button>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;