import { profile } from '../data/portfolio'
import { projects } from '../data/projects'

export function About() {
  const availability = profile.availableForWork
    ? 'Open to opportunities'
    : 'Currently unavailable'
  const yearsExperience = Math.max(
    1,
    new Date().getFullYear() - profile.experienceStartYear,
  )
  const completedProjects = projects.filter((project) => project.published).length

  const statistics = [
    {
      value: `${yearsExperience}+`,
      label: 'Years Experience',
      description: `Learning and building since ${profile.experienceStartYear}`,
    },
    {
      value: `${completedProjects}`,
      label: 'Projects Completed',
      description: 'Published projects and case studies',
    },
  ] as const

  return (
    <section
      className="section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-copy">
          <p className="eyebrow">About me</p>

          <h2 className="section-title" id="about-title">
            Building complete products with purpose.
          </h2>

          <div className="about-text">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="about-facts">
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>

            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>

            <div>
              <dt>Status</dt>
              <dd>{availability}</dd>
            </div>
          </dl>
        </div>

        <aside className="about-stats-panel" aria-label="Professional statistics">
          <header className="about-stats-header">
            <p>At a glance</p>
            <span>Current profile</span>
          </header>

          <dl className="about-stats-list">
            {statistics.map((statistic) => (
              <div key={statistic.label}>
                <dt>{statistic.label}</dt>
                <dd className="about-stat-value">{statistic.value}</dd>
                <dd className="about-stat-description">
                  {statistic.description}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  )
}
