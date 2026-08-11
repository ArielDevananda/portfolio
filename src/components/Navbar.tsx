import { profile } from '../data/portfolio'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.name} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            AD
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="primary-navigation" aria-label="Primary navigation">
          <ul className="navigation-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a className="navigation-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          className="resume-link"
          href={profile.cvPath}
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
    </header>
  )
}