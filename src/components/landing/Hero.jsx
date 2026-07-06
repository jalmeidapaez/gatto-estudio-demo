import { useNavigate } from 'react-router-dom'

const convo = [
  { from: 'user', text: 'Hola! Tengo una duda sobre cocción al vacío 🙋' },
  { from: 'bot',  text: '¡Hola! 😊 Contame qué necesitás saber y te explico con el material de la materia.' },
  { from: 'user', text: '¿Qué ventajas tiene esa técnica?' },
  { from: 'bot',  text: 'Conserva mejor los sabores, permite guardar el producto hasta 21 días en frío y reduce mermas. ¿Querés que profundice en algún punto?' },
]

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden">
      {/* Warm ambient mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl animate-meshdrift" />
        <div className="absolute top-40 -left-32 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl animate-meshdrift-slow" />
      </div>

      <main className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <div className="animate-slideUp">
          <span className="chip border border-brand-200 bg-brand-50 text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Agente Académico con IA
          </span>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-6xl">
            Conocé a <span className="gold-text">Gatto</span>,
            <br />tu compañero de estudio.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-600">
            Responde las dudas de los alumnos sobre el material de cada materia,
            las 24&nbsp;horas, citando siempre el contenido real de los libros
            cargados — y deriva al profesor cuando no tiene la respuesta.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button className="btn-gold text-base" onClick={() => navigate('/panel')}>
              Probar la demo
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <span className="text-sm text-ink-500">No necesitás instalar nada.</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {['Respuestas basadas en tus libros', 'Disponible 24/7', 'Deriva al profesor si hace falta'].map(t => (
              <span key={t} className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — floating chat widget */}
        <div className="animate-pop relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gold-grad opacity-20 blur-2xl" />
          <div className="animate-floaty overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-float">
            {/* Header */}
            <div className="grain relative flex items-center gap-3 bg-ink-grad px-5 py-4 text-white">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-grad text-xl shadow-gold">
                👨‍🍳
              </div>
              <div className="relative">
                <div className="font-serif text-lg font-semibold">Gatto</div>
                <div className="flex items-center gap-1.5 text-xs text-ink-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />
                  En línea
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-bg space-y-2.5 px-4 py-5">
              {convo.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className="max-w-[82%] px-4 py-2.5 text-sm leading-relaxed shadow-sm"
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
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}
