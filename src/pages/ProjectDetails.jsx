import { useParams } from "react-router-dom";
import { FaExternalLinkAlt } from 'react-icons/fa';
import PageFade from "../components/PageFade";
import projects from "../components/data/projects.json";
import "./ProjectDetails.css";

export default function ProjectDetails() {
    const { slug } = useParams();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <PageFade>
                <div className="project-details">
                    <h1>Projet introuvable</h1>
                    <p>Aucun projet ne correspond à ce slug.</p>
                </div>
            </PageFade>
        );
    }

    const { title, description, technologies, details } = project;

    return (
        <PageFade>
            <div className="project-details">
                <h1>{title}</h1>
                <p>{description}</p>

                <div className="project-details-techs">
                    {technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>

                <section>
                    <h2>Contexte</h2>
                    <p>{details.context}</p>
                </section>

                <section>
                    <h2>Objectifs</h2>
                    <ul>
                        {details.objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>Fonctionnalités</h2>
                    <ul>
                        {details.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </section>

                {details.github && (
                    <a href={details.github} target="_blank" rel="noreferrer">
                        Voir le GitHub <FaExternalLinkAlt size={14} />
                    </a>
                )}

                {details.demo && (
                    <a href={details.demo} target="_blank" rel="noreferrer">
                        Voir la démo <FaExternalLinkAlt size={14} />
                    </a>
                )}
            </div>
        </PageFade>
    );
}