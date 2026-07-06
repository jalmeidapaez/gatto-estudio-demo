import { useState, useEffect, useRef } from 'react'

const WEBHOOK_URL = 'https://n8n.highcoachinggroup.com/webhook/gatto'

const SUGERENCIAS = [
  '¿Qué es la cocción al vacío?',
  '¿Cómo se organiza un evento de catering?',
  '¿Qué ventajas tiene envasar al vacío?',
  '¿Qué diferencia hay entre pastelería y panadería?',
]

export default function ChatView() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function sendMessage(text) {
    if (!text.trim() || loading) return
    const userMsg = { from: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      })
      const text_ = await res.text()
      setMessages(prev => [...prev, { from: 'bot', text: text_ || '...' }])
    } catch {
      setMessages(prev => [...prev, { from: 'bot', text: 'Ups, algo salió mal. Intentá de nuevo.' }])
    } finally {
      setLoading(false)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  const isEmpty = messages.length === 0

  return (
    <div className="flex h-full flex-col" style={{ minHeight: 0 }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-ink-200 bg-white/80 px-6 py-3.5 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-grad text-xl shadow-gold">
            👨‍🍳
          </div>
          <div>
            <div className="font-serif text-lg font-semibold text-ink-900">Gatto</div>
            <div className="flex items-center gap-1.5 text-xs text-ink-500">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Asistente de estudio · En línea
            </div>
          </div>
        </div>
        <button className="btn-ghost text-sm" onClick={() => window.location.reload()}>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 5v14M5 12h14" /></svg>
          Nueva conversación
        </button>
      </div>

      {/* Messages */}
      <div className="chat-bg flex-1 space-y-4 overflow-y-auto px-6 py-6">
        {isEmpty && (
          <div>
            <div className="flex justify-start">
              <div
                className="max-w-[80%] bg-white px-4 py-2.5 text-sm leading-relaxed text-ink-700 shadow-sm"
                style={{ borderRadius: '4px 20px 20px 20px' }}
              >
                ¡Hola! 😊 Soy Gatto, tu asistente de estudio de Gato Dumas. Te ayudo con dudas sobre Pastelería Avanzada y Catering y Eventos. ¿En qué te ayudo hoy?
              </div>
            </div>
            <p className="mb-3 mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-ink-400">
              Probá con...
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {SUGERENCIAS.map(s => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="rounded-2xl border border-ink-200 bg-white px-4 py-3 text-left text-sm text-ink-700 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-soft"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="max-w-[80%] px-4 py-2.5 text-sm leading-relaxed shadow-sm"
              style={{
                borderRadius: m.from === 'user' ? '20px 4px 20px 20px' : '4px 20px 20px 20px',
                background: m.from === 'user' ? '#1C1917' : '#fff',
                color: m.from === 'user' ? '#FAF8F5' : '#44403C',
              }}
            >
              {m.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white px-4 py-3 shadow-sm" style={{ borderRadius: '4px 20px 20px 20px' }}>
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="block h-2 w-2 rounded-full bg-brand-400"
                    style={{ animation: `bounce 1s ${i * 0.15}s infinite` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-ink-200 bg-white/80 px-4 py-3 backdrop-blur">
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Escribile a Gatto como si fueras un alumno..."
            className="flex-1 rounded-full border border-ink-200 bg-ink-50 px-5 py-3 text-sm text-ink-900 outline-none transition-all focus:border-brand-400 focus:bg-white focus:ring-2 focus:ring-brand-100"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold-grad text-ink-900 shadow-gold transition-all hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-40 disabled:shadow-none"
            aria-label="Enviar mensaje"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" />
            </svg>
          </button>
        </form>
        <p className="mt-2 text-center text-xs text-ink-400">
          Demo. En producción, Gatto atiende desde la web de Gato Dumas.
        </p>
      </div>
    </div>
  )
}
