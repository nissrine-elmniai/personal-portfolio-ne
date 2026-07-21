import { useReducedMotion } from '@/hooks/useReducedMotion'

export function MadeWithLove() {
  const reduced = useReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <p className="text-sm text-muted-foreground text-center">
      Made with{' '}
      <span
        className={`inline-block text-highlight ${reduced ? '' : 'animate-heartbeat'}`}
        aria-label="love"
      >
        ❤️
      </span>{' '}
      by{' '}
      <button
        onClick={scrollToTop}
        className="text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
      >
        Nina
      </button>
    </p>
  )
}
