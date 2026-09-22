import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { profile } from '../data/portfolio'

type Theme = 'dark' | 'light'

const THEME_TRANSITION_DURATION = 200

const navigationItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const [activeSection, setActiveSection] = useState('')
  const themeTransitionTimeout = useRef<number | null>(null)
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      return window.localStorage.getItem('portfolio-theme') === 'dark'
        ? 'dark'
        : 'light'
    } catch {
      return 'light'
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
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      }
    }, { rootMargin: '-15% 0px -60% 0px' })
    document.querySelectorAll('main section[id], .hero-section').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
        if (document.activeElement?.closest('#primary-navigation')) menuButton.current?.focus()
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
      theme === 'dark' ? '#191d1b' : '#f6f5f1',
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
          {profile.name}
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
                  aria-current={item.href === `#${activeSection}` ? 'location' : undefined}
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
            <Sun aria-hidden="true" size={20} />
          ) : (
            <Moon aria-hidden="true" size={20} />
          )}
        </button>

        <button
          className="menu-toggle"
          ref={menuButton}
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
          {isMenuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>
    </header>
  )
}
