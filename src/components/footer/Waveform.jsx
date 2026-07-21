import { useEffect, useRef } from 'react'

export function Waveform() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId

    const bars = 32
    const heights = Array.from({ length: bars }, () => Math.random() * 20 + 4)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        heights[i] += (Math.random() - 0.5) * 4
        heights[i] = Math.max(4, Math.min(32, heights[i]))

        const x = i * 4 + 2
        const gradient = ctx.createLinearGradient(0, canvas.height - heights[i], 0, canvas.height)
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)')
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0.2)')
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.roundRect(x, canvas.height - heights[i], 2.5, heights[i], 1.5)
        ctx.fill()
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={140}
      height={24}
      className="opacity-60"
      aria-hidden="true"
    />
  )
}
