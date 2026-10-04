import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import useFinePointer from '../../hooks/useFinePointer'

const INTERACTIVE = 'a, button, label, input, select, textarea, video, [role="button"]'

const CustomCursor = () => {
  const fine = useFinePointer()
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!fine) return
    document.body.classList.add('has-cursor')
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHovering(Boolean(e.target.closest?.(INTERACTIVE)))
    }
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('mouseleave', leave)
    return () => {
      document.body.classList.remove('has-cursor')
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('mouseleave', leave)
    }
  }, [fine, x, y])

  if (!fine) return null

  // mix-blend-difference keeps the white ring visible on navy, saffron, light and dark surfaces.
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] mix-blend-difference">
      <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: hovering ? 1.9 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`-ml-4 -mt-4 h-8 w-8 rounded-full border-2 border-white ${hovering ? 'bg-white/40' : ''}`}
        />
      </motion.div>
      <motion.div style={{ x, y }} animate={{ opacity: visible && !hovering ? 1 : 0 }} className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white" />
    </div>
  )
}

export default CustomCursor
