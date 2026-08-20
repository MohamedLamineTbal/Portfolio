import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { portfolioData } from '../data/portfolioData.js'

function Contact() {
  const sectionRef = useRef(null)

  useGSAP(
    () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap.from('.contact-reveal', {
        autoAlpha: 0,
        y: 24,
        duration: 0.65,
        ease: 'power2.out',
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

  return (
    <section
      className="section contact"
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-heading"
    >
      <div className="contact-orbit" aria-hidden="true" />
      <div className="shell contact-inner">
        <p className="eyebrow contact-reveal">Contact</p>
        <h2 className="contact-title contact-reveal" id="contact-heading">
          Let&apos;s talk
        </h2>
        <p className="contact-copy contact-reveal">{portfolioData.availability}. Let&apos;s build something useful together.</p>
        <a
          className="button button--primary contact-button contact-reveal"
          href={`mailto:${portfolioData.email}`}
          aria-label={`Email ${portfolioData.name} at ${portfolioData.email}`}
        >
          <span>Email me</span>
          <span aria-hidden="true">↗</span>
        </a>

        <footer className="site-footer contact-reveal">
          <p>© {portfolioData.copyrightYear} {portfolioData.name}</p>
          <div>
            {portfolioData.socialLinks.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={`${portfolioData.name} on ${label} (opens in a new tab)`}
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#top" aria-label="Back to top">Back to top ↑</a>
        </footer>
      </div>
    </section>
  )
}

export default Contact
