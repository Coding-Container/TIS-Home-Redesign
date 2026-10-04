import { useCallback, useEffect, useState } from 'react'

const KEY = 'tis-theme'

const useTheme = () => {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem(KEY, dark ? 'dark' : 'light') } catch { /* storage unavailable */ }
  }, [dark])

  const toggle = useCallback(() => setDark((d) => !d), [])
  return { dark, toggle }
}

export default useTheme
