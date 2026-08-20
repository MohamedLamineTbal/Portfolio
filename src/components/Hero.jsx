import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { portfolioData } from '../data/portfolioData.js'

function Hero() {
  const heroRef = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      const timeline = gsap.timeline({ defaults: { ease: 'power2.out' } })

      timeline
        .from('.hero-eyebrow', { autoAlpha: 0, y: 16, duration: 0.6 })
        .from('.hero-name-line', { autoAlpha: 0, y: 40, duration: 0.8, stagger: 0.08 }, '-=0.25')
        .from('.hero-role', { autoAlpha: 0, y: 24, duration: 0.6 }, '-=0.28')
        .from('.hero-summary', { autoAlpha: 0, y: 20, duration: 0.6 }, '-=0.28')
        .from('.hero-actions .button', {
          autoAlpha: 0,
          y: 16,
          duration: 0.55,
          stagger: 0.12,
        }, '-=0.2')
        .from('.scroll-hint', { autoAlpha: 0, duration: 0.5 }, '-=0.05')

      gsap.fromTo(
        '.scroll-line-inner',
        { yPercent: -10 },
        {
          yPercent: 125,
          duration: 1.4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        },
      )
    },
    { scope: heroRef },
  )

  const nameParts = portfolioData.name.split(' ')

  return (
    <section className="hero" id="top" ref={heroRef} aria-labelledby="hero-heading">
      <div className="hero-orbit hero-orbit--outer" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--inner" aria-hidden="true" />

      <div className="hero-content shell">
        <p className="eyebrow hero-eyebrow">Hello, I&apos;m</p>
        <h1 className="hero-name" id="hero-heading">
          {nameParts.map((part, index) => (
            <span
              className={`hero-name-line${index === 0 ? ' hero-name-line--first' : ''}`}
              key={part}
            >
              {part}
            </span>
          ))}
        </h1>
        <p className="hero-role">{portfolioData.title}</p>
        <p className="hero-summary">{portfolioData.shortBio}</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#projects">
            View projects
            <span aria-hidden="true">↘</span>
          </a>
          <a className="button button--secondary" href="#contact">
            Contact me
          </a>
        </div>
      </div>

      <a className="scroll-hint" href="#about" aria-label="Scroll to about section">
        <span>Scroll</span>
        <span className="scroll-line" aria-hidden="true">
          <span className="scroll-line-inner" />
        </span>
      </a>
    </section>
  )
}

export default Hero
