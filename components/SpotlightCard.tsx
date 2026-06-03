'use client'

import { useRef, type CSSProperties, type ReactNode } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  style?: CSSProperties
  /** colour of the cursor-following glow */
  spotColor?: string
}

/**
 * ReactBits-style spotlight card: a radial glow tracks the cursor inside the
 * card. The glow position is written straight to CSS custom properties via a
 * ref (no React re-render on mouse move), and visibility is handled in CSS
 * (`:hover`), so it stays cheap even with many cards on screen.
 */
export default function SpotlightCard({ children, style, spotColor = 'rgba(184,134,42,0.28)', ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - r.left}px`)
    el.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <div
      {...rest}
      ref={ref}
      className="spotlight-card"
      onMouseMove={onMove}
      style={{ ['--spot' as string]: spotColor, ...style }}
    >
      <span className="spotlight-card__glow" aria-hidden="true" />
      {children}
    </div>
  )
}
