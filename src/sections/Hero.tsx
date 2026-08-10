import { profile } from '../data/portfolio'

const stackLayers = [
  {
    number: '01',
    title: 'Frontend',
    description: 'Responsive interfaces built with React and TypeScript.',
  },
  {
    number: '02',
    title: 'Backend',
    description: 'APIs, authentication, and reliable application logic.',
  },
  {
    number: '03',
    title: 'Data & Deployment',
    description: 'Database design and applications ready for production.',
  },
] as const

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          {profile.availableForWork && (
            <p className="availability">
              <span className="status-dot" aria-hidden="true" />
              Available for opportunities
            </p>
          )}

          <p className="eyebrow">Hello, my name is</p>

          <h1 className="hero-title" id="hero-title">
            <span>{profile.name}</span>
            <strong>{profile.role}</strong>
          </h1>

          <p className="hero-introduction">{profile.introduction}</p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View projects
              <span aria-hidden="true">&darr;</span>
            </a>

            <a
              className="button button-secondary"
              href={`mailto:${profile.email}`}
            >
              Contact me
            </a>
          </div>

          <ul className="hero-meta" aria-label="Profile details">
            <li>
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </li>

            <li>
              <span>Focus</span>
              <strong>Full-stack products</strong>
            </li>
          </ul>
        </div>

        <aside className="stack-card" aria-label="Full-stack capabilities">
          <div className="stack-card-header">
            <p>How I build</p>
            <span>End to end</span>
          </div>

          <div className="stack-list">
            {stackLayers.map((layer) => (
              <article className="stack-layer" key={layer.number}>
                <span className="stack-number">{layer.number}</span>

                <div>
                  <h2>{layer.title}</h2>
                  <p>{layer.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="stack-card-footer">
            <span className="status-dot" aria-hidden="true" />
            From interface to deployment
          </div>
        </aside>
      </div>
    </section>
  )
}