import { useEffect, useRef, useState } from 'react'

/**
 * Scroll-reveal hook. Adds `is-visible` when the element enters the viewport.
 * Usage:
 *   const [ref, shown] = useReveal()
 *   <div ref={ref} className={`reveal ${shown ? 'is-visible' : ''}`} style={{ animationDelay: '120ms' }}>
 */
export default function useReveal(options = { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true)
        obs.unobserve(entry.target)
      }
    }, options)
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return [ref, shown]
}
