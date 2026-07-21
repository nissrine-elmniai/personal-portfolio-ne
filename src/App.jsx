import { lazy, Suspense, useState, useEffect, useCallback } from 'react'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Services } from '@/sections/Services'
import { Navbar } from '@/layout/Navbar'
import { Footer } from '@/layout/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { DesignSystemShowcase } from '@/components/DesignSystemShowcase'

const Certification = lazy(() => import('@/sections/Certification').then(m => ({ default: m.Certification })))
const Activities = lazy(() => import('@/sections/Activities').then(m => ({ default: m.Activities })))
const Contact = lazy(() => import('@/sections/Contact').then(m => ({ default: m.Contact })))

const sectionFallback = (
  <div className="py-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
)

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  const updateProgress = useCallback(() => {
    const scrollY = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0)
  }, [])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }
    updateProgress()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateProgress)
    }
  }, [updateProgress])

  return progress
}

function App() {
  const scrollProgress = useScrollProgress()
  const [cursorEnabled, setCursorEnabled] = useState(false)
  const [dsOpen, setDsOpen] = useState(false)

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <CustomCursor enabled={cursorEnabled} />
      <div
        className="fixed top-0 left-0 h-[3px] bg-primary shadow-glow-md z-[60] transition-none"
        style={{ width: `${scrollProgress}%` }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Suspense fallback={sectionFallback}>
          <Certification />
        </Suspense>
        <Suspense fallback={sectionFallback}>
          <Activities />
        </Suspense>
        <Services />

        <Suspense fallback={sectionFallback}>
          <Contact />
        </Suspense>
      </main>
      <DesignSystemShowcase
        open={dsOpen}
        onClose={() => setDsOpen(false)}
        cursorEnabled={cursorEnabled}
        onToggleCursor={() => setCursorEnabled((p) => !p)}
      />
      <Footer onOpenDS={() => setDsOpen(true)} />
    </div>
  )
}

export default App
