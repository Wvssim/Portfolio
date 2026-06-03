'use client'

import { useState } from 'react'
import { LANGS } from '@/lib/translations'
import { useI18n } from '@/lib/i18n'

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        padding: '3px',
        border: '1px solid rgba(184,134,42,0.35)',
        borderRadius: '999px',
      }}
    >
      {LANGS.map(({ code, label }) => {
        const active = lang === code
        const lit = active || hovered === code
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            onMouseEnter={() => setHovered(code)}
            onMouseLeave={() => setHovered(null)}
            aria-pressed={active}
            style={{
              fontFamily: 'var(--body)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.06em',
              padding: '5px 11px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              background: active ? 'var(--gold)' : 'transparent',
              color: active ? 'var(--cream)' : lit ? 'var(--gold)' : 'var(--ink-soft)',
              transition: 'background 0.25s ease, color 0.25s ease',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
