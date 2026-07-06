import Navbar from '../components/layout/Navbar'
import Signature from '../components/layout/Signature'
import Hero from '../components/landing/Hero'
import StatsBand from '../components/landing/StatsBand'
import Features from '../components/landing/Features'
import CTASection from '../components/landing/CTASection'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <Hero />
      <StatsBand />
      <Features />
      <CTASection />
      <footer className="border-t border-ink-200 py-10 text-center">
        <div className="flex items-center justify-center gap-2 text-lg font-extrabold text-ink-900">
          <span className="text-xl">🍳</span>
          GatoDumas<span className="text-brand-600">AI</span>
        </div>
        <p className="mt-2 text-sm text-ink-400">
          Gatto · Inteligencia Artificial de Gato Dumas — Demo de agente académico
        </p>
        <div className="mx-auto mt-6 h-px w-16 bg-ink-200" />
        <div className="mt-6 flex justify-center">
          <Signature />
        </div>
      </footer>
    </div>
  )
}
