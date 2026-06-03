'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'

export default function CTA() {
  const { t } = useI18n()
  const [hovered, setHovered] = useState(false)
  return (
    <section id="contact" style={{
      padding: 'clamp(88px,12vw,140px) var(--gutter)', background: 'var(--cream)', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(var(--cream-dark),transparent 70%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>{t.cta.kicker}</span>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(48px,8vw,100px)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, marginBottom: '40px',
        }}>
          {t.cta.titleLine1}<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>{t.cta.titleLine2}</em>
        </h2>

        <p style={{
          fontFamily: 'var(--body)', fontSize: '17px', fontWeight: 300,
          color: 'var(--ink-soft)', maxWidth: '480px', margin: '0 auto 12px', lineHeight: 1.65,
        }}>
          {t.cta.line1}
        </p>
        <p style={{
          fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 300,
          color: 'var(--ink-dim)', marginBottom: '52px',
        }}>
          {t.cta.line2}
        </p>

        <a
          href="mailto:lazimos.wa@gmail.com"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '14px',
            fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em',
            padding: '20px 48px',
            background: hovered ? 'var(--gold)' : 'var(--ink)',
            color: 'var(--cream)', textDecoration: 'none',
            transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
            boxShadow: hovered ? '0 16px 40px rgba(184,134,42,0.4)' : '0 0 0 rgba(0,0,0,0)',
            transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {t.cta.button}
          <span style={{
            fontSize: '20px', display: 'inline-block',
            transform: hovered ? 'translateX(6px)' : 'translateX(0)',
            transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          }}>→</span>
        </a>
      </div>
    </section>
  )
}
