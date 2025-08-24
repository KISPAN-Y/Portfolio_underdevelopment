import { skills } from '../data/skills';
import { motion } from 'framer-motion';
import '../assets/styles/skills.css'; // Import the CSS file
import SkillBar from '../components/SkillBar';

const Skills = () => {
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
                  <div className="skill-card-front">
                    <div className="skill-icon">💻</div>
                    <h3 className="skills-category-title">Frontend Development</h3>
                    <div className="skill-list">
                      {skills.frontend.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-card-back">
                    <div className="skill-icon">💻</div>
                    <h3 className="skills-category-title">Frontend Development</h3>
                    <div className="skill-list">
                      {skills.frontend.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
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
                  <div className="skill-card-front">
                    <div className="skill-icon">⚙️</div>
                    <h3 className="skills-category-title">Backend Development</h3>
                    <div className="skill-list">
                      {skills.backend.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-card-back">
                    <div className="skill-icon">⚙️</div>
                    <h3 className="skills-category-title">Backend Development</h3>
                    <div className="skill-list">
                      {skills.backend.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
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
                  <div className="skill-card-front">
                    <div className="skill-icon">🎨</div>
                    <h3 className="skills-category-title">Design & Tools</h3>
                    <div className="skill-list">
                      {skills.design.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="skill-card-back">
                    <div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 2, ease: 'easeOut' }}
                      viewport={{ once: false, amount: 0.2 }}
                      className="width-100 flex-column"
                    >
                      <h3 className="skills-category-title">Design & Tools</h3>
                      {skills.design.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
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