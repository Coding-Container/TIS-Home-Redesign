import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const ThemeToggle = ({ dark, onToggle }) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={dark}
      aria-label="Dark mode"
      className="relative flex h-10 w-[68px] shrink-0 items-center rounded-full bg-ink/15 p-1"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 32 }}
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white shadow ${dark ? 'ml-auto' : ''}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={dark ? 'moon' : 'sun'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }} className="flex">
            {dark ? <Moon size={16} /> : <Sun size={16} />}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </button>
  )
}

export default ThemeToggle
