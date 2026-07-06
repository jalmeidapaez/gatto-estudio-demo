import { useEffect, useRef, useState } from 'react'

const stats = [
  { to: 24, suffix: '/7', label: 'Siempre disponible', hint: 'Ni feriados ni horarios' },
  { to: 2, suffix: '', label: 'Materias cargadas', hint: 'Ampliable a todo el temario' },
  { to: 25, suffix: ' años', label: 'De trayectoria Gato Dumas', hint: 'Líder en Argentina' },
  { to: 100, suffix: '%', label: 'Basado en el material real', hint: 'Nunca inventa una respuesta' },
]

function useCountUp(target, run, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf
    const start = performance.now()
    const tick = now => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [run, target, duration])
  return val
}

export default function StatsBand() {
  const ref = useRef(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setRun(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="px-6 py-6">
      <div className="grain relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink-grad px-8 py-12 shadow-float">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-300/25 blur-3xl" />
        <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(s => (
            <Stat key={s.label} s={s} run={run} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Stat({ s, run }) {
  const val = useCountUp(s.to, run)
  return (
    <div className="text-center md:text-left">
      <div className="text-4xl font-extrabold text-white sm:text-5xl">
        {val}
        <span className="text-brand-200">{s.suffix}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-white/90">{s.label}</div>
      <div className="mt-0.5 text-xs text-brand-100/70">{s.hint}</div>
    </div>
  )
}
