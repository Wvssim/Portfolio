import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import NameStamp  from '@/components/NameStamp'
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
      <NameStamp />

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
