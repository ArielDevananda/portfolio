import { ProjectCard } from '../components/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  const publishedProjects = projects.filter(
    (project) => project.published,
  )

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

        <div className="projects-grid">
          {publishedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}