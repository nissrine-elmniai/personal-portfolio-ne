import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'
import { AnimatedBorderButton } from './AnimatedBorderButton'

const colors = [
  { token: 'background', value: '#0f1418' },
  { token: 'foreground', value: '#f0f2f5' },
  { token: 'primary', value: '#20b2bf' },
  { token: 'primary-hover', value: '#1a9aa8' },
  { token: 'primary-muted', value: 'rgba(32,178,191,0.12)' },
  { token: 'surface', value: '#1a2329' },
  { token: 'card', value: '#141a1f' },
  { token: 'border', value: '#242b32' },
  { token: 'muted-foreground', value: '#7a8491' },
  { token: 'highlight', value: '#f5a623' },
  { token: 'success', value: '#22c55e' },
  { token: 'error', value: '#ef4444' },
]

export function DesignSystemShowcase({ open, onClose, cursorEnabled, onToggleCursor }) {
  const overlayRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div className="relative glass-strong rounded-3xl p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Design System</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-surface transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Palette */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Color Palette</h3>
          <div className="grid grid-cols-2 gap-3">
            {colors.map((c) => (
              <div key={c.token} className="flex items-center gap-3 p-2 rounded-xl bg-surface/50">
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 border border-border/50"
                  style={{ backgroundColor: c.value }}
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium truncate">{c.token}</div>
                  <div className="text-xs text-muted-foreground truncate">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Typography</h3>
          <div className="space-y-3 p-4 rounded-xl bg-surface/50">
            <div>
              <div className="text-xs text-muted-foreground">Body / UI — Inter</div>
              <p className="text-base mt-1">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Accent — Playfair Display (serif, italic)</div>
              <p className="font-serif italic text-lg mt-1">The quick brown fox jumps over the lazy dog.</p>
            </div>
          </div>
        </div>

        {/* Components */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Components</h3>
          <div className="space-y-4 p-4 rounded-xl bg-surface/50">
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
            </div>
            <div>
              <AnimatedBorderButton>Outline Button</AnimatedBorderButton>
            </div>
          </div>
        </div>

        {/* Toggles */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Preferences</h3>
          <div className="space-y-3 p-4 rounded-xl bg-surface/50">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm">Custom cursor</span>
              <button
                role="switch"
                aria-checked={cursorEnabled}
                onClick={onToggleCursor}
                className={`relative w-10 h-5 rounded-full transition-colors ${cursorEnabled ? 'bg-primary' : 'bg-muted'}`}
              >
                <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${cursorEnabled ? 'translate-x-5' : 'translate-x-0'}`} />
              </button>
            </label>
            <p className="text-xs text-muted-foreground">Replaces the default cursor with a teal dot on desktop.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
