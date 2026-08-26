import { useEffect, useState } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navItems
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)

      const firstSectionTop = sections[0]?.getBoundingClientRect().top
      const isAboveContentSections = firstSectionTop > window.innerHeight * 0.36

      if (isAboveContentSections) setActiveSection('')
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-24% 0px -64% 0px', threshold: [0, 0.2, 0.5] },
    )

    handleScroll()
    sections.forEach((section) => observer.observe(section))
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <header className={`site-header${isScrolled ? ' site-header--scrolled' : ''}`}>
      <nav className="nav shell" aria-label="Primary navigation">
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div
          className={`nav-links${isMenuOpen ? ' nav-links--open' : ''}`}
          id="primary-menu"
        >
          {navItems.map(({ label, href }) => {
            const section = href.slice(1)
            const isCombinedSection = ['about', 'projects'].includes(section)
              && ['about', 'projects'].includes(activeSection)
            const isActive = activeSection === section || isCombinedSection

            return (
              <a
                key={section}
                className={isActive ? 'is-active' : ''}
                href={href}
                aria-current={activeSection === section ? 'location' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default NavBar
