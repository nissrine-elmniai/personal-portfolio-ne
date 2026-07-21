import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor({ enabled }) {
  const dotRef = useRef(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!enabled || reduced) {
      document.body.style.cursor = ''
      setVisible(false)
      return
    }

    const isFine = window.matchMedia('(pointer: fine)').matches
    if (!isFine) {
      setVisible(false)
      return
    }

    document.body.style.cursor = 'none'
    setVisible(true)

    let mouseX = 0, mouseY = 0
    let dotX = 0, dotY = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e) => {
      const target = e.target.closest('a, button, input, textarea, [role="button"]')
      if (dotRef.current) {
        dotRef.current.style.transform = target
          ? 'translate(-50%, -50%) scale(2)'
          : 'translate(-50%, -50%) scale(1)'
      }
    }

    const tick = () => {
      dotX += (mouseX - dotX) * 0.3
      dotY += (mouseY - dotY) * 0.3
      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`
        dotRef.current.style.top = `${dotY}px`
      }
      raf = requestAnimationFrame(tick)
    }

    let raf = requestAnimationFrame(tick)

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)

    return () => {
      document.body.style.cursor = ''
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(raf)
      setVisible(false)
    }
  }, [enabled, reduced])

  if (!visible) return null

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
      style={{
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'var(--color-primary)',
        boxShadow: '0 0 12px var(--color-primary)',
        left: -100,
        top: -100,
      }}
    />
  )
}
