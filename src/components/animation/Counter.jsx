import { useEffect, useRef } from 'react'
import { animate, useInView } from 'framer-motion'

// Counts from 0 to `value` once visible. Writes to the DOM node directly, so no re-renders while counting.
const Counter = ({ value, suffix = '' }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v) + suffix },
    })
    return () => controls.stop()
  }, [inView, value, suffix])
  return <span ref={ref}>{value}{suffix}</span>
}

export default Counter
