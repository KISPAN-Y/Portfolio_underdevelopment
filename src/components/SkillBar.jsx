const SkillBar = ({ skill }) => {
  return (
    <div className="skill-item flex-column width-100">
      <div className="skill-info flex-row space-between width-100">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percent">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;