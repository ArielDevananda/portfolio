import { profile } from '../data/portfolio'

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
      </div>
    </section>
  )
}
