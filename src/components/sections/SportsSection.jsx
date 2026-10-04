import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { moreSports, sportsWithPhotos } from '../../data/content'
import { RevealGroup, RevealItem } from '../animation/Reveal'

const pages = [sportsWithPhotos, moreSports]

const SportsSection = () => {
  const [page, setPage] = useState(0)
  const go = (d) => setPage((p) => (p + d + pages.length) % pages.length)

  return (
    <section id="sports" className="bg-white px-5 py-16 dark:bg-night">
      <RevealGroup className="mx-auto max-w-3xl text-center">
        <RevealItem as="h2" className="font-serif text-5xl font-black italic text-navy-800 dark:text-saffron-400 sm:text-6xl">Sports ?</RevealItem>
        <RevealItem as="p" className="mt-4 font-serif text-2xl font-bold italic sm:text-3xl">
          It’s not just a <span className="text-navy-700 dark:text-saffron-400">facility.</span> At Tulas it’s the <span className="text-navy-700 dark:text-saffron-400">foundation!</span>
        </RevealItem>
        <RevealItem as="p" className="mt-3 font-serif text-2xl font-bold italic sm:text-3xl">
          <span className="relative inline-block px-2">16+<span aria-hidden="true" className="absolute inset-0 rounded-full border-2 border-saffron-400" /></span> sports curated to bring joy and discipline to your life.
        </RevealItem>
      </RevealGroup>

      <div className="mx-auto mt-10 max-w-6xl">
        <AnimatePresence mode="wait" initial={false}>
          <motion.ul key={page} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }} className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {pages[page].map((s) => {
              const name = s.name ?? s
              return (
                <li key={name} className="group text-center">
                  {s.img ? (
                    <div className="overflow-hidden rounded-2xl"><img src={s.img} alt={name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110" /></div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-navy-700 to-navy-900 font-serif text-5xl font-black italic text-white/90 transition-transform duration-500 group-hover:scale-[1.03]">{name[0]}</div>
                  )}
                  <p className="mt-2 text-lg font-extrabold uppercase">{name}</p>
                </li>
              )
            })}
          </motion.ul>
        </AnimatePresence>
        <div className="mt-6 flex items-center justify-center gap-8">
          <button type="button" onClick={() => go(-1)} aria-label="Previous sports" className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 text-navy-900"><ChevronLeft aria-hidden="true" /></button>
          <div className="flex gap-2" role="group" aria-label="Sports pages">
            {pages.map((_, i) => <button key={i} type="button" onClick={() => setPage(i)} aria-label={`Page ${i + 1}`} aria-current={i === page} className="flex h-6 w-6 items-center justify-center"><span className={`h-3 w-3 rounded-full ${i === page ? 'bg-saffron-500' : 'bg-saffron-500/30'}`} /></button>)}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next sports" className="flex h-12 w-12 items-center justify-center rounded-full bg-saffron-500 text-navy-900"><ChevronRight aria-hidden="true" /></button>
        </div>
      </div>
    </section>
  )
}

export default SportsSection
