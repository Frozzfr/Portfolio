import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './ProjectCard.css';


function ProjectCard({ title, description, technologies, link, image, slug }) {
  return (
    <div className="project-card">
      {image && (
        <img src={image} alt={title} className="project-image" />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='footer-card'>
        <div className="project-techs">
          {technologies.map((tech, index) => (
            <span key={index} className="project-tech">{tech}</span>
          ))}
        </div>
        <div className="container-card-link">
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
              Voir le projet <FaExternalLinkAlt size={14} />
            </a>
          )}
          {slug && (
            <Link to={`/projects/${slug}`} className="project-link">
              Voir en détail <FaExternalLinkAlt size={14} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;