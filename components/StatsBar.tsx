'use client'

import { useI18n } from '@/lib/i18n'

export default function StatsBar() {
  const { t } = useI18n()
  return (
    <div className="grid-stats" style={{
      background: 'var(--cream-dark)',
      borderTop: '1px solid rgba(17,13,7,0.1)',
      borderBottom: '1px solid rgba(17,13,7,0.1)',
      display: 'grid',
    }}>
      {t.stats.map((s, i) => (
        <div
          key={i}
          style={{
            padding: '40px 32px', textAlign: 'center',
            borderRight: i < 3 ? '1px solid rgba(17,13,7,0.1)' : 'none',
          }}
        >
          <div style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(36px,4vw,56px)',
            fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', lineHeight: 1,
          }}>
            {s.value}
          </div>
          <div style={{
            fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 400,
            color: 'var(--ink-dim)', letterSpacing: '0.08em', marginTop: '8px',
          }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  )
}
