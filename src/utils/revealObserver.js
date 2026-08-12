let initialized = false

export function initRevealObserver() {
  if (initialized || typeof window === 'undefined') return
  initialized = true

  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const observed = new Set()
  const liveSelector = '.animate-fade-in:not(.is-revealed)'

  let io = null
  if (!isReduced) {
    io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observed.delete(entry.target)
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )
  }

  const scan = () => {
    const live = new Set(document.querySelectorAll(liveSelector))
    for (const el of observed) {
      if (!live.has(el)) {
        io.unobserve(el)
        observed.delete(el)
      }
    }
    for (const el of live) {
      if (isReduced) {
        el.classList.add('is-revealed')
      } else if (!observed.has(el)) {
        observed.add(el)
        io.observe(el)
      }
    }
  }

  scan()
  const mo = new MutationObserver(scan)
  mo.observe(document.body, { childList: true, subtree: true })
}