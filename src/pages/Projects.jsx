import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  useScrollAnimation();
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;