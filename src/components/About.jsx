import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { portfolioData } from '../data/portfolioData.js'

const revealDefaults = {
  autoAlpha: 0,
  y: 24,
  duration: 0.65,
  ease: 'power2.out',
}

function About() {
  const sectionRef = useRef(null)
  const [github, linkedin] = portfolioData.socialLinks

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.about-reveal', {
        ...revealDefaults,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 72%',
          once: true,
        },
      })
    },
    { scope: sectionRef, dependencies: [] },
  )

  const metadata = [
    { label: 'Location', value: portfolioData.location },
    { label: 'Availability', value: portfolioData.availability },
    { label: 'Education', value: portfolioData.education.join(' · ') },
    { label: 'Languages', value: portfolioData.languages.join(' · ') },
  ]

  return (
    <section className="section about" id="about" ref={sectionRef} aria-labelledby="about-heading">
      <div className="shell">
        <p className="eyebrow about-reveal" id="about-heading">About</p>
        <div className="about-layout">
          <div className="about-copy about-reveal">
            {portfolioData.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="metadata-grid about-reveal">
          {metadata.map(({ label, value }) => (
            <div className="metadata-item" key={label}>
              <span>{label}</span>
              <p>{value}</p>
            </div>
          ))}
          <div className="metadata-item metadata-item--connect">
            <span>Connect</span>
            <p className="inline-links">
              <a href={github.url} target="_blank" rel="noreferrer" aria-label={`${portfolioData.name} on GitHub`}>
                {github.label}
              </a>
              <i aria-hidden="true">/</i>
              <a href={linkedin.url} target="_blank" rel="noreferrer" aria-label={`${portfolioData.name} on LinkedIn`}>
                {linkedin.label}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
