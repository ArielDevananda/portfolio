import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const INITIAL_PROJECT_COUNT = 5

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const publishedProjects = projects.filter(
    (project) => project.published,
  )

  const visibleProjects = showAllProjects
    ? publishedProjects
    : publishedProjects.slice(0, INITIAL_PROJECT_COUNT)

  const hasMoreProjects =
    publishedProjects.length > INITIAL_PROJECT_COUNT

  if (publishedProjects.length === 0) {
    return null
  }

  return (
    <section
      className="section projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="container">
        <header className="projects-header">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title" id="projects-title">
              Projects built from idea to deployment.
            </h2>
          </div>

          <p className="section-description">
            A selection of applications where I worked across interfaces,
            backend services, data, and deployment.
          </p>
        </header>

        <div className="projects-grid" id="projects-grid">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {hasMoreProjects && (
          <div className="projects-actions">
            <button
              className="button button-secondary"
              type="button"
              aria-expanded={showAllProjects}
              aria-controls="projects-grid"
              onClick={() =>
                setShowAllProjects((current) => !current)
              }
            >
              {showAllProjects
                ? 'Show fewer projects'
                : `View all projects (${publishedProjects.length})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
