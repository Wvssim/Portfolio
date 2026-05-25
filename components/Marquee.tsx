const ITEMS = [
  'Next.js', 'Laravel', 'Symfony', 'Kotlin', 'Python', 'C/C++',
  'React', 'PHP', 'Docker', 'IoT', 'LangChain', 'Sanity.io',
  'PostgreSQL', 'MongoDB', 'Android', 'REST API',
]
const DOUBLED = [...ITEMS, ...ITEMS]

export default function Marquee() {
  return (
    <div style={{
      borderTop: '1px solid rgba(17,13,7,0.1)',
      borderBottom: '1px solid rgba(17,13,7,0.1)',
      padding: '18px 0', overflow: 'hidden', background: 'var(--ink)',
    }}>
      <div style={{
        display: 'flex',
        animation: 'marqueeScroll 25s linear infinite',
        width: 'max-content',
      }}>
        {DOUBLED.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--display)', fontSize: '15px', fontStyle: 'italic', fontWeight: 300,
              color: 'var(--cream)', letterSpacing: '0.04em', padding: '0 40px', whiteSpace: 'nowrap',
            }}
          >
            {item}
            <span style={{ color: 'var(--gold)', marginLeft: '40px' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
