import { profile } from '../data/portfolio'

const principles = [
  {
    number: '01',
    title: 'Accessible interfaces',
    description:
      'Interfaces should remain clear, responsive, and usable for different users and devices.',
  },
  {
    number: '02',
    title: 'Reliable backend',
    description:
      'Application logic, APIs, and data should behave predictably and handle failure safely.',
  },
  {
    number: '03',
    title: 'Maintainable delivery',
    description:
      'Readable code, documentation, and version control make products easier to improve.',
  },
] as const

export function About() {
  const availability = profile.availableForWork
    ? 'Open to opportunities'
    : 'Currently unavailable'

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

        <aside className="principles-panel" aria-label="Development principles">
          <header className="principles-header">
            <p>Development principles</p>
            <span>What I value</span>
          </header>

          <ol className="principles-list">
            {principles.map((principle) => (
              <li key={principle.number}>
                <span className="principle-number" aria-hidden="true">
                  {principle.number}
                </span>

                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}