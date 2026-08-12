import { useCallback, useEffect, useRef, useState } from 'react'

export function useDragScroll() {
  const ref = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  })

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return
    const el = ref.current
    if (!el) return
    dragState.current = {
      active: true,
      startX: e.pageX,
      startScrollLeft: el.scrollLeft,
      moved: false,
    }
    setIsDragging(true)
  }, [])

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    const s = dragState.current
    if (!el || !s.active) return
    const dx = e.pageX - s.startX
    if (!s.moved && Math.abs(dx) > 6) s.moved = true
    el.scrollLeft = s.startScrollLeft - dx
  }, [])

  const stopDragging = useCallback(() => {
    if (!dragState.current.active) return
    dragState.current.active = false
    setIsDragging(false)
  }, [])

  useEffect(() => {
    if (!isDragging) return undefined
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', stopDragging)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', stopDragging)
    }
  }, [isDragging, handleMouseMove, stopDragging])

  const preventClickAfterDrag = useCallback((e) => {
    if (dragState.current.moved) {
      e.preventDefault()
      e.stopPropagation()
    }
  }, [])

  return { ref, isDragging, onMouseDown: handleMouseDown, preventClickAfterDrag }
}