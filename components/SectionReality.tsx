'use client'

import { useEffect, useRef } from 'react'

function AnimatedClock() {
  const hoursRef   = useRef<SVGLineElement>(null)
  const minutesRef = useRef<SVGLineElement>(null)
  const secondsRef = useRef<SVGLineElement>(null)

  useEffect(() => {
    function tick() {
      const now = new Date()
      const s = now.getSeconds() + now.getMilliseconds() / 1000
      const m = now.getMinutes() + s / 60
      const h = (now.getHours() % 12) + m / 60

      const sDeg = s * 6
      const mDeg = m * 6
      const hDeg = h * 30

      if (secondsRef.current) secondsRef.current.style.transform = `rotate(${sDeg}deg)`
      if (minutesRef.current) minutesRef.current.style.transform = `rotate(${mDeg}deg)`
      if (hoursRef.current)   hoursRef.current.style.transform   = `rotate(${hDeg}deg)`
    }

    tick()
    const id = setInterval(tick, 50)
    return () => clearInterval(id)
  }, [])

  return (
    <svg
      viewBox="0 0 100 100"
      width="90"
      height="90"
      aria-hidden="true"
      style={{ display: 'block', margin: '0 auto' }}
    >
      {/* Glow externo */}
      <defs>
        <filter id="clock-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="clock-face" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#2a2118"/>
          <stop offset="100%" stopColor="#0d0b07"/>
        </radialGradient>
      </defs>

      {/* Anel externo dourado */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#c9953a" strokeWidth="2.5" opacity="0.9" filter="url(#clock-glow)"/>
      {/* Segundo anel interno */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#c9953a" strokeWidth="0.5" opacity="0.3"/>
      {/* Face */}
      <circle cx="50" cy="50" r="43" fill="url(#clock-face)"/>

      {/* Marcadores das horas */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180)
        const x1 = 50 + Math.cos(angle) * 37
        const y1 = 50 + Math.sin(angle) * 37
        const x2 = 50 + Math.cos(angle) * (i % 3 === 0 ? 31 : 34)
        const y2 = 50 + Math.sin(angle) * (i % 3 === 0 ? 31 : 34)
        return (
          <line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="#c9953a"
            strokeWidth={i % 3 === 0 ? 2 : 0.8}
            opacity={i % 3 === 0 ? 1 : 0.5}
          />
        )
      })}

      {/* Ponteiro das horas */}
      <line
        ref={hoursRef}
        x1="50" y1="50" x2="50" y2="24"
        stroke="#e8c97a"
        strokeWidth="3.5"
        strokeLinecap="round"
        style={{ transformOrigin: '50px 50px', transition: 'transform 0.1s ease' }}
      />
      {/* Ponteiro dos minutos */}
      <line
        ref={minutesRef}
        x1="50" y1="50" x2="50" y2="16"
        stroke="#c9953a"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={{ transformOrigin: '50px 50px', transition: 'transform 0.1s ease' }}
      />
      {/* Ponteiro dos segundos */}
      <line
        ref={secondsRef}
        x1="50" y1="56" x2="50" y2="13"
        stroke="#e05a3a"
        strokeWidth="1.2"
        strokeLinecap="round"
        style={{ transformOrigin: '50px 50px' }}
      />
      {/* Centro */}
      <circle cx="50" cy="50" r="3" fill="#c9953a"/>
      <circle cx="50" cy="50" r="1.2" fill="#0d0b07"/>
    </svg>
  )
}

export default function SectionReality() {
  const persuasaoRef   = useRef<HTMLSpanElement>(null)
  const manipulacaoRef = useRef<HTMLSpanElement>(null)
  const gostariaRef    = useRef<HTMLSpanElement>(null)

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
    if (persuasaoRef.current)   observer.observe(persuasaoRef.current)
    if (manipulacaoRef.current) observer.observe(manipulacaoRef.current)
    if (gostariaRef.current)    observer.observe(gostariaRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-lp max-w-3xl mx-auto text-center">

        {/* Relógio animado */}
        <div style={{ marginBottom: '1.5rem' }}>
          <AnimatedClock />
        </div>

        <h2 className="font-serif leading-tight mb-3" style={{ color: '#1a1a1a', fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          VOCÊ NÃO ACHA QUE JÁ PASSOU DA HORA DE{' '}
          <span style={{ color: '#c9953a' }}>ACEITAR A REALIDADE</span>{' '}
          COMO ELA É??
        </h2>
        <p className="mb-6 italic" style={{ color: '#aaa', fontSize: '0.95rem' }}>
          (E não como você <span ref={gostariaRef} className="word-brush-gold font-bold" style={{ color: '#c9953a' }}>GOSTARIA</span> que ela fosse...)
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
