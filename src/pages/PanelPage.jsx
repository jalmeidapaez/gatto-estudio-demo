import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatView from '../components/panel/ChatView'
import ComoFuncionaView from '../components/panel/ComoFuncionaView'
import Signature from '../components/layout/Signature'

const items = [
  { id: 'chat', label: 'Chat con Gatto', icon: <ChatIcon /> },
  { id: 'como',  label: 'Cómo funciona',  icon: <HelpIcon /> },
]

const views = {
  chat: <ChatView />,
  como: <ComoFuncionaView />,
}

function Wordmark({ small }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={small ? 'text-xl' : 'text-2xl'}>🍳</span>
      <span className={`font-extrabold tracking-tight text-ink-900 ${small ? 'text-base' : 'text-lg'}`}>
        GatoDumas<span className="text-brand-600">AI</span>
      </span>
    </div>
  )
}

function NavList({ onSelect, active }) {
  return (
    <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
      {items.map(item => {
        const on = active === item.id
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
              on
                ? 'bg-ink-900 text-gold-light shadow-soft'
                : 'text-ink-600 hover:bg-ink-100'
            }`}
          >
            <span className={on ? 'text-gold-light' : 'text-ink-400 group-hover:text-ink-700'}>
              {item.icon}
            </span>
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}

export default function PanelPage() {
  const [active, setActive] = useState('chat')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const navigate = useNavigate()

  function selectView(id) {
    setActive(id)
    setDrawerOpen(false)
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-ink-50 lg:flex-row">

      {/* ── DESKTOP SIDEBAR ── */}
      <aside className="hidden lg:flex lg:h-screen lg:w-64 lg:flex-none lg:flex-col lg:border-r lg:border-ink-200 lg:bg-white/80">
        <div className="border-b border-ink-200 px-5 py-5">
          <Wordmark />
        </div>
        <NavList active={active} onSelect={setActive} />
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 border-t border-ink-200 px-5 py-4 text-sm text-ink-500 transition-colors hover:text-ink-800"
        >
          <ArrowLeftIcon /> Volver al inicio
        </button>
        <div className="border-t border-ink-200 px-5 py-4">
          <Signature variant="panel" />
        </div>
      </aside>

      {/* ── MOBILE HEADER ── */}
      <header className="flex items-center justify-between border-b border-ink-200 bg-white/80 px-4 py-3 lg:hidden">
        <button
          onClick={() => setDrawerOpen(true)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-700 hover:bg-ink-100"
          aria-label="Abrir menú"
        >
          <HamburgerIcon />
        </button>
        <Wordmark small />
        <div className="w-9" />
      </header>

      {/* ── DRAWER OVERLAY ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink-950/40 backdrop-blur-sm lg:hidden"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── DRAWER PANEL ── */}
      <div
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          drawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink-200 px-5 py-5">
          <Wordmark />
          <button
            onClick={() => setDrawerOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-ink-400 hover:bg-ink-100"
            aria-label="Cerrar menú"
          >
            <CloseIcon />
          </button>
        </div>
        <NavList active={active} onSelect={selectView} />
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 border-t border-ink-200 px-5 py-4 text-sm text-ink-500 hover:text-ink-800"
        >
          <ArrowLeftIcon /> Volver al inicio
        </button>
        <div className="border-t border-ink-200 px-5 py-4">
          <Signature variant="panel" />
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="flex flex-1 flex-col overflow-y-auto">
        {views[active]}
      </main>
    </div>
  )
}

/* ── Icons (Lucide-style) ── */
function ChatIcon()  { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg> }
function HelpIcon()  { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg> }
function HamburgerIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg> }
function CloseIcon() { return <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg> }
function ArrowLeftIcon() { return <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M19 12H5M11 6l-6 6 6 6" /></svg> }
