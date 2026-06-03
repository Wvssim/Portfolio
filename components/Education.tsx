'use client'

import { useState } from 'react'
import { CERTS } from '@/lib/data'
import { useI18n } from '@/lib/i18n'
import SpotlightCard from './SpotlightCard'
import CertModal from './CertModal'

const SCHOOLS = [
  { school: 'EMSI Casablanca', years: '2024 → 2026' },
  { school: 'CFPM Skhirat',    years: '2023 → 2024' },
]

const kickerRow = (label: string) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
    <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
    <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>{label}</span>
  </div>
)

const heading: React.CSSProperties = {
  fontFamily: 'var(--display)', fontSize: 'clamp(36px,5vw,64px)',
  fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '48px',
}

export default function Education() {
  const { t } = useI18n()
  const [openCert, setOpenCert] = useState<number | null>(null)
  return (
    <section style={{ padding: 'clamp(72px,10vw,120px) var(--gutter)', background: 'var(--cream)' }}>

      {/* ── Education ── */}
      {kickerRow(t.education.kicker)}
      <h2 style={heading}>
        {t.education.titleLine1}<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>{t.education.titleLine2}</em>
      </h2>
      <div className="grid-edu" style={{ display: 'grid' }}>
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
              {t.education.schools[i]?.degree ?? e.school}
            </div>
          </div>
        ))}
      </div>

      {/* ── Certifications ── */}
      <div style={{ marginTop: 'clamp(72px,9vw,112px)' }}>
        {kickerRow(t.education.certKicker)}
        <h2 style={heading}>
          {t.education.certTitleLine1}<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>{t.education.certTitleLine2}</em>
        </h2>
        <div className="grid-certs" style={{ display: 'grid', gap: '1px', background: 'rgba(184,134,42,0.18)' }}>
          {CERTS.map((c, i) => (
            <SpotlightCard
              key={i}
              spotColor="rgba(212,168,80,0.4)"
              onClick={() => c.image && setOpenCert(i)}
              role="button"
              tabIndex={0}
              aria-label={c.title}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && c.image) { e.preventDefault(); setOpenCert(i) }
              }}
              style={{
                background: 'var(--ink)', padding: '24px', minHeight: '150px',
                display: 'flex', flexDirection: 'column', cursor: c.image ? 'pointer' : 'default',
              }}
            >
              {c.image && (
                <span aria-hidden="true" className="cert-expand" style={{
                  position: 'absolute', top: '18px', right: '18px', zIndex: 1,
                  color: 'var(--gold)', fontSize: '14px', lineHeight: 1,
                }}>⤢</span>
              )}
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: '16px', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.28, marginBottom: '12px', paddingRight: '22px' }}>
                  {c.title}
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <div style={{ fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 400, color: 'rgba(247,242,233,0.6)', marginBottom: '3px' }}>
                    {c.issuer}
                  </div>
                  <div style={{ fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 300, color: 'rgba(247,242,233,0.34)', letterSpacing: '0.06em' }}>
                    {c.date}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <CertModal certs={CERTS} openIndex={openCert} onChange={setOpenCert} viewCertLabel={t.education.viewCert} />

    </section>
  )
}
