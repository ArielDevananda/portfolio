import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'

type ProjectCardProps = { project: Project; index: number }

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className={index === 0 ? 'project-card' : 'project-card project-compact'}>
      {project.imagePath && <div className="project-visual">
        <img src={project.imagePath} width={project.imageWidth} height={project.imageHeight} alt={`${project.title} interface preview`} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
      </div>}
      <div className="project-content">
        <p className="eyebrow">{String(index + 1).padStart(2, '0')} / {project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.contribution && <div><h4>My contribution</h4><p>{project.contribution}</p></div>}
        {project.outcome && <p className="project-outcome">{project.outcome}</p>}
        <ul className="technology-list" aria-label="Technologies used">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
        {(project.liveUrl || project.githubUrl) && <div className="project-links">
          {project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo in a new tab`}>Live demo <ArrowUpRight aria-hidden="true" size={18} /></a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} source code in a new tab`}>Explore source code <ArrowUpRight aria-hidden="true" size={18} /></a>}
        </div>}
      </div>
    </article>
  )
}
