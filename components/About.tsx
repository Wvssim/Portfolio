import DecryptedText from './DecryptedText'

export default function About() {
  return (
    <section style={{
      padding: '120px 48px', background: 'var(--ink)',
      display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'center',
    }}>
      <div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
          <span style={{ fontSize: '11px', letterSpacing: '0.25em', color: 'var(--gold)', fontWeight: 500 }}>
            <DecryptedText
              text="ABOUT"
              animateOn="view"
              speed={50}
              maxIterations={15}
              characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
              revealDirection="start"
            />
          </span>
        </div>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 'clamp(36px,4.5vw,64px)',
          fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, color: 'var(--cream)',
        }}>
          <DecryptedText
            text="Both"
            animateOn="view"
            speed={38}
            maxIterations={20}
            characters="!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            revealDirection="start"
            delay={0}
          />
          <br />
          <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gold)' }}>
            <DecryptedText
              text="worlds."
              animateOn="view"
              speed={38}
              maxIterations={24}
              characters="!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
              revealDirection="start"
              delay={700}
            />
          </em>
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '32px' }}>
          <div style={{
            fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '12px',
          }}>
            POLYGLOT ENGINEER
          </div>
          <p style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(16px,2vw,22px)',
            fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)',
            lineHeight: 1.5, letterSpacing: '-0.01em',
          }}>
            &ldquo;I work across every layer — web, mobile, IoT, AI, systems. Laravel, Symfony,
            Next.js, Kotlin, Python, C/C++, PHP. The stack is whatever the problem needs.&rdquo;
          </p>
        </div>

        <div style={{ borderLeft: '3px solid rgba(184,134,42,0.4)', paddingLeft: '32px' }}>
          <div style={{
            fontFamily: 'var(--body)', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '12px',
          }}>
            SOLO FOUNDER
          </div>
          <p style={{
            fontFamily: 'var(--display)', fontSize: 'clamp(16px,2vw,22px)',
            fontWeight: 300, fontStyle: 'italic', color: 'var(--cream)',
            lineHeight: 1.5, letterSpacing: '-0.01em',
          }}>
            &ldquo;I built swhnegoce.ma alone, from scratch, in production. Not a school project —
            a real business, live, with real clients.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
