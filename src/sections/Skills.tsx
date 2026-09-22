import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="container editorial-grid">
        <header><p className="eyebrow">Tools & practice</p><h2 className="section-title" id="skills-title">What I work with.</h2>
          <p>In WealthVision AI, I used Flask for APIs, integrated streaming AI responses, and optimized PostgreSQL data.</p>
        </header>
        <div>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.id}>
              <h3>{group.title}</h3>
              <ul className="skill-list">{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
