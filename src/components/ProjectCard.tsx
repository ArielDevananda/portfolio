import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const hasProjectLink = project.liveUrl || project.githubUrl

  return (
    <article className="project-card">
      <div className="project-visual">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={`${project.title} interface preview`}
            loading="lazy"
          />
        ) : (
          <div
            className="project-placeholder"
            role="img"
            aria-label={`${project.title} preview is not available yet`}
          />
        )}
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {hasProjectLink && (
          <div className="project-links">
            {project.liveUrl && (
              <a
                className="project-link project-link-primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo in a new tab`}
              >
                Live Demo
                <span aria-hidden="true">{'\u2197'}</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                className="project-link"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} source code in a new tab`}
              >
                Source Code
                <span aria-hidden="true">{'\u2197'}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
