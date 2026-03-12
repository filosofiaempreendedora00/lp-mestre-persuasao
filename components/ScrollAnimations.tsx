'use client'
import { useEffect } from 'react'

export default function ScrollAnimations() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('anim-in'); obs.unobserve(e.target) } }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const observe = (sel: string, cls: string, stagger = false) =>
      document.querySelectorAll(sel).forEach((el, i) => {
        el.classList.add(cls)
        if (stagger) (el as HTMLElement).style.transitionDelay = `${(i % 8) * 0.08}s`
        obs.observe(el)
      })

    // Títulos — fade up
    observe('section h2', 'anim-up')
    observe('.badge-offer, .divider', 'anim-up')

    // Checklist e FAQ — slide da esquerda, escalonados
    observe('.check-item', 'anim-left', true)
    observe('details.faq-item', 'anim-left', true)

    // Pricing — fade up
    observe('.pricing-card', 'anim-up')

    // Ícones / medalha / imagens — scale in
    observe('section img:not([aria-hidden="true"]):not(.rounded-full)', 'anim-scale')

    // Módulos — alterna esquerda / direita com stagger
    document.querySelectorAll('.space-y-3 > div').forEach((el, i) => {
      el.classList.add(i % 2 === 0 ? 'anim-left' : 'anim-right')
      ;(el as HTMLElement).style.transitionDelay = `${i * 0.07}s`
      obs.observe(el)
    })

    return () => obs.disconnect()
  }, [])
  return null
}
