import { useEffect, useState } from 'react'
import { Eye } from 'lucide-react'

export function VisitorCounter() {
  const [count] = useState(() => {
    const stored = localStorage.getItem('visitor-count')
    return stored ? Number(stored) + 1 : 1
  })

  useEffect(() => {
    localStorage.setItem('visitor-count', String(count))
  }, [count])

  return (
    <span className="flex items-center gap-1.5">
      <Eye className="w-3.5 h-3.5" />
      <span>{count.toLocaleString()} visites</span>
    </span>
  )
}
