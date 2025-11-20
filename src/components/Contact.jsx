import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // In a real app, send to your backend. For now, simulate.
      await new Promise((r) => setTimeout(r, 800))
      setStatus('Thanks — we\'ll be in touch!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="min-h-screen snap-start bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl font-bold mb-10"
        >
          Get in touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Name" required className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500" />
                <input name="email" type="email" placeholder="Email" required className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <textarea name="message" placeholder="Message" rows="5" required className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-white/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-rose-500" />
              <button className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-orange-500 px-6 py-3 text-white font-medium shadow-[0_10px_40px_-10px_rgba(244,63,94,0.6)] hover:scale-[1.02] active:scale-[0.99] transition">
                Send
              </button>
              {status && <p className="text-sm text-white/70">{status}</p>}
            </form>
          </div>
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"><Mail className="text-white/80" /><span>Email</span></a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"><Github className="text-white/80" /><span>GitHub</span></a>
            <a href="#" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"><Linkedin className="text-white/80" /><span>LinkedIn</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}
