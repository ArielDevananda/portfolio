import { useEffect, useRef, useState } from 'react'
import { profile } from '../data/portfolio'

type Theme = 'dark' | 'light'

const THEME_TRANSITION_DURATION = 350

const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Background', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const themeTransitionTimeout = useRef<number | null>(null)
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem('portfolio-theme') === 'light'
        ? 'light'
        : 'dark'
    } catch {
      return 'dark'
    }
  })

  function closeMenu() {
    setIsMenuOpen(false)
  }

  function toggleTheme() {
    document.documentElement.classList.add('theme-transition')

    if (themeTransitionTimeout.current !== null) {
      window.clearTimeout(themeTransitionTimeout.current)
    }

    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))

    themeTransitionTimeout.current = window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition')
      themeTransitionTimeout.current = null
    }, THEME_TRANSITION_DURATION)
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

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    )

    themeColor?.setAttribute(
      'content',
      theme === 'dark' ? '#090b0f' : '#f5f7fb',
    )

    try {
      window.localStorage.setItem('portfolio-theme', theme)
    } catch {
      // The selected theme still works when browser storage is unavailable.
    }
  }, [theme])

  useEffect(() => {
    return () => {
      if (themeTransitionTimeout.current !== null) {
        window.clearTimeout(themeTransitionTimeout.current)
      }

      document.documentElement.classList.remove('theme-transition')
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

        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42" />
            </svg>
          ) : (
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M20.5 14.3A8.5 8.5 0 0 1 9.7 3.5 8.5 8.5 0 1 0 20.5 14.3Z" />
            </svg>
          )}
        </button>

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
