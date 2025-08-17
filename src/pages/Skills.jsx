import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

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
              <h3 className="skills-category-title">Frontend Development</h3>
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
            <div className="skills-category">
              <h3 className="skills-category-title">Backend Development</h3>
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }}
              className="skills-category"
            >
              <h3 className="skills-category-title">Design & Tools</h3>
              {skills.design.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;