import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
          initial={{ opacity: 1, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: false, amount: 0.2 }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, }}
          whileInView={{ opacity: 1, y: 10, }}
          transition={{ duration: 2, }}
          viewport={{ once: false, amount: 0.2 }}
          style={{width: '100%'}}
          className='flex center'
        >
          <Link to="/projects" className="btn btn-advance prj opacity-1">View All Projects</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;