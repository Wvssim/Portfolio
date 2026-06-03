import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 80% 60% at 70% 40%, var(--cream-dark), var(--cream))',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '0 24px', gap: '28px',
      }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
        <span style={{ fontFamily: 'var(--body)', fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>
          LOST PAGE
        </span>
        <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
      </div>

      <div style={{
        fontFamily: 'var(--display)', fontSize: 'clamp(96px, 20vw, 200px)', fontWeight: 700,
        color: 'var(--ink)', lineHeight: 0.9, letterSpacing: '-0.04em',
      }}>
        4<span style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>0</span>4
      </div>

      <p style={{
        fontFamily: 'var(--body)', fontSize: '16px', fontWeight: 300,
        color: 'var(--ink-soft)', maxWidth: '420px', lineHeight: 1.65,
      }}>
        This page wandered off the road. Let’s get you back to the work.
      </p>

      <Link
        href="/"
        className="back-home"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
          padding: '15px 34px', background: 'var(--ink)', color: 'var(--cream)', textDecoration: 'none',
        }}
      >
        ← BACK HOME
      </Link>
    </main>
  )
}
