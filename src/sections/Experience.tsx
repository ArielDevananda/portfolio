import { ArrowUpRight } from 'lucide-react'
import { timelineItems } from '../data/timeline'

export function Experience() {
  const publishedItems = timelineItems.filter((item) => item.published)
  if (!publishedItems.length) return null
  return (
    <section className="section experience-section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <header className="section-header"><div><p className="eyebrow">03 / Background</p><h2 className="section-title" id="experience-title">Learning. Building. Growing.</h2></div><p>Experience, education & achievements</p></header>
        <ol className="timeline-list">
          {publishedItems.map((item) => (
            <li key={item.id}>
              <article className="timeline-row">
                <p className="timeline-period">{item.period}</p>
                <div className="timeline-heading"><p className="eyebrow">{item.category}</p><h3>{item.title}</h3><p>{item.organization}{item.location && ` / ${item.location}`}</p></div>
                <div className="timeline-detail"><p>{item.summary}</p>
                  {item.highlights.length > 0 && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
                  {item.certificateUrl && <a className="text-link" href={item.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${item.title} (opens in a new tab)`}>View certificate <ArrowUpRight aria-hidden="true" size={18} /></a>}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
