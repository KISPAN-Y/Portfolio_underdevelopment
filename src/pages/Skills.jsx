import { motion } from 'framer-motion';
import '../assets/styles/skills.css';
import SkillBar from '../components/SkillBar';
import { useEffect, useState } from 'react';
import PreLoader from '../components/PreLoader';

const Skills = () => {


  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)

  const fetchSkills = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://kispany-api.onrender.com/api/skills');

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSkills(data.data);
      }else {
        setError('Failed to fetch skills info');
      }
    }catch (err) {
      setError('Network error');
    }finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  },[])


  return (
    <section id="skills" className="skills-page">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-content">
          <div className="skills-intro">
            <p>
              Over the years, I've worked with a variety of technologies in
              both frontend and backend development. Here's a breakdown of my
              technical skills and proficiency levels.
            </p>
          </div>
          <div className="skills-container">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="skills-category"
            >
              <div className="skill-card">
                <div className="skill-card-inner">
                  <div className="skill-card-front front1">
                    <h3 className="skills-category-title-f">Frontend Development</h3>
                  </div>
                  <div className="skill-card-back">
                    <h3 className="skills-category-title-b">Frontend Development</h3>
                      {skills.frontend?.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                      <>
                        {loading && (
                          <PreLoader />
                        )}
                      </>
                      {error && (
                        <p>{error}</p>
                      )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="skills-category"
            >
              <div className="skill-card">
                <div className="skill-card-inner">
                  <div className="skill-card-front front2">
                    <h3 className="skills-category-title-f">Backend Development</h3>
                  </div>
                  <div className="skill-card-back">
                    <h3 className="skills-category-title-b">Backend Development</h3>
                      {skills.backend?.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                      <>
                        {loading && (
                          <PreLoader />
                        )}
                      </>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="skills-category"
            >
              <div className="skill-card">
                <div className="skill-card-inner">
                  <div className="skill-card-front front3">
                    <h3 className="skills-category-title-f">Design & Tools</h3>
                  </div>
                  <div className="skill-card-back">
                    <div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="width-100 flex-column"
                    >
                      <h3 className="skills-category-title-b">Design & Tools</h3>
                      {skills.design?.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                      <>
                        {loading && (
                          <PreLoader />
                        )}
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;