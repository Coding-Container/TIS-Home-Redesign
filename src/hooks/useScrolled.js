import { useEffect, useState } from 'react'

// True once the page has scrolled past `threshold` px. State only changes at the boundary, so scrolling stays cheap.
const useScrolled = (threshold = 40) => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

export default useScrolled
