import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="h-screen relative snap-start overflow-hidden bg-black">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">AI-Powered Change Management</p>
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight text-white drop-shadow-[0_0_30px_rgba(255,99,71,0.25)]">
              SIYA
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl">
              Orchestrate adoption, training, and communication with an intelligent copilot. Plan, execute, and measure change at scale.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3 text-white font-medium shadow-[0_10px_40px_-10px_rgba(244,63,94,0.6)] hover:scale-[1.02] active:scale-[0.99] transition"
              >
                Request Access
              </a>
              <a href="#services" className="text-white/80 hover:text-white transition">Learn more</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
