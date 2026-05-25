'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  ['Work',    '#work'],
  ['Skills',  '#skills'],
  ['XP',      '#experience'],
  ['Contact', '#contact'],
] as const

const SECTION_IDS = ['work', 'skills', 'experience', 'contact']

export default function Nav() {
  const [scrolled,       setScrolled]       = useState(false)
  const [mounted,        setMounted]        = useState(false)
  const [activeSection,  setActiveSection]  = useState('')
  const [hoveredLink,    setHoveredLink]    = useState<string | null>(null)
  const [hireMeHovered,  setHireMeHovered]  = useState(false)
  const [logoHovered,    setLogoHovered]    = useState(false)

  // Stagger-safe mount: let first paint happen before triggering transitions
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Scroll detection
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '14px 48px' : '24px 48px',
        background: scrolled ? 'rgba(247,242,233,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(17,13,7,0.07)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'padding 0.4s cubic-bezier(0.4,0,0.2,1), background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease, transform 0.5s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ease',
        transform: mounted ? 'translateY(0)' : 'translateY(-24px)',
        opacity: mounted ? 1 : 0,
      }}
    >
      {/* ── Logo ── */}
      <a
        href="#"
        style={{ textDecoration: 'none' }}
        onMouseEnter={() => setLogoHovered(true)}
        onMouseLeave={() => setLogoHovered(false)}
      >
        <div style={{
          fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700,
          color: 'var(--ink)', letterSpacing: '-0.02em',
          transform: logoHovered ? 'scale(1.04)' : 'scale(1)',
          transition: 'transform 0.25s cubic-bezier(0.4,0,0.2,1)',
        }}>
          Wassim
          <span style={{
            color: 'var(--gold)',
            display: 'inline-block',
            animation: 'navDotPulse 4s ease-in-out infinite',
          }}>.</span>
          lz
        </div>
      </a>

      {/* ── Links + CTA ── */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {NAV_LINKS.map(([label, href], i) => {
          const sectionId = href.replace('#', '')
          const isActive  = activeSection === sectionId
          const isHovered = hoveredLink === label
          const lit       = isActive || isHovered

          return (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500,
                color: lit ? 'var(--gold)' : 'var(--ink-soft)',
                textDecoration: 'none', letterSpacing: '0.04em',
                position: 'relative', paddingBottom: '4px',
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(-10px)',
                transition: `color 0.25s ease, opacity 0.45s ease ${0.06 * i + 0.15}s, transform 0.45s cubic-bezier(0.4,0,0.2,1) ${0.06 * i + 0.15}s`,
              }}
              onMouseEnter={() => setHoveredLink(label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {label}
              {/* Animated underline */}
              <span style={{
                position: 'absolute', bottom: 0, left: 0,
                height: '1px', background: 'var(--gold)',
                width: lit ? '100%' : '0%',
                transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
                transformOrigin: 'left',
              }} />
            </a>
          )
        })}

        {/* ── HIRE ME ── */}
        <a
          href="#contact"
          style={{
            fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 500,
            letterSpacing: '0.1em', padding: '9px 22px',
            background: hireMeHovered ? 'var(--gold)' : 'var(--ink)',
            color: 'var(--cream)', textDecoration: 'none',
            transform: hireMeHovered ? 'translateY(-2px)' : 'translateY(0)',
            boxShadow: hireMeHovered
              ? '0 10px 28px rgba(184,134,42,0.38)'
              : '0 0px 0px rgba(0,0,0,0)',
            opacity: mounted ? 1 : 0,
            transition: `background 0.25s ease, transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s ease, opacity 0.45s ease ${0.06 * NAV_LINKS.length + 0.15}s`,
          }}
          onMouseEnter={() => setHireMeHovered(true)}
          onMouseLeave={() => setHireMeHovered(false)}
        >
          HIRE ME
        </a>
      </div>
    </nav>
  )
}
