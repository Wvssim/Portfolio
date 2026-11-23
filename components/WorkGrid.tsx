'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { WORKS } from '@/lib/data'
import { useI18n } from '@/lib/i18n'
import { BlurIn } from './RevealAnimations'

export default function WorkGrid() {
  const { t } = useI18n()
  const [hovered, setHovered] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="work"
      style={{
        padding: 'clamp(72px,10vw,120px) var(--gutter)',
        background: 'var(--cream)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BlurIn>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '32px',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px',
              }}
            >
              <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
              <span
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.25em',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                {t.work.kicker}
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--display)',
                fontSize: 'clamp(36px,5vw,64px)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              {t.work.titleLine1}
              <br />
              <em style={{ fontStyle: 'italic', fontWeight: 300 }}>
                {t.work.titleLine2}
              </em>
            </h2>
          </div>
        </div>
      </BlurIn>

      <motion.div
        className="grid-work"
        style={{
          display: 'grid',
          gap: '2px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {WORKS.map((w, i) => {
          const wt = t.work.items[i]
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="hover-lift"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: w.bg,
                padding: 'clamp(28px,5vw,48px)',
                cursor: 'pointer',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                transform: hovered === i ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow:
                  hovered === i
                    ? '0 20px 40px rgba(0,0,0,0.2)'
                    : '0 0px 0px rgba(0,0,0,0)',
                transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              {/* Ghost number */}
              <motion.div
                style={{
                  position: 'absolute',
                  right: '32px',
                  top: '32px',
                  fontFamily: 'var(--display)',
                  fontSize: '80px',
                  fontWeight: 900,
                  color: 'rgba(255,255,255,0.05)',
                  lineHeight: 1,
                }}
                animate={{ opacity: hovered === i ? 0.15 : 0.05 }}
                transition={{ duration: 0.3 }}
              >
                {w.num}
              </motion.div>

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '4px',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      color: w.accent,
                      fontWeight: 500,
                    }}
                  >
                    {wt.cat} — {w.year}
                  </span>
                  <motion.span
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.06em',
                      color: w.accent,
                      padding: '3px 10px',
                      border: `1px solid ${w.accent}44`,
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                    }}
                    animate={{
                      borderColor: hovered === i ? w.accent : `${w.accent}44`,
                      backgroundColor: hovered === i ? `${w.accent}11` : 'transparent',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {wt.badge}
                  </motion.span>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#F7F2E9',
                    marginTop: '12px',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {wt.title ?? w.title}
                </h3>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: '14px',
                    fontWeight: 300,
                    color: 'rgba(247,242,233,0.7)',
                    lineHeight: 1.6,
                    maxWidth: '360px',
                    marginBottom: '24px',
                  }}
                >
                  {wt.desc}
                </p>
                {w.link && (
                  <motion.a
                    href={w.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      fontWeight: 500,
                      letterSpacing: '0.08em',
                      color: 'rgba(247,242,233,0.8)',
                      textDecoration: 'none',
                    }}
                    animate={{
                      x: hovered === i ? 4 : 0,
                      color: hovered === i ? '#F7F2E9' : 'rgba(247,242,233,0.8)',
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {t.work.explore} →
                  </motion.a>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
