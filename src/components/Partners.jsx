import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'https://dummyimage.com/140x40/ffffff/000000&text=ALPHA',
  'https://dummyimage.com/140x40/ffffff/000000&text=BETA',
  'https://dummyimage.com/140x40/ffffff/000000&text=GAMMA',
  'https://dummyimage.com/140x40/ffffff/000000&text=OMEGA',
  'https://dummyimage.com/140x40/ffffff/000000&text=SIGMA',
]

export default function Partners() {
  return (
    <section id="partners" className="min-h-[60vh] snap-start bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6">Trusted by teams who ship change</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
          {logos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <img src={src} alt={`logo-${i}`} className="opacity-90 hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
