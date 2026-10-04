import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SITE } from '../../data/content'

const DiningSection = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} aria-labelledby="dining-title" className="relative isolate h-[70vh] min-h-[420px] overflow-hidden bg-navy-900">
      <motion.img src="/img/dining.jpg" alt="Spacious, colourful school dining hall" loading="lazy" style={{ y }} className="absolute -top-[10%] left-0 -z-10 h-[120%] w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="mx-auto flex h-full max-w-6xl flex-col justify-end px-5 pb-12 text-white">
        <h2 id="dining-title" className="text-6xl font-extrabold uppercase leading-none sm:text-8xl">100% <span className="font-serif font-black normal-case italic">Pure Veg</span></h2>
        <a href={`${SITE}/food-nutrition/`} target="_blank" rel="noreferrer" className="mt-5 inline-flex min-h-[48px] w-fit items-center rounded-full bg-white px-7 font-bold text-navy-800 transition-transform hover:-translate-y-0.5">Food &amp; Nutrition</a>
      </div>
    </section>
  )
}

export default DiningSection
