import { useState } from 'react'
import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

const INITIAL_PROJECT_COUNT = 4

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
            <p className="eyebrow">01 / Selected work</p>
            <h2 className="section-title" id="projects-title">
              A closer look at my work.
            </h2>
          </div>

          <p className="section-description">
            From a financial assistant to a children's learning app.
            A selection of my work in web, AI, and mobile development.
          </p>
        </header>

        <div id="projects-grid">
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
