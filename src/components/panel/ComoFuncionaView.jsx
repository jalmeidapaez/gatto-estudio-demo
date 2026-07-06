const pasos = [
  {
    n: 1,
    titulo: 'Cargamos los libros de cada materia al sistema',
    desc: 'Los PDFs de las asignaturas se procesan y quedan disponibles para que Gatto los consulte.',
  },
  {
    n: 2,
    titulo: 'Gatto responde consultas basándose solo en ese contenido',
    desc: 'Nada de improvisar: si está en el libro, lo explica bien. Si no, lo dice honestamente.',
  },
  {
    n: 3,
    titulo: 'Si no encuentra la respuesta, deriva al profesor',
    desc: 'Sin inventar ni completar con información genérica de internet.',
  },
  {
    n: 4,
    titulo: 'Cada materia nueva se suma sin tocar el resto',
    desc: 'Agregar un libro no afecta lo que ya está cargado ni cómo responde sobre otras materias.',
  },
]

const chatPreview = [
  { from: 'user', text: 'Hola! ¿Qué es la cocción al vacío?' },
  { from: 'bot',  text: 'Es una técnica que combina el envasado al vacío con cocción a baja temperatura constante. Conserva mejor sabores y texturas. ¿Querés que te cuente las ventajas?' },
]

const problemas = [
  'Alumnos con dudas fuera del horario de clase, sin nadie que responda.',
  'Profesores repitiendo las mismas explicaciones básicas una y otra vez.',
  'Material disperso en PDFs que nadie relee antes del parcial.',
]
const soluciones = [
  'Responde al instante, las 24 horas.',
  'Se basa únicamente en el material real de la materia.',
  'Deriva al profesor cuando la pregunta lo amerita.',
]

export default function ComoFuncionaView() {
  return (
    <div className="max-w-3xl px-6 py-8">
      <p className="eyebrow">La idea, en criollo</p>
      <h2 className="mt-1 font-serif text-3xl font-bold text-ink-900">Cómo funciona</h2>
      <p className="mt-1 text-ink-500">Sin tecnicismos: qué es esto y por qué le sirve a Gato Dumas.</p>

      {/* Bloque 1 */}
      <div className="mt-6 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
        <h3 className="mb-3 font-serif text-xl font-bold text-ink-900">¿Qué es esto?</h3>
        <p className="text-sm leading-relaxed text-ink-600">
          Gatto es un asistente de estudio con inteligencia artificial. Atiende a los alumnos
          que le escriben por el chat de la web, les responde dudas sobre el material de sus
          materias, y busca la respuesta en los libros reales cargados antes de contestar.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-600">
          Lo que estás viendo es una demo: podés escribirle desde la pestaña "Chat con Gatto"
          como si fueras un alumno y ver cómo respondería en la vida real.
        </p>
      </div>

      {/* Bloque 2 — Problema/Solución */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
          <h3 className="mb-3 text-base font-bold text-ink-800">El problema de todos los días</h3>
          <ul className="space-y-2.5 text-sm text-ink-600">
            {problemas.map(t => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-red-100 text-red-500">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M18 6 6 18M6 6l12 12" /></svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-ink-200 bg-white p-5 shadow-soft">
          <h3 className="mb-3 text-base font-bold text-ink-800">Cómo lo resuelve Gatto</h3>
          <ul className="space-y-2.5 text-sm text-ink-600">
            {soluciones.map(t => (
              <li key={t} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg className="h-2.5 w-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bloque 3 — No reemplaza */}
      <div className="mt-4 flex items-start gap-4 rounded-2xl border border-ink-200 bg-white p-6 shadow-soft">
        <span className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gold-grad text-2xl shadow-gold">🤝</span>
        <div>
          <h3 className="font-serif text-lg font-bold text-ink-900">Gatto no reemplaza al profesor: te ayuda a repasar</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            Se encarga de las dudas de repaso y consulta rápida sobre el material, y deriva al
            profesor lo que de verdad necesita una explicación en clase o un criterio pedagógico.
            El resultado: alumnos que llegan mejor preparados, profesores con menos preguntas repetidas.
          </p>
        </div>
      </div>

      {/* Bloque 4 — Chat preview + pasos */}
      <div className="mt-4 grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        {/* Chat widget mockup (canal real: web embebida) */}
        <div className="mx-auto w-64 overflow-hidden rounded-[1.5rem] border border-ink-200 bg-white shadow-float">
          <div className="grain relative flex items-center gap-2.5 bg-ink-grad px-3.5 py-3 text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-grad text-sm">👨‍🍳</div>
            <div>
              <p className="text-xs font-semibold">Gatto</p>
              <p className="text-[10px] text-emerald-300">en línea</p>
            </div>
          </div>
          <div className="chat-bg space-y-1.5 p-3">
            {chatPreview.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className="max-w-[85%] rounded-lg px-2.5 py-1.5 text-[10px] leading-relaxed shadow-sm"
                  style={{
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

        {/* Steps */}
        <div>
          {pasos.map(p => (
            <div key={p.n} className="mb-5 flex items-start gap-4">
              <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white shadow-soft">
                {p.n}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink-900">{p.titulo}</h4>
                <p className="mt-0.5 text-xs text-ink-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div className="grain relative mt-6 overflow-hidden rounded-3xl bg-ink-grad px-8 py-12 text-center shadow-float">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/25 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand-600/20 blur-2xl" />
        <h3 className="relative font-serif text-2xl font-bold text-white">Imaginate esto ayudando a cada alumno de Gato Dumas</h3>
        <p className="relative mx-auto mt-2 max-w-lg text-ink-200">
          Menos tiempo buscando en el PDF antes del parcial, menos preguntas repetidas para los profesores.
          Más alumnos que llegan a clase con la duda ya resuelta.
        </p>
        <a href="mailto:automatizacioneshcg@gmail.com" className="btn-gold relative mt-6 text-sm">
          Hablemos de cómo llevarlo a Gato Dumas
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </div>
  )
}
