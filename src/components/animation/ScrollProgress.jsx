import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 24, restDelta: 0.001 })
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed inset-x-0 top-0 z-[80] h-1 origin-left bg-navy-900" />
}

export default ScrollProgress
