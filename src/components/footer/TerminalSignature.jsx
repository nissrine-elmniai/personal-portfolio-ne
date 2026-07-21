import { useReducedMotion } from '@/hooks/useReducedMotion'

export function TerminalSignature() {
  const reduced = useReducedMotion()

  return (
    <div className="w-full bg-card border border-border rounded-lg p-4 md:p-6 font-mono text-sm leading-relaxed">
      <div>
        <span className="text-primary">$</span>{' '}
        <span className="text-foreground">whoami</span>
      </div>
      <div className="text-muted-foreground ml-4">
        Nissrine El Mniai — Software Engineering Student
      </div>
      <div className="mt-2">
        <span className="text-primary">$</span>{' '}
        <span className="text-foreground">status --current</span>
      </div>
      <div className="text-muted-foreground ml-4">
        الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ      </div>
      <div className="mt-2">
        <span className="text-primary">$</span>{' '}
        <span className="text-foreground">_</span>
        {!reduced && <span className="animate-blink text-foreground">_</span>}
      </div>
    </div>
  )
}
