import ingenieriaLogo from '../../assets/ingenieria-logo.svg'

export default function Signature({ variant = 'footer' }) {
  const large = variant === 'footer'

  return (
    <div className="relative inline-flex items-center justify-center py-2">
      <div className={`absolute -z-10 animate-pulse rounded-full bg-brand-400/30 blur-2xl ${large ? 'h-36 w-36' : 'h-24 w-24'}`} />
      <div className="animate-floaty relative overflow-hidden">
        <img
          src={ingenieriaLogo}
          alt="IngenierIA — Powered by HCG"
          className={large ? 'h-[192px] w-auto' : 'h-[120px] w-auto'}
        />
        <div className="shine-sweep pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent" />
      </div>
    </div>
  )
}
