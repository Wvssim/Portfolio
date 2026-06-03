'use client'

import { useEffect, useCallback, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { Cert } from '@/lib/data'

interface Props {
  certs: Cert[]
  openIndex: number | null
  onChange: (i: number | null) => void
  viewCertLabel: string
}

/**
 * Full-screen certificate lightbox. Rendered through a portal to <body> so it
 * escapes any transformed ancestor (the section scroll-reveal sets a transform,
 * which would otherwise trap a position:fixed child). Closes on Escape / click
 * outside, navigates with ← →, and locks body scroll while open.
 */
export default function CertModal({ certs, openIndex, onChange, viewCertLabel }: Props) {
  const isOpen = openIndex !== null
  const containerRef = useRef<HTMLDivElement>(null)
  const close = useCallback(() => onChange(null), [onChange])
  const prev = useCallback(
    () => onChange(openIndex === null ? null : (openIndex - 1 + certs.length) % certs.length),
    [openIndex, certs.length, onChange],
  )
  const next = useCallback(
    () => onChange(openIndex === null ? null : (openIndex + 1) % certs.length),
    [openIndex, certs.length, onChange],
  )

  useEffect(() => {
    if (!isOpen) return
    const prevActive = document.activeElement as HTMLElement | null
    const focusables = () =>
      Array.from(containerRef.current?.querySelectorAll<HTMLElement>('button, a[href]') ?? [])

    // Move focus into the dialog
    focusables()[0]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
      else if (e.key === 'Tab') {
        const f = focusables()
        if (f.length === 0) return
        const first = f[0]
        const last = f[f.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      prevActive?.focus?.()
    }
  }, [isOpen, close, prev, next])

  if (!isOpen || typeof document === 'undefined') return null
  const cert = certs[openIndex!]
  const stop = (e: React.MouseEvent) => e.stopPropagation()

  const arrowStyle: React.CSSProperties = {
    position: 'fixed', top: '50%', transform: 'translateY(-50%)',
    width: '52px', height: '52px', borderRadius: '50%',
    border: '1px solid rgba(247,242,233,0.25)', background: 'rgba(17,13,7,0.4)',
    color: 'var(--cream)', fontSize: '24px', cursor: 'pointer', zIndex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'background 0.2s, border-color 0.2s, color 0.2s',
  }
  const hoverArrow = (e: React.MouseEvent<HTMLButtonElement>, on: boolean) => {
    e.currentTarget.style.background = on ? 'var(--gold)' : 'rgba(17,13,7,0.4)'
    e.currentTarget.style.borderColor = on ? 'var(--gold)' : 'rgba(247,242,233,0.25)'
    e.currentTarget.style.color = on ? 'var(--ink)' : 'var(--cream)'
  }

  return createPortal(
    <div
      ref={containerRef}
      className="cert-modal"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(11,9,6,0.86)', backdropFilter: 'blur(10px)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(20px, 5vw, 64px)',
      }}
    >
      {/* Close */}
      <button
        onClick={(e) => { stop(e); close() }}
        aria-label="Close"
        style={{
          position: 'fixed', top: '22px', right: '26px', width: '44px', height: '44px',
          borderRadius: '50%', border: '1px solid rgba(247,242,233,0.25)',
          background: 'transparent', color: 'var(--cream)', fontSize: '22px', cursor: 'pointer',
          zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s, color 0.2s, border-color 0.2s',
        }}
        onMouseEnter={(e) => hoverArrow(e, true)}
        onMouseLeave={(e) => hoverArrow(e, false)}
      >
        ✕
      </button>

      {certs.length > 1 && (
        <>
          <button
            onClick={(e) => { stop(e); prev() }}
            aria-label="Previous"
            style={{ ...arrowStyle, left: 'clamp(12px, 3vw, 36px)' }}
            onMouseEnter={(e) => hoverArrow(e, true)}
            onMouseLeave={(e) => hoverArrow(e, false)}
          >‹</button>
          <button
            onClick={(e) => { stop(e); next() }}
            aria-label="Next"
            style={{ ...arrowStyle, right: 'clamp(12px, 3vw, 36px)' }}
            onMouseEnter={(e) => hoverArrow(e, true)}
            onMouseLeave={(e) => hoverArrow(e, false)}
          >›</button>
        </>
      )}

      {/* Panel — re-keyed so it re-animates on every navigation */}
      <div
        key={openIndex}
        className="cert-modal__panel"
        onClick={stop}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', maxWidth: 'min(980px, 94vw)' }}
      >
        {cert.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={cert.image}
            alt={cert.title}
            style={{
              maxWidth: '100%', maxHeight: '74vh', width: 'auto', height: 'auto',
              objectFit: 'contain', display: 'block',
              border: '1px solid rgba(184,134,42,0.35)',
              boxShadow: '0 40px 90px -30px rgba(0,0,0,0.7)',
            }}
          />
        )}
        <div style={{ textAlign: 'center', maxWidth: '620px' }}>
          <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(18px,2.4vw,26px)', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
            {cert.title}
          </div>
          <div style={{ fontFamily: 'var(--body)', fontSize: '13px', color: 'rgba(247,242,233,0.55)', marginTop: '8px', letterSpacing: '0.04em' }}>
            {cert.issuer} · {cert.date}
          </div>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block', marginTop: '16px', fontFamily: 'var(--body)',
                fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em',
                color: 'var(--gold-light)', textDecoration: 'none', borderBottom: '1px solid var(--gold)',
                paddingBottom: '2px',
              }}
            >
              {viewCertLabel}
            </a>
          )}
          <div style={{ fontFamily: 'var(--body)', fontSize: '11px', color: 'rgba(247,242,233,0.3)', marginTop: '18px', letterSpacing: '0.1em' }}>
            {openIndex! + 1} / {certs.length}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
