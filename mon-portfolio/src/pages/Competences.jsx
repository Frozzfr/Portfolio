import PageFade from '../components/PageFade';
import './Competences.css';
import skills from '../components/data/skills.json';

// Import général des icônes React Icons
import * as Fa from 'react-icons/fa';
import * as Gi from 'react-icons/gi';
import * as Gr from 'react-icons/gr';


function getIconComponent(iconName) {
  return Fa[iconName] || Gi[iconName] || Gr[iconName] || null;
}

function Competences() {
  return (
    <PageFade>
      <section className="competences container">
        <h1>Mes Compétences</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = getIconComponent(skill.icon);
            return (
              <div key={index} className="skill-bar-block">
                <div className="skill-info">
                  <span className="skill-label">
                    {Icon && <Icon className="skill-icon" />} {skill.name}
                  </span>
                  <span>{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-bar-filled"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </PageFade>
  );
}

export default Competences;