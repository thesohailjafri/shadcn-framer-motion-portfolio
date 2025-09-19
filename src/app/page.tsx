import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { SectionDivider } from '@/components/section-divider'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { ThemeToggle } from '@/components/theme-toggle'

export default function Home() {
  return (
    <>
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <Header />
        <Hero />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ThemeToggle className="bg-background hidden sm:fixed sm:bottom-8 sm:right-8 sm:flex" />
    </>
  )
}
