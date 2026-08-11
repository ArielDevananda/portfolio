import { skillGroups } from '../data/skills'

export function Skills() {
  return (
    <section
      className="section skills-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <header className="skills-header">
          <div>
            <p className="eyebrow">Technical skills</p>

            <h2 className="section-title" id="skills-title">
              A practical stack for complete web products.
            </h2>
          </div>

          <p className="section-description">
            Technologies and practices I have used to build interfaces,
            backend services, databases, and production-ready applications.
          </p>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.id}>
              <header className="skill-group-header">
                <span className="skill-number" aria-hidden="true">
                  {group.number}
                </span>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </header>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}