'use client'

import { SKILL_DOMAINS } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '120px 48px', background: 'var(--cream-dark)' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
        <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>SKILLS</span>
      </div>
      <h2 style={{
        fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
        fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '64px',
      }}>
        The<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>arsenal.</em>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'rgba(17,13,7,0.1)' }}>
        {SKILL_DOMAINS.map((domain, i) => (
          <div
            key={i}
            style={{
              background: 'var(--cream-dark)', padding: '40px 32px',
              borderBottom: '3px solid transparent',
              transition: 'border-color 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderBottomColor = 'var(--gold)'
              e.currentTarget.style.background = 'var(--cream)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderBottomColor = 'transparent'
              e.currentTarget.style.background = 'var(--cream-dark)'
            }}
          >
            <div style={{ fontFamily: 'var(--display)', fontSize: '13px', fontStyle: 'italic', color: 'var(--gold)', marginBottom: '20px' }}>
              {domain.n}
            </div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '20px', lineHeight: 1.1 }}>
              {domain.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {domain.tags.map(tag => (
                <span
                  key={tag}
                  style={{
                    fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 400,
                    padding: '4px 10px', background: 'rgba(17,13,7,0.07)',
                    color: 'var(--ink-soft)', letterSpacing: '0.02em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
        {/* Empty cell to complete the 4-col grid */}
        <div style={{ background: 'var(--cream-dark)', padding: '40px 32px' }} />
      </div>
    </section>
  )
}
