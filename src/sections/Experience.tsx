import { timelineItems } from '../data/timeline'

export function Experience() {
  const publishedItems = timelineItems.filter(
    (item) => item.published,
  )

  if (publishedItems.length === 0) {
    return null
  }

  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <header className="experience-header">
          <div>
            <p className="eyebrow">Experience, education & achievements</p>

            <h2 className="section-title" id="experience-title">
              Building expertise through study, projects, and applied work.
            </h2>
          </div>

          <p className="section-description">
            An AI engineering internship, education, and achievements that
            shaped my approach to building full-stack and intelligent products.
          </p>
        </header>

        <ol className="timeline-list">
          {publishedItems.map((item, index) => (
            <li className="timeline-item" key={item.id}>
              <div className="timeline-marker" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>

              <article className="timeline-content">
                <header className="timeline-heading">
                  <div>
                    <p className="timeline-category">{item.category}</p>
                    <h3>{item.title}</h3>
                  </div>

                  <p className="timeline-period">{item.period}</p>
                </header>

                <p className="timeline-organization">
                  {item.organization}

                  {item.location && (
                    <>
                      <span aria-hidden="true"> / </span>
                      {item.location}
                    </>
                  )}
                </p>

                <p className="timeline-summary">{item.summary}</p>

                {item.highlights.length > 0 && (
                  <ul className="timeline-highlights">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
