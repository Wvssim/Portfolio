'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILL_DOMAINS } from '@/lib/data'
import { useI18n } from '@/lib/i18n'
import { BlurIn, ScaleIn } from './RevealAnimations'

export default function Skills() {
  const { t } = useI18n()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(72px,10vw,120px) var(--gutter)',
        background: 'var(--cream-dark)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <BlurIn>
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
            {t.skills.kicker}
          </span>
        </div>
      </BlurIn>

      <BlurIn delay={0.1}>
        <h2
          style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(36px,5vw,64px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            marginBottom: '64px',
          }}
        >
          {t.skills.titleLine1}
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300 }}>
            {t.skills.titleLine2}
          </em>
        </h2>
      </BlurIn>

      <motion.div
        className="grid-skills"
        style={{
          display: 'grid',
          gap: '1px',
          background: 'rgba(17,13,7,0.1)',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {SKILL_DOMAINS.map((domain, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              background: 'var(--cream-dark)',
              padding: '40px 32px',
              borderBottom:
                hoveredIndex === i ? '3px solid var(--gold)' : '3px solid transparent',
              backgroundColor:
                hoveredIndex === i ? 'var(--cream)' : 'var(--cream-dark)',
              transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
              cursor: 'pointer',
              transform: hoveredIndex === i ? 'translateY(-4px)' : 'translateY(0)',
              boxShadow:
                hoveredIndex === i
                  ? '0 8px 24px rgba(184,134,42,0.15)'
                  : '0 0 0 rgba(0,0,0,0)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--display)',
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'var(--gold)',
                marginBottom: '20px',
              }}
            >
              {domain.n}
            </div>
            <h3
              style={{
                fontFamily: 'var(--display)',
                fontSize: '22px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: '20px',
                lineHeight: 1.1,
              }}
            >
              {t.skills.titles[i] ?? domain.title}
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {domain.tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 }}
                  style={{
                    fontFamily: 'var(--body)',
                    fontSize: '11px',
                    fontWeight: 400,
                    padding: '4px 10px',
                    background: 'rgba(17,13,7,0.07)',
                    color: 'var(--ink-soft)',
                    letterSpacing: '0.02em',
                    borderRadius: '2px',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
        {/* Empty cell */}
        <div style={{ background: 'var(--cream-dark)', padding: '40px 32px' }} />
      </motion.div>
    </section>
  )
}
