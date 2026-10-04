import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { heroPairs } from '../../data/content'

const SLIDE_MS = 3600

const HeroImage = ({ image, side, className }) => {
  const dir = side === 'left' ? -1 : 1
  return (
    <motion.img
      src={image.src}
      alt={image.alt}
      initial={{ opacity: 0, x: 50 * dir, scale: 0.85 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 30 * dir, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={image.fade ? { maskImage: 'linear-gradient(#000 82%, transparent)' } : undefined}
      className={`${className} object-contain`}
    />
  )
}

const HeroSection = () => {
  const [index, setIndex] = useState(0)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) return
    const id = setInterval(() => setIndex((i) => (i + 1) % heroPairs.length), SLIDE_MS)
    return () => clearInterval(id)
  }, [reduce])

  const pair = heroPairs[index]

  return (
    <section id="top" className="relative overflow-hidden bg-navy-800 px-5 pb-40 pt-36 text-white sm:pt-44">
      <h1 className="sr-only">Tulas International School, best boarding school in Dehradun</h1>
      <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col items-center justify-center lg:min-h-[520px]">
        <div aria-hidden="true" className="text-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.25)]">
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-5xl font-extrabold uppercase leading-none sm:text-8xl">
            Let&apos;s do <span className="font-serif text-5xl font-black normal-case italic text-saffron-400 sm:text-8xl">it</span>
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mt-3 text-5xl font-extrabold leading-none sm:text-8xl">
            With <span className="font-serif font-black italic text-saffron-400">Tulas</span>
          </motion.p>
        </div>
        <svg aria-hidden="true" viewBox="0 0 290 18" className="mt-5 w-64 text-saffron-400 sm:w-[290px]" fill="none">
          <motion.path d="M3 11 C60 5 120 4 180 7 S260 10 287 6 M8 14 C70 9 150 9 210 11 S265 12 280 10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.6 }} />
        </svg>

        <div className="mt-10 flex w-full items-end justify-between gap-4 lg:mt-0 lg:block">
          <AnimatePresence mode="wait">
            <div key={index} className="contents">
              <div className="w-[44%] max-w-[300px] lg:absolute lg:left-[4%] lg:top-1/2 lg:w-[22%] lg:-translate-y-1/2"><HeroImage image={pair.left} side="left" className="h-auto w-full" /></div>
              <div className="w-[40%] max-w-[280px] lg:absolute lg:right-[3%] lg:top-[58%] lg:w-[20%] lg:-translate-y-1/2"><HeroImage image={pair.right} side="right" className="h-auto w-full" /></div>
            </div>
          </AnimatePresence>
        </div>
      </div>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto mt-12 max-w-3xl text-center text-xl font-semibold leading-relaxed sm:text-2xl"
      >
        Tulas International School was established in 2012 under the aegis of Rishabh Educational Trust to impart education through{' '}
        <span className="text-saffron-400">seamless opportunities.</span>
      </motion.p>
    </section>
  )
}

export default HeroSection
