import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function LiveClock() {
  const [time, setTime] = useState(() => formatTime())
  const reduced = useReducedMotion()

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), reduced ? 60000 : 1000)
    return () => clearInterval(id)
  }, [reduced])

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Globe className="w-4 h-4 text-primary flex-shrink-0" />
      <span>
        <span className="font-medium text-foreground">{time}</span>, Morocco
      </span>
    </div>
  )
}

function formatTime() {
  const formatter = new Intl.DateTimeFormat('fr-FR', {
    timeZone: 'Africa/Casablanca',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  return formatter.format(new Date())
}
