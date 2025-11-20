import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Users, BarChart3, Bot } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Rollouts at Speed',
    desc: 'Plan change programs with timelines, audiences, and templates that adapt as you learn.'
  },
  {
    icon: Users,
    title: 'Stakeholder Intelligence',
    desc: 'Map influence, sentiment, and readiness. Target the right message to the right groups.'
  },
  {
    icon: Bot,
    title: 'AI Content Copilot',
    desc: 'Draft comms, training, and surveys in your brand voice with measurable outcomes.'
  },
  {
    icon: BarChart3,
    title: 'Impact Analytics',
    desc: 'Track adoption, engagement, and change health with live dashboards.'
  }
]

export default function Services() {
  return (
    <section id="services" className="min-h-screen snap-start bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold mb-12"
        >
          What We Do
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 text-white shadow-[0_10px_30px_-10px_rgba(244,63,94,0.7)]">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
