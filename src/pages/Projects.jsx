import ProjectCard from '../components/ProjectCard';
import useScrollAnimation from '../hooks/UseScrollAnimation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PreLoader from '../components/PreLoader';
import PreLoaderSingle from '../components/PreLoaderSingle';

const Projects = () => {
  useScrollAnimation();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const result = await fetch('https://kispany-api.onrender.com/api/projects');
      const data = await result.json();

      if (data.success){
        setProjects(data.data);
      }else {
        setError('Failed to fetch projects');
        console.log('Failed to fetch projects');
      }
    } catch (err) {
      setError('Error fetching projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  },[])


  return (
    <section id="projects" className="projects-page">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-filter">
          <button className="filter-btn active white">All</button>
          <button className="filter-btn white">Frontend</button>
          <button className="filter-btn white">Backend</button>
          <button className="filter-btn white">Full Stack</button>
          <button className="filter-btn white">Design</button>
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
          <>
            {loading && (
              <PreLoaderSingle />
            )}
          </>
        </motion.div>
        {error && (
          <p>{error}</p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 50, }}
          whileInView={{ opacity: 1, y: 10, }}
          transition={{ duration: 2, }}
          viewport={{ once: false, amount: 0.2 }}
          style={{width: '100%'}}
          className='flex center'
        >
          <Link to="/projects" className="btn btn-advance prj white opacity-1">View All Projects</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;