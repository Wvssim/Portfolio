'use client'

export default function Hero() {
  return (
    <section style={{
      minHeight: 'calc(100vh - 131px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      padding: '0 48px 52px', position: 'relative', overflow: 'hidden',
      background: 'radial-gradient(ellipse 80% 60% at 70% 40%, var(--cream-dark), var(--cream))',
    }}>
      {/* Ghost number */}
      <div style={{
        position: 'absolute', right: '-0.05em', top: '50%', transform: 'translateY(-50%)',
        fontFamily: 'var(--display)', fontSize: '38vw', fontWeight: 900,
        color: 'rgba(17,13,7,0.04)', lineHeight: 1, userSelect: 'none', letterSpacing: '-0.04em',
      }}>01</div>

      {/* Top-right decoration */}
      <div style={{
        position: 'absolute', top: '48px', right: '48px',
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px',
        animation: 'fadeIn 1s ease 0.5s both',
      }}>
        <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'var(--ink-dim)', fontWeight: 500 }}>EMSI · 2026</span>
        <div style={{ width: '1px', height: '60px', background: 'var(--gold)', opacity: 0.5 }} />
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '900px', position: 'relative', zIndex: 1 }}>
        <div className="animate" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>
            ENGINEER · FOUNDER · SHIPPER
          </span>
        </div>

        <h1
          className="animate anim-delay-1"
          style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(56px,8vw,112px)',
            fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em',
            color: 'var(--ink)', marginBottom: '8px',
          }}
        >
          Builder<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>by</em> obsession<br />
          <span style={{ position: 'relative', display: 'inline-block' }}>
            .
            <svg
              style={{ position: 'absolute', bottom: '-8px', left: 0, width: '100%', height: '12px' }}
              viewBox="0 0 300 12" fill="none" preserveAspectRatio="none"
            >
              <path d="M2 8 Q75 2 150 8 Q225 14 298 6" stroke="var(--rust)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p
          className="animate anim-delay-2"
          style={{
            fontFamily: 'var(--body)', fontSize: '18px', fontWeight: 300,
            color: 'var(--ink-soft)', maxWidth: '520px', lineHeight: 1.65,
            marginTop: '28px', marginBottom: '28px',
          }}
        >
          Most engineers pick a lane — I built the whole road.
          From circuit board to cloud, full-stack across web, mobile, IoT, AI & systems.
          Solo founder of a live{' '}
          <a
            href="https://swhnegoce.ma"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--gold)', textDecoration: 'none',
              borderBottom: '1px solid var(--gold)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            B2B platform ↗
          </a>
          . Founder by choice. I don&apos;t write code — I ship products.
        </p>

        <div className="animate anim-delay-3" style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <a
            href="#work"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '12px',
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              padding: '16px 36px', background: 'var(--ink)', color: 'var(--cream)',
              textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
          >
            VIEW WORK <span style={{ fontSize: '18px' }}>→</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              color: 'var(--ink-soft)', textDecoration: 'none',
              borderBottom: '1px solid var(--ink-dim)', paddingBottom: '2px',
            }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/wassim-lazim-124aa935b"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--body)', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em',
              color: 'var(--ink-soft)', textDecoration: 'none',
              borderBottom: '1px solid var(--ink-dim)', paddingBottom: '2px',
            }}
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', right: '48px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'float 3s ease-in-out infinite',
      }}>
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(var(--ink-dim),transparent)' }} />
        <span style={{ fontSize: '9px', letterSpacing: '0.2em', color: 'var(--ink-dim)', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
  )
}
