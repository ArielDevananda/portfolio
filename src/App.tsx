import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import './App.css'

function App() {
  return (
    <div className="app" id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App