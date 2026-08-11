import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
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
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App