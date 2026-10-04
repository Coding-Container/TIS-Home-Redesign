import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { navGroups, menuCards } from '../../data/content'

const MenuOverlay = ({ onClose }) => {
  const [open, setOpen] = useState(null)

  return (
    <motion.div
      id="site-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-40 overflow-y-auto bg-mist pt-28 dark:bg-night"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 lg:grid-cols-2">
        <nav aria-label="Full menu">
          <ul className="space-y-1">
            <li><a href="#top" onClick={onClose} className="inline-block py-2 font-serif text-3xl font-black italic text-navy-800 dark:text-saffron-400">Home</a></li>
            {navGroups.map((g, i) => (
              <li key={g.label}>
                <button
                  type="button"
                  aria-expanded={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full max-w-md items-center justify-between py-2 text-left font-serif text-3xl font-black italic"
                >
                  {g.label}
                  <ArrowRight aria-hidden="true" className={`transition-transform ${open === i ? 'rotate-90' : ''}`} />
                </button>
                {open === i && (
                  <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden pl-2">
                    {g.items.map((it) => (
                      <li key={it.label}><a href={it.href} target="_blank" rel="noreferrer" className="block py-2 text-lg font-medium hover:text-navy-800 dark:text-saffron-400 dark:hover:text-saffron-500">{it.label}</a></li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <ul className="grid grid-cols-2 gap-4 self-start">
          {menuCards.map((c) => (
            <li key={c.title}>
              <a href={c.href} target="_blank" rel="noreferrer" className="group relative block aspect-[4/5] overflow-hidden rounded-xl">
                <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
                <span className="absolute inset-x-3 bottom-3 text-lg font-semibold leading-tight text-white sm:text-xl">{c.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default MenuOverlay
