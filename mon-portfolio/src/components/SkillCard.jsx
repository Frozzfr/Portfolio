import { Fade } from 'react-awesome-reveal';
import './SkillCard.css';

function SkillCard({ title, icon: Icon, skills }) {
  return (
    <Fade cascade damping={0.1} triggerOnce>
      <div className="skill-card">
        <div className="skill-header">
          {Icon && <Icon className="skill-icon" />}
          <h3>{title}</h3>
        </div>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name}
              <div className="skill-bar">
                <div className="skill-bar-filled" style={{ width: skill.level + '%' }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fade>
  );
}

export default SkillCard;
