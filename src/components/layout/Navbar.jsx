import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-30 px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? 'glass shadow-soft' : 'border border-transparent'
        }`}
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2.5"
          aria-label="Ir al inicio"
        >
          <span className="text-2xl">🍳</span>
          <span className="whitespace-nowrap text-xl font-extrabold tracking-tight text-ink-900">
            GatoDumas<span className="text-brand-600">AI</span>
          </span>
        </button>

        <button className="btn-primary text-sm" onClick={() => navigate('/panel')}>
          Entrar al panel
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </header>
  )
}
