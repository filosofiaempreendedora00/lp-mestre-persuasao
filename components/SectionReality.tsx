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
        <h2 className="font-serif leading-tight mb-3" style={{ color: '#1a1a1a', fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          VOCÊ NÃO ACHA QUE JÁ{' '}
          <span style={{ color: '#c9953a' }}>PASSOU DA HORA</span>{' '}
          DE ACEITAR A REALIDADE COMO ELA É??
        </h2>
        <p className="mb-6 italic" style={{ color: '#aaa', fontSize: '0.95rem' }}>
          (E não como você GOSTARIA que ela fosse...)
        </p>
        <div className="divider" />

        <div
          className="text-lg leading-relaxed space-y-5 text-left rounded-2xl p-8 mt-6"
          style={{ backgroundColor: '#f7f5f0', border: '1px solid #e0d8c8', color: '#222' }}
        >
          <p>
            Esforço sem persuasão não serve de nada. Quem cresce mais rápido
            não é o mais qualificado — é aquele que sabe{' '}
            <strong className="text-gold">comunicar o próprio valor</strong>.
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
