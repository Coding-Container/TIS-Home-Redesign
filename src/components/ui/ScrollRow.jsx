import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const Arrow = ({ dir, onClick, className }) => {
  const Cmp = dir < 0 ? ChevronLeft : ChevronRight
  return (
    <button type="button" onClick={onClick} aria-label={dir < 0 ? 'Previous' : 'Next'} className={`flex h-12 w-12 items-center justify-center rounded-full transition-transform hover:scale-105 ${className}`}>
      <Cmp aria-hidden="true" />
    </button>
  )
}

// Horizontal scroll-snap row with previous / next buttons.
const ScrollRow = ({ label, children, arrowClass = 'bg-saffron-500 text-navy-900' }) => {
  const ref = useRef(null)
  const by = (d) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: 'smooth' })
  return (
    <div>
      <div ref={ref} role="region" aria-label={label} tabIndex={0} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 sm:px-8">
        {children}
      </div>
      <div className="mt-4 flex justify-center gap-6">
        <Arrow dir={-1} onClick={() => by(-1)} className={arrowClass} />
        <Arrow dir={1} onClick={() => by(1)} className={arrowClass} />
      </div>
    </div>
  )
}

export default ScrollRow
