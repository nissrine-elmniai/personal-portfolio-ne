import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'
import { Navbar } from '@/layout/Navbar'
import { Footer } from '@/layout/Footer'
import { Certification } from './sections/Certification'
import { Activities } from './sections/Activities'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certification />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
