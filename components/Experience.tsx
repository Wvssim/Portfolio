'use client'

import { useState } from 'react'
import { EXPERIENCES } from '@/lib/data'

export default function Experience() {
  const [active, setActive] = useState(0)
  const xp = EXPERIENCES[active]

  return (
    <section id="experience" style={{
      padding: '120px 48px', background: 'var(--ink)',
      display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'center',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>EXPERIENCE</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(32px,4vw,52px)',
          fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--cream)',
        }}>
          Where I&apos;ve<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>worked.</em>
        </h2>
        <div style={{ display: 'flex', gap: '8px', marginTop: '40px' }}>
          {EXPERIENCES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? '32px' : '8px', height: '4px',
                background: i === active ? 'var(--gold)' : 'rgba(247,242,233,0.2)',
                border: 'none', cursor: 'pointer', transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <div>
        <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '32px', marginBottom: '32px' }}>
          <div style={{ fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', color: 'var(--gold)', marginBottom: '8px' }}>
            {xp.period}
          </div>
          <h3 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(18px,2.5vw,28px)',
            fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '6px',
          }}>
            {xp.role}
          </h3>
          <div style={{ fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 400, color: 'rgba(247,242,233,0.5)', marginBottom: '20px' }}>
            {xp.company}
          </div>
          <p style={{ fontFamily: 'var(--body)', fontSize: '15px', fontWeight: 300, color: 'rgba(247,242,233,0.75)', lineHeight: 1.65 }}>
            {xp.desc}
          </p>
        </div>
        <div style={{ paddingLeft: '32px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {xp.tags.map(tag => (
            <span
              key={tag}
              style={{
                fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 400,
                padding: '4px 12px', border: '1px solid rgba(247,242,233,0.15)',
                color: 'rgba(247,242,233,0.5)', letterSpacing: '0.05em',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
