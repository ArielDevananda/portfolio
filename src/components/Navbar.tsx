import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <header className="site-header">
      <div className="container navbar">
        <a
          className="brand"
          href="#top"
          aria-label={`${profile.name} home`}
          onClick={closeMenu}
        >
          <span className="brand-mark" aria-hidden="true">
            AD
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav
          className={`primary-navigation ${
            isMenuOpen ? 'is-open' : ''
          }`}
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          <ul className="navigation-list">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a
                  className="navigation-link"
                  href={item.href}
                  onClick={closeMenu}
                >
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

        <button
          className={`menu-toggle ${
            isMenuOpen ? 'is-open' : ''
          }`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMenuOpen
              ? 'Close navigation menu'
              : 'Open navigation menu'
          }
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="menu-line" aria-hidden="true" />
          <span className="menu-line" aria-hidden="true" />
          <span className="menu-line" aria-hidden="true" />
        </button>
      </div>
    </header>
  )
}