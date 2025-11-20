import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Highlights from './components/Highlights'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-black text-white">
      {/* Sticky nav */}
      <Navbar />

      {/* Scroll container with snap */}
      <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <Hero />
        <Services />
        <Highlights />
        <Partners />
        <About />
        <Contact />
      </main>

      {/* Accent gradient glow */}
      <div className="pointer-events-none fixed inset-0 opacity-40 mix-blend-screen" aria-hidden>
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-500 to-orange-500 blur-[120px]" />
      </div>
    </div>
  )
}

export default App
