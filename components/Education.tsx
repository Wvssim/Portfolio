'use client'

import { CERTS } from '@/lib/data'

const SCHOOLS = [
  { school: 'EMSI Casablanca', degree: 'Engineering degree — DSI', years: '2024 → 2026' },
  { school: 'CFPM Skhirat',    degree: 'Full-Stack Technician',    years: '2023 → 2024' },
]

export default function Education() {
  return (
    <section style={{ padding: '120px 48px', background: 'var(--cream)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>

        {/* Education */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>EDUCATION</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '48px',
          }}>
            Where I<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>studied.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {SCHOOLS.map((e, i) => (
              <div
                key={i}
                style={{ borderLeft: `3px solid ${i === 0 ? 'var(--gold)' : 'rgba(184,134,42,0.3)'}`, paddingLeft: '24px' }}
              >
                <div style={{ fontFamily: 'var(--body)', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--ink-dim)', marginBottom: '6px' }}>
                  {e.years}
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: '20px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '4px' }}>
                  {e.school}
                </div>
                <div style={{ fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 300, color: 'var(--ink-soft)' }}>
                  {e.degree}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>CERTIFICATIONS</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '48px',
          }}>
            Things I<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>earned.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(17,13,7,0.1)' }}>
            {CERTS.map((c, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--cream)', padding: '24px',
                  borderBottom: '2px solid transparent',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderBottomColor = 'var(--gold)'
                  e.currentTarget.style.background = 'var(--cream-dark)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                  e.currentTarget.style.background = 'var(--cream)'
                }}
              >
                <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '6px' }}>
                  {c.title}
                </div>
                <div style={{ fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 300, color: 'var(--ink-dim)' }}>
                  {c.issuer} · {c.platform}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
