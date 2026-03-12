'use client'

import { useEffect, useRef } from 'react'

export default function SectionReality() {
  const persuasaoRef = useRef<HTMLSpanElement>(null)
  const manipulacaoRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('word-line-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )
    if (persuasaoRef.current) observer.observe(persuasaoRef.current)
    if (manipulacaoRef.current) observer.observe(manipulacaoRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-lp max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight mb-3" style={{ color: '#1a1a1a' }}>
          VOCÊ NÃO ACHA QUE JÁ PASSOU DA HORA DE ACEITAR A REALIDADE COMO ELA
          É??
        </h2>
        <p className="text-lg mb-6 italic" style={{ color: '#888' }}>
          (E não como você GOSTARIA que ela fosse)
        </p>
        <div className="divider" />

        <div
          className="text-lg leading-relaxed space-y-5 text-left rounded-2xl p-8 mt-6"
          style={{ backgroundColor: '#f7f5f0', border: '1px solid #e0d8c8', color: '#222' }}
        >
          <p>
            Aceite, de uma vez por todas: o mundo não é dos mais{' '}
            <strong style={{ color: '#1a1a1a' }}>ESFORÇADOS</strong> — e sim dos mais
            inteligentes e <strong className="text-gold">PERSUASIVOS</strong>...
          </p>
          <p>
            E, pelo amor de Deus: não vai cair no erro idiota de confundir{' '}
            <span ref={persuasaoRef} className="word-brush-gold font-bold">persuasão</span>{' '}
            com{' '}
            <span ref={manipulacaoRef} className="word-brush-red font-bold">manipulação</span>, hein...
          </p>
        </div>
      </div>
    </section>
  )
}
