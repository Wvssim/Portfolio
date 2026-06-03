'use client'

import { useEffect, useRef } from 'react'

/**
 * Ambient golden dust — a light canvas particle field of slowly rising,
 * twinkling gold motes. Density scales with size, a few larger motes glow.
 * Honors prefers-reduced-motion (renders one static frame, no loop).
 */
export default function GoldDust() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    type P = {
      x: number; y: number; r: number; vx: number; vy: number
      tw: number; twSpeed: number; light: boolean
    }
    let parts: P[] = []
    let w = 0
    let h = 0

    const build = () => {
      w = canvas.offsetWidth
      h = canvas.offsetHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round((w * h) / 8500)
      parts = Array.from({ length: Math.max(28, Math.min(96, count)) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.5 + Math.random() * 1.7,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -0.04 - Math.random() * 0.2,
        tw: Math.random() * Math.PI * 2,
        twSpeed: 0.004 + Math.random() * 0.016,
        light: Math.random() < 0.35,
      }))
    }
    build()
    const ro = new ResizeObserver(build)
    ro.observe(canvas)

    const draw = (animate: boolean) => {
      ctx.clearRect(0, 0, w, h)
      for (const p of parts) {
        if (animate) {
          p.x += p.vx
          p.y += p.vy
          p.tw += p.twSpeed
          if (p.y < -4) { p.y = h + 4; p.x = Math.random() * w }
          if (p.x < -4) p.x = w + 4
          else if (p.x > w + 4) p.x = -4
        }
        ctx.globalAlpha = 0.12 + (Math.sin(p.tw) * 0.5 + 0.5) * 0.55
        ctx.fillStyle = p.light ? '#D4A850' : '#B8862A'
        ctx.shadowBlur = p.r > 1.4 ? 6 : 0
        ctx.shadowColor = '#B8862A'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.shadowBlur = 0
      ctx.globalAlpha = 1
    }

    if (reduce) {
      draw(false)
      return () => ro.disconnect()
    }
    const loop = () => {
      draw(true)
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  )
}
