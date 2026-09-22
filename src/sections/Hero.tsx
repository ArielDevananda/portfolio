import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="container">
        <p className="eyebrow">Full-stack development & applied AI</p>
        <h1 className="hero-title" id="hero-title">{profile.name}<span className="hero-period">.</span></h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-statement">I build web applications with AI, from the interface to the database.</p>
            <p className="hero-introduction">An Information Systems student in Yogyakarta, Indonesia. My work brings together full-stack development and practical AI integration.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDown aria-hidden="true" size={18} /></a>
              <a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight aria-hidden="true" size={18} /></a>
            </div>
          </div>
          <p className="hero-note">Based in<br /><span>{profile.location}</span></p>
        </div>
      </div>
    </section>
  )
}
