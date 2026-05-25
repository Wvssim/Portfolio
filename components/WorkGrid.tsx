'use client'

import { WORKS } from '@/lib/data'

export default function WorkGrid() {
  return (
    <section id="work" style={{ padding: '120px 48px', background: 'var(--cream)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>SELECTED WORK</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1,
          }}>
            Things I&apos;ve<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>shipped.</em>
          </h2>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {WORKS.map((w, i) => (
          <div
            key={i}
            className="hover-lift"
            style={{
              background: w.bg, padding: '48px', cursor: 'pointer',
              minHeight: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              position: 'relative', overflow: 'hidden',
            }}
          >
            {/* Ghost number */}
            <div style={{
              position: 'absolute', right: '32px', top: '32px',
              fontFamily: 'var(--display)', fontSize: '80px', fontWeight: 900,
              color: 'rgba(255,255,255,0.05)', lineHeight: 1,
            }}>
              {w.num}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: w.accent, fontWeight: 500 }}>
                  {w.cat} — {w.year}
                </span>
                <span style={{
                  fontSize: '10px', letterSpacing: '0.06em', color: w.accent,
                  padding: '3px 10px', border: `1px solid ${w.accent}44`, fontWeight: 500, whiteSpace: 'nowrap',
                }}>
                  {w.badge}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 700,
                color: '#F7F2E9', marginTop: '12px', letterSpacing: '-0.02em', lineHeight: 1.1,
              }}>
                {w.title}
              </h3>
            </div>

            <div>
              <p style={{
                fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 300,
                color: 'rgba(247,242,233,0.7)', lineHeight: 1.6, maxWidth: '360px', marginBottom: '24px',
              }}>
                {w.desc}
              </p>
              {w.link ? (
                <a
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '12px', color: w.accent, letterSpacing: '0.1em', fontWeight: 500, textDecoration: 'none' }}
                >
                  {w.link.includes('github.com') ? 'VIEW ON GITHUB →' : 'VISIT SITE →'}
                </a>
              ) : (
                <span style={{ fontSize: '12px', color: 'rgba(247,242,233,0.25)', letterSpacing: '0.1em', fontWeight: 500 }}>
                  PRIVATE PROJECT
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
