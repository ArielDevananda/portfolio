import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis: Lenis | undefined

    function syncPreference() {
      lenis?.destroy()
      lenis = undefined

      // Return entirely to native scrolling when reduced motion is requested.
      if (reducedMotion.matches) return

      lenis = new Lenis({
        autoRaf: true,
        lerp: 0.18,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        anchors: true,
      })
    }

    syncPreference()
    reducedMotion.addEventListener('change', syncPreference)
    return () => {
      reducedMotion.removeEventListener('change', syncPreference)
      lenis?.destroy()
    }
  }, [])
}
