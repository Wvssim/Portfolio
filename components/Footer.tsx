'use client'

import { useState } from 'react'
import { useI18n } from '@/lib/i18n'
import GoldDust from './GoldDust'

const LINKS = [
  { label: 'GitHub',   href: 'https://github.com/Wvssim',                          target: '_blank' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wassim-lazim-124aa935b', target: '_blank' },
  { label: 'CV',       href: '/Wassim_Lazim_CV.pdf',                               target: '_blank' },
  { label: 'Email',    href: 'mailto:lazimos.wa@gmail.com',                        target: '_self'  },
]

export default function Footer() {
  const { t } = useI18n()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <footer className="footer" style={{
      padding: 'clamp(40px,6vw,64px) var(--gutter)', background: 'var(--ink)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid rgba(247,242,233,0.08)',
      position: 'relative', overflow: 'hidden',
    }}>
      <GoldDust />
      <div style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.02em' }}>
        {t.brand.name}<span style={{ color: 'var(--gold)' }}>.</span>{t.brand.suffix}
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', gap: '32px' }}>
        {LINKS.map(({ label, href, target }) => (
          <a
            key={label}
            href={href}
            target={target}
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(label)}
            onMouseLeave={() => setHovered(null)}
            style={{
              fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em',
              color: hovered === label ? 'var(--gold)' : 'rgba(247,242,233,0.4)',
              textDecoration: 'none', position: 'relative', paddingBottom: '3px',
              transition: 'color 0.25s ease',
            }}
          >
            {label === 'Email' ? t.footer.email : label}
            <span style={{
              position: 'absolute', bottom: 0, left: 0, height: '1px',
              background: 'var(--gold)',
              width: hovered === label ? '100%' : '0%',
              transition: 'width 0.3s cubic-bezier(0.4,0,0.2,1)',
            }} />
          </a>
        ))}
      </div>

      <div style={{ position: 'relative', zIndex: 1, fontFamily: 'var(--body)', fontSize: '11px', color: 'rgba(247,242,233,0.3)', letterSpacing: '0.06em' }}>
        © 2026
      </div>
    </footer>
  )
}
