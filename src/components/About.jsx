import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="min-h-screen snap-start bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">Built for the humans behind transformation</h2>
          <p className="text-white/80 leading-relaxed">
            SIYA is an opinionated platform for change leaders. We blend practical playbooks with adaptive AI so you can
            communicate clearly, drive adoption, and prove impact. Less spreadsheets, fewer silos — more momentum.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?q=80&w=1400&auto=format&fit=crop"
              alt="About SIYA"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
