import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { portfolioData } from '../data/portfolioData.js'
import AboutProjects from './AboutProjects.jsx'

function ProjectPreview({ type }) {
  return (
    <div className={`project-preview preview--${type}`} aria-hidden="true">
      <div className="preview-frame">
        <span className="preview-kicker">
          {type === 'payment' ? 'RELAY / PAYMENTS' : `SYSTEM / 0${type.length}`}
        </span>

        {type === 'payment' && (
          <div className="payment-ui">
            <div className="payment-summary">
              <span>Processed</span>
              <strong>$24,860</strong>
              <em>+12.4%</em>
            </div>
            <div className="payment-bars">
              {[38, 62, 46, 78, 58, 92, 74].map((height, index) => (
                <i key={height + index} style={{ '--payment-bar': `${height}%` }} />
              ))}
            </div>
            <div className="payment-activity">
              <span><i />PAY-2048 <b>PAID</b></span>
              <span><i />PAY-2047 <b>PAID</b></span>
            </div>
          </div>
        )}

        {type === 'workflow' && (
          <div className="workflow-map">
            <span className="workflow-node workflow-node--one" />
            <span className="workflow-node workflow-node--two" />
            <span className="workflow-node workflow-node--three" />
            <span className="workflow-node workflow-node--four" />
            <span className="workflow-axis" />
          </div>
        )}

        {type === 'signals' && (
          <div className="signal-chart">
            {[34, 62, 44, 79, 54, 90, 67].map((height, index) => (
              <span key={height + index} style={{ '--bar-height': `${height}%` }} />
            ))}
            <i className="signal-rule" />
          </div>
        )}

        {type === 'portal' && (
          <div className="portal-ui">
            <span className="portal-sidebar" />
            <div className="portal-content">
              <i />
              <i />
              <i />
            </div>
            <span className="portal-status">02</span>
          </div>
        )}

        {type === 'ledger' && (
          <div className="ledger-cards">
            <span className="ledger-card ledger-card--back" />
            <span className="ledger-card ledger-card--middle" />
            <span className="ledger-card ledger-card--front">
              <i />
              <i />
              <i />
            </span>
          </div>
        )}

        {type === 'orbit' && (
          <div className="orbit-system">
            <span className="orbit-ring orbit-ring--outer" />
            <span className="orbit-ring orbit-ring--inner" />
            <span className="orbit-core" />
            <i className="orbit-satellite orbit-satellite--one" />
            <i className="orbit-satellite orbit-satellite--two" />
          </div>
        )}

        {type === 'relay' && (
          <div className="relay-lines">
            <span />
            <span />
            <span />
            <span />
            <i className="relay-pulse relay-pulse--one" />
            <i className="relay-pulse relay-pulse--two" />
          </div>
        )}

        {type !== 'payment' && (
          <span className="preview-index">{type.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
    </div>
  )
}

function Projects() {
  const sectionRef = useRef(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects = showAllProjects
    ? portfolioData.projects
    : portfolioData.projects.slice(0, 3)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.projects-reveal', {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.projects-heading',
          start: 'top 76%',
          once: true,
        },
      })

      gsap.from('.project-card', {
        autoAlpha: 0,
        y: 28,
        duration: 0.62,
        ease: 'power2.out',
        stagger: 0.09,
        scrollTrigger: {
          trigger: '.project-list',
          start: 'top 78%',
          once: true,
        },
      })
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section
      className="section projects"
      id="projects"
      ref={sectionRef}
      aria-labelledby="projects-heading"
    >
      <div className="shell">
        <AboutProjects />

        <div className="project-list" id="project-list">
          {visibleProjects.map((project, index) => (
            <div
              className={`project-entry project-entry--${project.accent}`}
              key={project.title}
            >
              <div className="project-timeline-marker" aria-hidden="true">
                <span>{project.year}</span>
                <i />
              </div>

              <article className={`project-card project-card--${project.accent}`}>
                <div className="project-number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="project-details">
                  <div className="project-meta">
                    <span className="project-meta-year">{project.year}</span>
                    <a
                      href={project.link.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.link.label} for ${project.title} (opens in a new tab)`}
                    >
                      {project.link.label}
                      <span className="external-arrow" aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="project-tags" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>

                <ProjectPreview type={project.preview} />
              </article>
            </div>
          ))}
        </div>

        {portfolioData.projects.length > 3 && (
          <button
            className="more-projects"
            type="button"
            aria-controls="project-list"
            aria-expanded={showAllProjects}
            onClick={() => setShowAllProjects((isShowingAll) => !isShowingAll)}
          >
            <span>{showAllProjects ? 'Show fewer projects' : 'View more projects'}</span>
            <span aria-hidden="true">{showAllProjects ? '↑' : '↓'}</span>
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
