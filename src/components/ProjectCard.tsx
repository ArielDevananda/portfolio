import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, '0')
  const hasProjectLink = project.githubUrl || project.liveUrl

  return (
    <article
      className={`project-card ${
        project.featured ? 'project-card-featured' : ''
      }`}
    >
      <div className="project-visual">
        {project.imagePath ? (
          <img
            src={project.imagePath}
            alt={`${project.title} interface preview`}
            loading="lazy"
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{project.category}</span>
            <strong>{projectNumber}</strong>
          </div>
        )}
      </div>

      <div className="project-content">
        <div className="project-heading">
          <p className="project-category">{project.category}</p>
          <span className="project-number">{projectNumber}</span>
        </div>

        <h3>{project.title}</h3>

        <p className="project-description">{project.description}</p>

        <div className="project-contribution">
          <strong>My contribution</strong>
          <p>{project.contribution}</p>
        </div>

        <ul className="technology-list" aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              Source code
              <span aria-hidden="true">&nearr;</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live demo
              <span aria-hidden="true">&nearr;</span>
            </a>
          )}

          {!hasProjectLink && (
            <span className="project-link-unavailable">
              Case study coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}