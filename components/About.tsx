'use client'

import DecryptedText from './DecryptedText'
import { useI18n } from '@/lib/i18n'

export default function About() {
  const { t } = useI18n()
  return (
    <section className="grid-aside" style={{
      padding: 'clamp(72px,10vw,120px) var(--gutter)', background: 'var(--ink)',
      display: 'grid', alignItems: 'center',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>
            <DecryptedText
              key={t.about.kicker}
              text={t.about.kicker}
              animateOn="view"
              speed={50}
              maxIterations={15}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              revealDirection="start"
              loop
              loopInterval={4000}
            />
          </span>
        </div>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(36px,4.5vw,64px)',
          fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--cream)',
        }}>
          <DecryptedText
            key={t.about.titleLine1}
            text={t.about.titleLine1}
            animateOn="view"
            speed={38}
            maxIterations={20}
            characters="!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            revealDirection="start"
            delay={0}
            loop
            loopInterval={4000}
          />
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>
            <DecryptedText
              key={t.about.titleLine2}
              text={t.about.titleLine2}
              animateOn="view"
              speed={38}
              maxIterations={24}
              characters="!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              revealDirection="start"
              delay={700}
              loop
              loopInterval={4000}
            />
          </em>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '32px' }}>
          <div style={{
            fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '12px',
          }}>
            {t.about.role1Label}
          </div>
          <p style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(16px,2vw,22px)',
            fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)',
            lineHeight: 1.5, letterSpacing: '-0.01em',
          }}>
            {t.about.role1Quote}
          </p>
        </div>

        <div style={{ borderLeft: '3px solid rgba(184,134,42,0.4)', paddingLeft: '32px' }}>
          <div style={{
            fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '12px',
          }}>
            {t.about.role2Label}
          </div>
          <p style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(16px,2vw,22px)',
            fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)',
            lineHeight: 1.5, letterSpacing: '-0.01em',
          }}>
            {t.about.role2Quote}
          </p>
        </div>
      </div>
    </section>
  )
}
