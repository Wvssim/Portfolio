'use client'

import { useI18n } from '@/lib/i18n'

export default function NameStamp() {
  const { t, lang } = useI18n()
  const isAr = lang === 'ar'

  // Per-language vertical nudge of the name band
  const marginTop = lang === 'en' ? '-16px' : lang === 'ar' ? '-66px' : '-46px'

  // Arabic glyphs are denser and join up, so the Latin 1px stroke + wide
  // tracking looks far too heavy — thin the outline and drop the spacing.
  const word: React.CSSProperties = {
    fontFamily: 'var(--display)',
    fontSize: 'clamp(42px, 6.5vw, 96px)',
    fontWeight: isAr ? 500 : 700,
    letterSpacing: isAr ? 'normal' : '0.12em',
    // Arabic glyphs have ascenders/descenders that get clipped at line-height 1
    lineHeight: isAr ? 1.15 : 1,
    color: 'transparent',
    WebkitTextStroke: isAr ? '0.6px rgba(184,134,42,0.5)' : '1px rgba(184,134,42,0.45)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  }

  return (
    <div style={{
      background: 'var(--cream)',
      padding: '0px var(--gutter)',
      marginTop,
      position: 'relative',
      display: 'flex', alignItems: 'center', gap: '24px',
      overflow: 'hidden',
    }}>
      <span style={word}>{t.stamp.first}</span>
      <div style={{ flex: 1, height: '1px', background: 'rgba(184,134,42,0.25)' }} />
      <span style={word}>{t.stamp.last}</span>
    </div>
  )
}
