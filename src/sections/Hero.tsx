import { useEffect, useState } from 'react'
import { profile } from '../data/portfolio'

const heroRoles = ['Full-Stack Developer', 'AI Engineer'] as const

const TYPING_DELAY = 85
const DELETING_DELAY = 45
const ROLE_PAUSE = 1500
const ROLE_CHANGE_DELAY = 300

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const currentRole = heroRoles[roleIndex]
  const displayedRole = currentRole.slice(0, characterCount)

  useEffect(() => {
    let delay = isDeleting ? DELETING_DELAY : TYPING_DELAY

    if (!isDeleting && characterCount === currentRole.length) {
      delay = ROLE_PAUSE
    } else if (isDeleting && characterCount === 0) {
      delay = ROLE_CHANGE_DELAY
    }

    const timeoutId = window.setTimeout(() => {
      if (!isDeleting) {
        if (characterCount < currentRole.length) {
          setCharacterCount((current) => current + 1)
          return
        }

        setIsDeleting(true)
        return
      }

      if (characterCount > 0) {
        setCharacterCount((current) => current - 1)
        return
      }

      setIsDeleting(false)
      setRoleIndex((current) => (current + 1) % heroRoles.length)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [characterCount, currentRole, isDeleting])

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
            <strong className="hero-role">
              <span className="visually-hidden">{profile.role}</span>
              <span className="hero-role-typing" aria-hidden="true">
                {displayedRole}
                <span className="typing-cursor" />
              </span>
            </strong>
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
        </div>
      </div>
    </section>
  )
}
