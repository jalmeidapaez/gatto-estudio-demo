export default function Signature({ variant = 'footer' }) {
  const stacked = variant === 'footer'

  return (
    <div className={stacked ? 'flex flex-col items-center gap-1.5' : 'flex flex-col gap-1'}>
      <span className={`font-extrabold tracking-tight text-ink-600 ${stacked ? 'text-sm' : 'text-xs'}`}>
        Ingenier<span className="ingenieria-mark">IA</span>
      </span>
      <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-400">
        <span className="relative flex h-1.5 w-1.5 flex-none">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-500" />
        </span>
        Powered by HCG
      </span>
    </div>
  )
}
