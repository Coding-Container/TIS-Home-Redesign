import { useEffect, useState } from 'react'

// True only for devices with a precise pointer (mouse / trackpad).
const useFinePointer = () => {
  const [fine, setFine] = useState(() => window.matchMedia('(pointer: fine)').matches)

  useEffect(() => {
    const mq = window.matchMedia('(pointer: fine)')
    const onChange = (e) => setFine(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return fine
}

export default useFinePointer
