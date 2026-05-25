'use client'

export default function CTA() {
  return (
    <section id="contact" style={{
      padding: '140px 48px', background: 'var(--cream)', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(var(--cream-dark),transparent 70%)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '24px', justifyContent: 'center' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>OPEN TO OPPORTUNITIES</span>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(48px,8vw,100px)',
          fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 0.92, marginBottom: '40px',
        }}>
          Let&apos;s build<br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>something.</em>
        </h2>

        <p style={{
          fontFamily: 'var(--body)', fontSize: '17px', fontWeight: 300,
          color: 'var(--ink-soft)', maxWidth: '480px', margin: '0 auto 12px', lineHeight: 1.65,
        }}>
          Internships · Freelance · Collabs · Interesting problems.
        </p>
        <p style={{
          fontFamily: 'var(--body)', fontSize: '14px', fontWeight: 300,
          color: 'var(--ink-dim)', marginBottom: '52px',
        }}>
          If you&apos;re building something real, let&apos;s talk.
        </p>

        <a
          href="mailto:lazimos.wa@gmail.com"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '14px',
            fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em',
            padding: '20px 48px', background: 'var(--ink)', color: 'var(--cream)',
            textDecoration: 'none', transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
        >
          GET IN TOUCH <span style={{ fontSize: '20px' }}>→</span>
        </a>
      </div>
    </section>
  )
}
