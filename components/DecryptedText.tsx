'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

interface Props {
  text: string
  speed?: number
  maxIterations?: number
  characters?: string
  className?: string
  parentClassName?: string
  encryptedClassName?: string
  animateOn?: 'hover' | 'view' | 'click'
  clickMode?: 'once' | 'toggle'
  revealDirection?: 'start' | 'end' | 'center' | 'random'
  sequential?: boolean
  useOriginalCharsOnly?: boolean
  delay?: number
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%'

export default function DecryptedText({
  text,
  speed = 40,
  maxIterations = 20,
  characters = DEFAULT_CHARS,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  delay = 0,
}: Props) {
  const [displayText, setDisplayText]   = useState(text)
  const [revealed,    setRevealed]      = useState<Set<number>>(new Set())
  const intervalRef   = useRef<ReturnType<typeof setInterval> | null>(null)
  const iterRef       = useRef(0)
  const hasAnimated   = useRef(false)
  const shuffleRef    = useRef<number[]>([])
  const containerRef  = useRef<HTMLSpanElement>(null)

  const randChar = useCallback(() => {
    const pool = useOriginalCharsOnly ? text : characters
    return pool[Math.floor(Math.random() * pool.length)]
  }, [characters, useOriginalCharsOnly, text])

  const getRevealed = useCallback((iter: number): Set<number> => {
    const count = Math.round((iter / maxIterations) * text.length)
    const s = new Set<number>()
    if (revealDirection === 'start') {
      for (let i = 0; i < count; i++) s.add(i)
    } else if (revealDirection === 'end') {
      for (let i = text.length - 1; i >= text.length - count; i--) s.add(i)
    } else if (revealDirection === 'center') {
      const mid = Math.floor(text.length / 2)
      for (let i = 0; i < count; i++) {
        const half = Math.floor(i / 2)
        s.add(i % 2 === 0 ? mid - half : mid + half + 1)
      }
    } else {
      shuffleRef.current.slice(0, count).forEach(i => s.add(i))
    }
    return s
  }, [maxIterations, text.length, revealDirection])

  const start = useCallback(() => {
    if (intervalRef.current) return
    iterRef.current = 0
    if (revealDirection === 'random') {
      const all = Array.from({ length: text.length }, (_, i) => i)
      for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]]
      }
      shuffleRef.current = all
    }

    intervalRef.current = setInterval(() => {
      iterRef.current++
      const rev = getRevealed(iterRef.current)
      setRevealed(new Set(rev))
      setDisplayText(
        text.split('').map((ch, i) =>
          ch === ' ' ? ' ' : rev.has(i) ? ch : randChar()
        ).join('')
      )
      if (iterRef.current >= maxIterations) {
        clearInterval(intervalRef.current!)
        intervalRef.current = null
        setDisplayText(text)
        setRevealed(new Set(Array.from({ length: text.length }, (_, i) => i)))
      }
    }, speed)
  }, [text, speed, maxIterations, revealDirection, getRevealed, randChar])

  const reset = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null }
    iterRef.current = 0
    setDisplayText(text)
    setRevealed(new Set())
  }, [text])

  // View trigger
  useEffect(() => {
    if (animateOn !== 'view') return
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          if (delay > 0) setTimeout(start, delay)
          else start()
        }
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [animateOn, start])

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current) }, [])

  const isFullyRevealed = revealed.size >= text.replace(/ /g, '').length

  return (
    <span
      ref={containerRef}
      className={parentClassName}
      onMouseEnter={() => animateOn === 'hover' && start()}
      onMouseLeave={() => animateOn === 'hover' && reset()}
      onClick={() => {
        if (animateOn !== 'click') return
        if (clickMode === 'once' && hasAnimated.current) return
        hasAnimated.current = true
        if (clickMode === 'toggle' && isFullyRevealed) { reset(); return }
        start()
      }}
      style={{ display: 'inline-block' }}
    >
      {displayText.split('').map((char, i) => (
        <span key={i} className={revealed.has(i) ? className : encryptedClassName}>
          {char}
        </span>
      ))}
    </span>
  )
}
