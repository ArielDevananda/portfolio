import { ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolio'

export function Contact() {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container editorial-grid">
        <header><p className="eyebrow">04 / Contact</p><h2 className="section-title" id="contact-title">Let's talk.</h2></header>
        <div className="contact-copy">
          <p>Have a project in mind, or want to talk about full-stack development and AI? I'd love to hear from you.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight aria-hidden="true" size={18} /></a>
          <div className="contact-socials">
            <a className="text-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={18} /></a>
            <a className="text-link" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
