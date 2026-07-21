import { useState, useEffect } from 'react'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const CONFETTI_COLORS = ['#20b2bf', '#f5a623', '#20b2a6', '#ffffff']

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export function KonamiEasterEgg() {
  const activated = useKonamiCode()
  const reduced = useReducedMotion()
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (!activated) return
    const timer = setTimeout(() => setDismissed(true), 6000)
    return () => clearTimeout(timer)
  }, [activated])

  if (!activated || dismissed) return null

  return (
    <>
      {/* Confettis */}
      {!reduced && <ConfettiOverlay />}

      {/* Message overlay */}
      <div
        className="fixed inset-0 z-[9998] flex items-center justify-center p-4"
        onClick={() => setDismissed(true)}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div
          className="relative glass-strong rounded-3xl p-8 max-w-md w-full text-center space-y-4 animate-fade-in cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-4xl">🎉</div>
          <h3 className="text-xl font-bold text-foreground">
            Easter Egg trouvé !
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Tu as exactement le genre de curiosité que j'aime avoir dans mon équipe.
          </p>
          <p className="text-primary font-semibold">— Nissrine</p>
          <button
            onClick={() => setDismissed(true)}
            className="mt-2 px-6 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
          >
            Continuer
          </button>
        </div>
      </div>
    </>
  )
}

function ConfettiOverlay() {
  const [pieces] = useState(() =>
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: randomBetween(0, 100),
      delay: randomBetween(0, 1.5),
      duration: randomBetween(2, 4),
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      size: randomBetween(6, 12),
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confetti"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            backgroundColor: p.color,
            borderRadius: '2px',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}
