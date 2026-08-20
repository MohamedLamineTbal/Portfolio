import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { portfolioData } from '../data/portfolioData.js'

function Skills() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.skills-reveal', {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      gsap.from('.skill-card', {
        autoAlpha: 0,
        y: 24,
        duration: 0.55,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 80%',
          once: true,
        },
      })
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section className="section skills" id="skills" ref={sectionRef} aria-labelledby="skills-heading">
      <div className="shell">
        <p className="eyebrow skills-reveal">Technologies</p>
        <div className="skills-heading skills-reveal">
          <h2 className="section-title" id="skills-heading">My stack</h2>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map(({ category, technologies }) => (
            <article className="skill-card" key={category}>
              <h3>{category}</h3>
              <ul>
                {technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
