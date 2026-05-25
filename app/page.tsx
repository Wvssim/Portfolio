import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import StatsBar   from '@/components/StatsBar'
import Marquee    from '@/components/Marquee'
import About      from '@/components/About'
import WorkGrid   from '@/components/WorkGrid'
import Skills     from '@/components/Skills'
import Experience from '@/components/Experience'
import Education  from '@/components/Education'
import CTA        from '@/components/CTA'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      {/* Name stamp — above StatsBar */}
      <div style={{
        background: 'var(--cream)',
        padding: '0px 48px 0px',
        display: 'flex', alignItems: 'center', gap: '24px',
        overflow: 'hidden',
      }}>
        <span style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(42px, 6.5vw, 96px)',
          fontWeight: 700,
          letterSpacing: '0.12em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(184,134,42,0.45)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          WASSIM
        </span>
        <div style={{ flex: 1, height: '1px', background: 'rgba(184,134,42,0.25)' }} />
        <span style={{
          fontFamily: 'var(--display)',
          fontSize: 'clamp(42px, 6.5vw, 96px)',
          fontWeight: 700,
          letterSpacing: '0.12em',
          lineHeight: 1,
          color: 'transparent',
          WebkitTextStroke: '1px rgba(184,134,42,0.45)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}>
          LAZIM
        </span>
      </div>

      <StatsBar />
      <Marquee />
      <About />
      <WorkGrid />
      <Skills />
      <Experience />
      <Education />
      <CTA />
      <Footer />
    </>
  )
}
