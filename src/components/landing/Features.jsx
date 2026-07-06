import useReveal from '../../hooks/useReveal'

const features = [
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Responde con tus libros',
    desc: 'Busca la respuesta en el material real de la materia antes de contestar, no en conocimiento genérico de internet.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: 'Nunca inventa',
    desc: 'Si la respuesta no está en el material cargado, lo dice honestamente en vez de completar con una suposición.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
      </svg>
    ),
    title: 'Conoce el material de cada materia',
    desc: 'Empieza con Pastelería Avanzada y Catering y Eventos, y se amplía a cada materia sin tocar lo ya cargado.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
    title: 'Deriva al profesor cuando hace falta',
    desc: 'Si la pregunta necesita el criterio de un profesor, se lo dice al alumno en vez de arriesgar una respuesta a medias.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Disponible 24/7',
    desc: 'Dudas de estudio respondidas al instante, de día y de noche, sin esperar el horario de clase.',
  },
  {
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Habla como vos',
    desc: 'Cálido, claro y pedagógico. El alumno siente que le explica alguien de Gato Dumas, no un bot.',
  },
]

function FeatureCard({ f, i }) {
  const [ref, shown] = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} group relative overflow-hidden rounded-3xl border border-ink-200/70 bg-white/70 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card ${f.span || ''}`}
      style={{ animationDelay: `${i * 90}ms` }}
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-100/60 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
        {f.icon}
      </div>
      <h3 className="relative mt-5 text-xl font-bold text-ink-900">{f.title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{f.desc}</p>
    </div>
  )
}

export default function Features() {
  const [headRef, headShown] = useReveal()
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div ref={headRef} className={`reveal ${headShown ? 'is-visible' : ''} mx-auto max-w-2xl text-center`}>
          <div className="rule-title">
            <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
              Lo que <span className="gold-text">Gatto</span> hace por vos
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-ink-600">
            Menos tiempo buscando en el PDF antes del parcial. Más dudas resueltas
            al instante, con la info real de la materia.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} f={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
