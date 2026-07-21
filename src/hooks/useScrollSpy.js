import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 80) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observers = []
    let lastActive = activeId

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              lastActive = id
              setActiveId(id)
            }
          })
        },
        {
          rootMargin: `-${offset}px 0px -40% 0px`,
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sectionIds, offset])

  return activeId
}
