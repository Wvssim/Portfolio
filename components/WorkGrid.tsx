'use client'

import { useState } from 'react'
import { WORKS } from '@/lib/data'
import { useI18n } from '@/lib/i18n'

export default function WorkGrid() {
  const { t } = useI18n()
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <section id="work" style={{ padding: 'clamp(72px,10vw,120px) var(--gutter)', background: 'var(--cream)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>{t.work.kicker}</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1,
          }}>
            {t.work.titleLine1}<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>{t.work.titleLine2}</em>
          </h2>
        </div>
      </div>

      <div className="grid-work" style={{ display: 'grid', gap: '2px' }}>
        {WORKS.map((w, i) => {
          const wt = t.work.items[i]
          return (
          <div
            key={i}
            className="hover-lift"
            style={{
              background: w.bg, padding: 'clamp(28px,5vw,48px)', cursor: 'pointer',
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
                  {wt.cat} — {w.year}
                </span>
                <span style={{
                  fontSize: '10px', letterSpacing: '0.06em', color: w.accent,
                  padding: '3px 10px', border: `1px solid ${w.accent}44`, fontWeight: 500, whiteSpace: 'nowrap',
                }}>
                  {wt.badge}
                </span>
              </div>
              <h3 style={{
                fontFamily: 'var(--display)', fontSize: '32px', fontWeight: 700,
                color: '#F7F2E9', marginTop: '12px', letterSpacing: '-0.02em', lineHeight: 1.1,
              }}>
                {wt.title ?? w.title}
              </h3>
            </div>

            <div>
              <p style={{
                fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 300,
                color: 'rgba(247,242,233,0.7)', lineHeight: 1.6, maxWidth: '360px', marginBottom: '24px',
              }}>
                {wt.desc}
              </p>
              {w.link ? (
                <a
                  href={w.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '12px', color: w.accent, letterSpacing: '0.1em',
                    fontWeight: 500, textDecoration: 'none',
                    transition: 'gap 0.25s ease, opacity 0.25s ease',
                    opacity: hovered === i ? 1 : 0.75,
                  }}
                >
                  {w.link.includes('github.com') ? t.work.viewGithub : t.work.visitSite}
                  <span style={{
                    display: 'inline-block',
                    transform: hovered === i ? 'translateX(4px)' : 'translateX(0)',
                    transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
                  }}>→</span>
                </a>
              ) : (
                <span style={{ fontSize: '12px', color: 'rgba(247,242,233,0.25)', letterSpacing: '0.1em', fontWeight: 500 }}>
                  {t.work.private}
                </span>
              )}
            </div>
          </div>
          )
        })}
      </div>
    </section>
  )
}
