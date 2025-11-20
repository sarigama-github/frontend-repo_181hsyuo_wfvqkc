import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop',
    label: 'Enterprise Rollout',
    caption: 'Deployed to 40k employees in 12 weeks'
  },
  {
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop',
    label: 'Change Readiness',
    caption: 'Predictive risk scoring across business units'
  },
  {
    img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop',
    label: 'AI Assisted Comms',
    caption: 'Cut time-to-draft by 72% with on-brand AI'
  },
  {
    img: 'https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=1200&auto=format&fit=crop',
    label: 'Engagement Lift',
    caption: '+38% training completion with targeted nudges'
  }
]

export default function Highlights() {
  return (
    <section id="highlights" className="min-h-screen snap-start bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold mb-12"
        >
          Highlights
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={it.img} alt={it.label} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="p-5">
                <p className="text-sm uppercase tracking-wider text-white/60">{it.label}</p>
                <p className="mt-1 text-white">{it.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
