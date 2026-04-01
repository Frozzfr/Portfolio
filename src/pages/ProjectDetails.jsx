
import PageFade from "../components/PageFade";
import projects from "../components/data/projects.json";
import './ProjectDetails.css';

export default function ProjectDetails({ details }) {
    return (
        <PageFade>
            {projects.map((project, index) => (
                project.details === details ? (
                    <div key={index} className="project-details container">
                        <h1>{project.title}</h1>
                        <p>{project.description}</p>
                        <h2>Contexte</h2>
                        <p>{project.details.context}</p>
                        <h2>Objectifs</h2>
                        <ul>
                            {project.details.objectives.map((objective, idx) => (
                                <li key={idx}>{objective}</li>
                            ))}
                        </ul>
                    </div>
                ) : null
            ))}
        </PageFade >
    );
}