import React, { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'What I Do' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'partners', label: 'Partners' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '0px', threshold: 0.6 }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const LinkItem = ({ id, label }) => (
    <a
      href={`#${id}`}
      onClick={() => setOpen(false)}
      className={`px-3 py-2 rounded-md transition-colors duration-200 text-sm md:text-base ${
        active === id ? 'text-white bg-white/10' : 'text-white/70 hover:text-white'
      }`}
    >
      {label}
    </a>
  )

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#hero" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-500 shadow-[0_0_30px_rgba(244,63,94,0.5)]" />
              <span className="font-semibold tracking-wide text-white">SIYA</span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {sections.map((s) => (
                <LinkItem key={s.id} {...s} />
              ))}
            </div>

            <button
              className="md:hidden text-white/80"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-3 py-2 flex flex-col gap-1">
              {sections.map((s) => (
                <LinkItem key={s.id} {...s} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
