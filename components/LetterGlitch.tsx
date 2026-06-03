'use client'

import { useEffect, useRef } from 'react'

interface Props {
  text?: string
  glitchSpeed?: number
  centerVignette?: boolean
  outerVignette?: boolean
  smooth?: boolean
  speed?: number
  colors?: string[]
  // position of text anchor within the canvas (0–1)
  textX?: number
  textY?: number
  fontSize?: string   // e.g. '36vw'
  fontWeight?: string
  fontFamily?: string
  style?: React.CSSProperties
}

export default function LetterGlitch({
  text,
  glitchSpeed = 50,
  centerVignette = false,
  outerVignette = false,
  speed = 10,
  colors = ['#2b4539', '#61dca3', '#61b3dc'],
  textX = 0.5,
  textY = 0.5,
  fontSize = '30vw',
  fontWeight = '900',
  fontFamily = 'sans-serif',
  style,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef   = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!

    const CELL = 5

    type Cell = { ci: number; alpha: number; target: number; ttl: number }
    let cells: Cell[] = []

    const init = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      const total = Math.ceil(canvas.width / CELL) * Math.ceil(canvas.height / CELL)
      cells = Array.from({ length: total }, (_, i) => ({
        ci: i % colors.length,
        alpha: Math.random() * 0.25,
        target: Math.random() * 0.25,
        ttl: Math.random() * 600,
      }))
    }
    init()

    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    let last  = 0
    let accum = 0

    const tick = (now: number) => {
      const dt = now - last; last = now
      accum += dt
      if (accum < 1000 / speed) { animRef.current = requestAnimationFrame(tick); return }
      accum = 0

      const { width, height } = canvas
      const cols = Math.ceil(width / CELL)
      ctx.clearRect(0, 0, width, height)

      // ── draw glitch grid ──────────────────────────────────────────────────
      cells.forEach((cell, idx) => {
        cell.ttl -= dt
        if (cell.ttl <= 0) {
          cell.ci     = Math.floor(Math.random() * colors.length)
          cell.target = Math.random() < 0.25
            ? 0.75 + Math.random() * 0.25   // spike
            : Math.random() * 0.25
          cell.ttl    = (Math.random() * 400) / glitchSpeed + 20
        }
        cell.alpha += (cell.target - cell.alpha) * 0.12
        const col = idx % cols
        const row = Math.floor(idx / cols)
        ctx.fillStyle  = colors[cell.ci]
        ctx.globalAlpha = cell.alpha
        ctx.fillRect(col * CELL, row * CELL, CELL - 1, CELL - 1)
      })

      // ── clip to text shape ────────────────────────────────────────────────
      if (text) {
        const fs = fontSize.endsWith('vw')
          ? (parseFloat(fontSize) / 100) * window.innerWidth
          : parseFloat(fontSize)

        ctx.globalCompositeOperation = 'destination-in'
        ctx.globalAlpha = 1
        ctx.font        = `${fontWeight} ${fs}px ${fontFamily}`
        ctx.textAlign   = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle   = '#fff'
        ctx.fillText(text, width * textX, height * textY)
        ctx.globalCompositeOperation = 'source-over'
      }

      // ── vignettes ─────────────────────────────────────────────────────────
      if (outerVignette) {
        ctx.globalAlpha = 1
        const g = ctx.createRadialGradient(width/2, height/2, height*0.25, width/2, height/2, height)
        g.addColorStop(0, 'rgba(0,0,0,0)')
        g.addColorStop(1, 'rgba(0,0,0,0.85)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }
      if (centerVignette) {
        ctx.globalAlpha = 1
        const g = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, height*0.55)
        g.addColorStop(0, 'rgba(0,0,0,0.75)')
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.fillRect(0, 0, width, height)
      }

      animRef.current = requestAnimationFrame(tick)
    }

    animRef.current = requestAnimationFrame(tick)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [text, colors, speed, glitchSpeed, centerVignette, outerVignette,
      fontSize, fontWeight, fontFamily, textX, textY])

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
