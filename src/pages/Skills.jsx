import SkillBar from '../components/SkillBar';
import { skills } from '../data/skills';

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
            <div className="skills-category">
              <h3 className="skills-category-title">Frontend Development</h3>
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Backend Development</h3>
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
            <div className="skills-category">
              <h3 className="skills-category-title">Design & Tools</h3>
              {skills.design.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;