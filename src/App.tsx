import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Experience } from './sections/Experience'
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
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

export default App