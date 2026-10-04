import { motion } from 'framer-motion'

// Hand-drawn underline that draws itself when scrolled into view.
const Scribble = ({ className = 'text-saffron-400', width = 290 }) => {
  return (
    <svg aria-hidden="true" viewBox="0 0 290 18" width={width} className={`mx-auto block ${className}`} fill="none">
      <motion.path
        d="M3 11 C60 5 120 4 180 7 S260 10 287 6 M8 14 C70 9 150 9 210 11 S265 12 280 10"
        stroke="currentColor" strokeWidth="3.5" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3 }}
      />
    </svg>
  )
}

export default Scribble
