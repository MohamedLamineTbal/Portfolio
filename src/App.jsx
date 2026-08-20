import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import './App.css'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <div className="about-projects">
          <About />
          <Projects />
        </div>
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
