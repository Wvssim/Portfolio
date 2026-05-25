'use client'

const LINKS = [
  ['GitHub',   'https://github.com'],
  ['LinkedIn', 'https://www.linkedin.com/in/wassim-lazim-124aa935b'],
  ['Email',    'mailto:lazimos.wa@gmail.com'],
] as const

export default function Footer() {
  return (
    <footer style={{
      padding: '48px', background: 'var(--ink)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: '1px solid rgba(247,242,233,0.08)',
    }}>
      <div style={{ fontFamily: 'var(--display)', fontSize: '18px', fontWeight: 700, color: 'var(--cream)', letterSpacing: '-0.02em' }}>
        Wassim<span style={{ color: 'var(--gold)' }}>.</span>lz
      </div>

      <div style={{ display: 'flex', gap: '32px' }}>
        {LINKS.map(([label, href]) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--body)', fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em',
              color: 'rgba(247,242,233,0.4)', textDecoration: 'none', transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,242,233,0.4)')}
          >
            {label}
          </a>
        ))}
      </div>

      <div style={{ fontFamily: 'var(--body)', fontSize: '11px', color: 'rgba(247,242,233,0.3)', letterSpacing: '0.06em' }}>
        © 2026
      </div>
    </footer>
  )
}
