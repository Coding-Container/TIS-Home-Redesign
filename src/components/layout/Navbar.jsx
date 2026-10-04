import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { contact, navGroups } from '../../data/content'
import useScrolled from '../../hooks/useScrolled'
import ThemeToggle from '../ui/ThemeToggle'
import MenuOverlay from './MenuOverlay'

const Navbar = ({ dark, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(40)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="flex h-11 items-center gap-3 bg-saffron-500 pl-24 pr-[96px] text-ink sm:pl-36 sm:pr-28">
          <a href={contact.phoneHref} className="flex items-center gap-2 whitespace-nowrap py-1 text-sm font-semibold sm:text-lg">
            <Phone aria-hidden="true" size={18} className="shrink-0" />
            <span className="hidden sm:inline">ADMISSIONS HELPLINE NO.&nbsp;</span>
            {contact.phone}
          </a>
          <a href="#enquire" className="hidden min-h-[32px] items-center rounded-full bg-navy-900 px-5 text-sm font-bold text-white sm:flex">Enquire Now</a>
          <div className="ml-auto"><ThemeToggle dark={dark} onToggle={onToggleTheme} /></div>
        </div>

        <div className={`relative h-14 transition-colors duration-300 ${scrolled || menuOpen ? 'bg-navy-800' : 'bg-navy-900'}`}>
          <nav aria-label="Primary" className="hidden h-full items-center gap-5 pl-36 pr-28 text-[13px] font-medium uppercase xl:flex">
            {navGroups.map((g) => (
              <div key={g.label} className="group relative flex h-full items-center">
                <button type="button" aria-haspopup="true" className="relative h-full whitespace-nowrap text-white after:absolute after:inset-x-0 after:bottom-2 after:h-0.5 after:origin-left after:scale-x-0 after:bg-saffron-400 after:transition-transform group-hover:after:scale-x-100 group-focus-within:after:scale-x-100">{g.label}</button>
                <ul className="invisible absolute left-0 top-full z-10 min-w-[200px] bg-navy-900/95 py-2 opacity-0 backdrop-blur transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  {g.items.map((it) => (
                    <li key={it.label}><a href={it.href} target="_blank" rel="noreferrer" className="block whitespace-nowrap px-4 py-2.5 text-sm normal-case text-white/90 hover:bg-white/10 hover:text-white">{it.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <a href="#top" aria-label="Tulas International School home" className="absolute left-3 top-4 h-[72px] w-[72px] overflow-hidden rounded-full bg-white shadow-lg sm:h-[92px] sm:w-[92px]">
          <img src="/img/logo.png" alt="Tulas International School" className="h-full w-full object-cover" />
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="absolute right-4 top-6 flex h-14 w-14 items-center justify-center rounded-full bg-saffron-500 text-white shadow-lg transition-transform hover:scale-105 sm:h-20 sm:w-20"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </header>
      <AnimatePresence>{menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}</AnimatePresence>
    </>
  )
}

export default Navbar
