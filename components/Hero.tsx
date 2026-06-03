'use client'

import { useState, useEffect } from 'react'
import LetterGlitch from './LetterGlitch'
import { useI18n } from '@/lib/i18n'

export default function Hero() {
  const { t, lang } = useI18n()
  const isAr = lang === 'ar'
  const [viewHovered, setViewHovered] = useState(false)
  const [ghHovered,   setGhHovered]   = useState(false)
  const [liHovered,   setLiHovered]   = useState(false)
  const [cvHovered,   setCvHovered]   = useState(false)
  const [isMobile,    setIsMobile]    = useState(false)

  // Reposition the </> backdrop on phones: centred + larger instead of
  // anchored to the right (which looks shifted on narrow screens).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 700px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return (
    <section className="hero" style={{
      minHeight: 'calc(100vh - 131px)', display: 'flex', flexDirection: 'column',
      paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)',
      position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 70% 40%, var(--cream-dark), var(--cream))',
    }}>
      {/* Glitch canvas — fills hero, clipped to </> shape */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: isMobile ? 0.5 : 0.8 }}>
        <LetterGlitch
          text="</>"
          colors={['#2b4539', '#61dca3', '#61b3dc']}
          speed={10}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          textX={isMobile ? 0.5 : (isAr ? 0.22 : 0.78)}
          textY={isMobile ? 0.5 : 0.57}
          fontSize={isMobile ? '64vw' : '28vw'}
          fontWeight="900"
          fontFamily="DM Sans, sans-serif"
        />
      </div>

      {/* Top-right decoration */}
      <div style={{
        position: 'absolute', top: isAr ? '80px' : '48px',
        right: isAr ? 'auto' : 'var(--gutter)',
        left:  isAr ? 'var(--gutter)' : 'auto',
        display: 'flex', flexDirection: 'column',
        alignItems: isAr ? 'flex-start' : 'flex-end', gap: '8px',
        animation: 'fadeIn 1s ease 0.5s both',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--ink-dim)', fontWeight: 500 }}>EMSI · 2026</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--gold)', opacity: 0.5 }} />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <div className="animate" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>
            {t.hero.tagline}
          </span>
        </div>

        <h1
          className="animate anim-delay-1"
          style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(56px,8vw,112px)',
            fontWeight: 700, lineHeight: isAr ? 1.1 : 0.95, letterSpacing: '-0.03em',
            color: 'var(--ink)', marginBottom: '8px',
          }}
        >
          {t.hero.titlePre}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>{t.hero.titleEm}</em> {t.hero.titlePost}<br />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            .
            <svg
              style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '12px' }}
              viewBox="0 0 300 12" fill="none" preserveAspectRatio="none"
            >
              <path d="M2 8 Q75 2 150 8 Q225 14 298 6" stroke="var(--rust)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p
          className="animate anim-delay-2"
          style={{
            fontFamily: 'var(--body)', fontSize: '18px', fontWeight: 300,
            color: 'var(--ink-soft)', maxWidth: '520px', lineHeight: 1.65,
            marginTop: '28px', marginBottom: '28px',
          }}
        >
          {t.hero.p1}
          <a
            href="https://swhnegoce.ma"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--gold)', textDecoration: 'none',
              borderBottom: '1px solid var(--gold)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            {t.hero.link}
          </a>
          {t.hero.p2}
        </p>

        <div className="animate anim-delay-3" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          {/* Primary CTA */}
          <a
            href="#work"
            onMouseEnter={() => setViewHovered(true)}
            onMouseLeave={() => setViewHovered(false)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              padding: '16px 36px',
              background: viewHovered ? 'var(--gold)' : 'var(--ink)',
              color: 'var(--cream)', textDecoration: 'none',
              transform: viewHovered ? 'translateY(-3px)' : 'translateY(0)',
              boxShadow: viewHovered ? '0 12px 32px rgba(184,134,42,0.38)' : '0 0 0 rgba(0,0,0,0)',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {t.hero.viewWork}
            <span style={{
              fontSize: '18px',
              display: 'inline-block',
              transform: viewHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
            }}>→</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Wvssim"
            target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setGhHovered(true)}
            onMouseLeave={() => setGhHovered(false)}
            style={{
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              color: ghHovered ? 'var(--ink)' : 'var(--ink-soft)',
              textDecoration: 'none', paddingBottom: '3px', position: 'relative',
              transition: 'color 0.25s ease',
            }}
          >
            GitHub
            <span style={{
              position: 'absolute', bottom: 0, left: 0, height: '1px',
              background: 'var(--ink)',
              width: ghHovered ? '100%' : '0%',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/wassim-lazim-124aa935b"
            target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setLiHovered(true)}
            onMouseLeave={() => setLiHovered(false)}
            style={{
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              color: liHovered ? 'var(--ink)' : 'var(--ink-soft)',
              textDecoration: 'none', paddingBottom: '3px', position: 'relative',
              transition: 'color 0.25s ease',
            }}
          >
            LinkedIn
            <span style={{
              position: 'absolute', bottom: 0, left: 0, height: '1px',
              background: 'var(--ink)',
              width: liHovered ? '100%' : '0%',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </a>

          {/* CV / Résumé */}
          <a
            href="/Wassim_Lazim_CV.pdf"
            target="_blank" rel="noopener noreferrer"
            onMouseEnter={() => setCvHovered(true)}
            onMouseLeave={() => setCvHovered(false)}
            style={{
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              color: cvHovered ? 'var(--gold)' : 'var(--ink-soft)',
              textDecoration: 'none', paddingBottom: '3px', position: 'relative',
              transition: 'color 0.25s ease',
            }}
          >
            {t.hero.cv}
            <span style={{
              position: 'absolute', bottom: 0, left: 0, height: '1px',
              background: 'var(--gold)',
              width: cvHovered ? '100%' : '0%',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px',
        right: isAr ? 'auto' : 'var(--gutter)',
        left:  isAr ? 'var(--gutter)' : 'auto',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(var(--ink-dim),transparent)' }} />
        <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', writingMode: 'vertical-rl' }}>{t.hero.scroll}</span>
      </div>
    </section>
  )
}
