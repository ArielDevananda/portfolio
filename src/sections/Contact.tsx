import { profile } from '../data/portfolio'

const socialLinks = [
  {
    label: 'GitHub',
    href: profile.githubUrl,
  },
  {
    label: 'LinkedIn',
    href: profile.linkedinUrl,
  },
] as const

export function Contact() {
  const availabilityMessage = profile.availableForWork
    ? 'I am currently open to full-stack developer opportunities, collaborative projects, and conversations about building useful software.'
    : 'I am not currently looking for a new role, but you are still welcome to get in touch.'

  return (
    <section
      className="section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-panel">
          <div className="contact-copy">
            <p className="eyebrow">Get in touch</p>

            <h2 className="section-title" id="contact-title">
              Let&apos;s build something useful.
            </h2>

            <p className="section-description">
              {availabilityMessage}
            </p>

            <div className="contact-actions">
              <a
                className="button button-primary"
                href={`mailto:${profile.email}`}
              >
                Send an email
              </a>

              <a
                className="button button-secondary"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn
                <span aria-hidden="true">&nearr;</span>
              </a>
            </div>
          </div>

          <ul className="contact-links">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </li>

            {socialLinks.map((link) => (
              <li key={link.label}>
                <span>{link.label}</span>

                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  View profile
                  <span aria-hidden="true">&nearr;</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}