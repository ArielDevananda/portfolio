import { profile } from '../data/portfolio'

export function About() {
  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="container editorial-grid">
        <header><p className="eyebrow">02 / About</p><h2 className="section-title" id="about-title">A little<br />about me.</h2></header>
        <div className="about-copy">
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <dl className="about-facts">
            <div><dt>Based in</dt><dd>{profile.location}</dd></div>
            <div><dt>Focus</dt><dd>{profile.role}</dd></div>
            {profile.availableForWork && <div><dt>Currently</dt><dd>Open to opportunities</dd></div>}
          </dl>
        </div>
      </div>
    </section>
  )
}
