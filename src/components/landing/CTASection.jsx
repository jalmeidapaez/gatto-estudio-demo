import { useNavigate } from 'react-router-dom'
import useReveal from '../../hooks/useReveal'

export default function CTASection() {
  const navigate = useNavigate()
  const [ref, shown] = useReveal()

  return (
    <section className="px-6 py-20">
      <div
        ref={ref}
        className={`reveal ${shown ? 'is-visible' : ''} grain relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-ink-grad px-8 py-16 text-center shadow-float`}
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-300/25 blur-3xl animate-meshdrift" />
        <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand-200/20 blur-3xl animate-meshdrift-slow" />

        <p className="relative eyebrow text-brand-200">Probalo ahora</p>
        <h2 className="relative mt-3 text-4xl font-extrabold text-white sm:text-5xl">
          Mirá a <span className="text-brand-200">Gatto</span> en acción
        </h2>
        <p className="relative mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-200">
          Entrá al panel, escribile como si fueras un alumno con una duda de estudio
          y descubrí cómo respondería con el material real de la materia.
        </p>
        <button className="btn-gold relative mt-9 text-base" onClick={() => navigate('/panel')}>
          Entrar al panel
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}
