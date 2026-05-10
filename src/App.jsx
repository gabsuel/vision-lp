import { useEffect } from 'react'
import Lenis from 'lenis'
import Header from './components/Header.jsx'
import EyeZoom from './components/EyeZoom.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Reviews from './components/Reviews.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    })
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <EyeZoom />
        <Portfolio />
        <Services />
        <About />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
