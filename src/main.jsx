import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { consoleEgg } from '@/utils/consoleEgg'
import { initRevealObserver } from '@/utils/revealObserver'

consoleEgg()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
initRevealObserver()
