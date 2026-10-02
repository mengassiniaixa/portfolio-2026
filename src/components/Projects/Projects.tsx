import "./Projects.css";
import { PROJECTS } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <header className="projects__header">
          <span className="projects__eyebrow">03 — Proyectos</span>
          <h2 className="projects__title">
            En lo que vengo trabajando<span className="projects__title-dot">.</span>
          </h2>
        </header>

        <ul className="projects__list">
          {PROJECTS.map((project) => (
            <li key={project.slug} className="project">
              <div className="project__media">
                {project.image ? (
                  <img src={project.image} alt={`Preview de ${project.title}`} loading="lazy" />
                ) : (
                  <div className="project__placeholder" aria-hidden="true">
                    <span className="project__placeholder-label">Preview</span>
                    <span className="project__placeholder-title">{project.title}</span>
                  </div>
                )}
              </div>

              <div className="project__body">
                {project.role && (
                  <span className="project__role">
                    {project.role}
                    <span className="project__role-dot">.</span>
                  </span>
                )}

                <h3 className="project__title">{project.title}</h3>
                <p className="project__description">{project.description}</p>

                {project.stack.length > 0 && (
                  <ul className="project__stack">
                    {project.stack.map((tech) => (
                      <li key={tech} className="project__stack-item">
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="project__actions">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__cta project__cta--primary"
                    >
                      Ver live <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__cta project__cta--secondary"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
