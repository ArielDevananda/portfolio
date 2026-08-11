import { profile } from '../data/portfolio'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p>Designed and built by {profile.name}.</p>
          <p>
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>

        <a className="back-to-top" href="#top">
          Back to top
          <span aria-hidden="true">&uarr;</span>
        </a>
      </div>
    </footer>
  )
}