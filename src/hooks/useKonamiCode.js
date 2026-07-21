import { useState, useEffect, useRef } from 'react'

const KONAMI = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a',
]

export function useKonamiCode() {
  const [activated, setActivated] = useState(false)
  const buffer = useRef([])

  useEffect(() => {
    const handler = (e) => {
      buffer.current = [...buffer.current, e.key].slice(-KONAMI.length)
      if (
        buffer.current.length === KONAMI.length &&
        buffer.current.every((k, i) => k === KONAMI[i])
      ) {
        setActivated(true)
        buffer.current = []
      }
    }

    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return activated
}
