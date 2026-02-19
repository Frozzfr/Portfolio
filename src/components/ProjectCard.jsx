import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

function ProjectCard({ title, description, technologies, link, image }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={title} className="project-image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-techs">
        {technologies.map((tech, index) => (
          <span key={index} className="project-tech">{tech}</span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          Voir le projet <FaExternalLinkAlt size={14} />
        </a>
      )}
    </div>
  );
}

export default ProjectCard;