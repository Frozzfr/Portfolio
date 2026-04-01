import PageFade from "../components/PageFade";
import ProjectCard from "../components/ProjectCard";
import projects from "../components/data/projects.json";
import "./Projects.css";

function Projects() {
  return (
    <PageFade>
      <section className="projects container">
        <h1>Mes Projets</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
              slug={project.slug}
            />
          ))}
        </div>
      </section>
    </PageFade>
  );
}

export default Projects;
