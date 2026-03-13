'use client'

import { useEffect, useRef } from 'react'

/* ─── Ícone de templo grego ─── */
function TempleIcon() {
  return (
    <svg
      viewBox="0 0 160 92"
      width="148"
      height="85"
      aria-hidden="true"
      fill="none"
      style={{ display: 'block', margin: '0 auto' }}
    >
      <defs>
        <linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0c96b" />
          <stop offset="100%" stopColor="#9a6e22" />
        </linearGradient>
        <filter id="tglow">
          <feGaussianBlur stdDeviation="1.8" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Pedimento */}
      <polygon
        points="80,5 150,29 10,29"
        stroke="url(#tg)" strokeWidth="1.8" fill="rgba(201,149,58,0.05)"
        strokeLinejoin="round" filter="url(#tglow)"
      />
      {/* Estrela no topo do pedimento */}
      <circle cx="80" cy="14" r="2.5" fill="#c9953a" opacity="0.7" />

      {/* Entablatura */}
      <rect x="10" y="29" width="140" height="9" rx="1" fill="rgba(201,149,58,0.12)" />
      <rect x="10" y="29" width="140" height="2"  rx="0.5" fill="url(#tg)" opacity="0.85" />
      <rect x="10" y="36" width="140" height="2"  rx="0.5" fill="url(#tg)" opacity="0.45" />

      {/* 5 colunas */}
      {[24, 52, 80, 108, 136].map((x, i) => (
        <g key={i}>
          {/* Capital */}
          <rect x={x - 7} y="38" width="14" height="4" rx="0.8" fill="url(#tg)" opacity="0.75" />
          {/* Fuste */}
          <rect x={x - 5} y="42" width="10" height="30" rx="2" fill="none" stroke="url(#tg)" strokeWidth="1.5" opacity="0.65" />
          {/* Estrias */}
          <line x1={x - 2} y1="42" x2={x - 2} y2="72" stroke="#c9953a" strokeWidth="0.5" opacity="0.22" />
          <line x1={x + 2} y1="42" x2={x + 2} y2="72" stroke="#c9953a" strokeWidth="0.5" opacity="0.22" />
          {/* Base */}
          <rect x={x - 7} y="72" width="14" height="4" rx="0.8" fill="url(#tg)" opacity="0.75" />
        </g>
      ))}

      {/* Estilóbata */}
      <rect x="6"  y="76" width="148" height="5" rx="1" fill="url(#tg)" opacity="0.5" />
      <rect x="2"  y="81" width="156" height="6" rx="1" fill="url(#tg)" opacity="0.75" />
    </svg>
  )
}

/* ─── Ícones dos pilares ─── */
const EthosIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 icon-float" aria-hidden="true">
    {/* Escudo */}
    <path
      d="M24 6L10 12v10c0 9.4 6.2 18.2 14 21 7.8-2.8 14-11.6 14-21V12L24 6z"
      stroke="#c9953a" strokeWidth="2.2" strokeLinejoin="round"
      fill="rgba(201,149,58,0.07)"
    />
    {/* Estrela dentro do escudo */}
    <path
      d="M24 17l1.6 4.9H31l-4.2 3 1.6 4.9L24 27l-4.4 2.8 1.6-4.9-4.2-3h5.4L24 17z"
      fill="#c9953a" opacity="0.85"
    />
  </svg>
)

const PathosIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 icon-heartbeat" aria-hidden="true">
    <path
      d="M24 38S8 27 8 17a9 9 0 0 1 16-5.66A9 9 0 0 1 40 17c0 10-16 21-16 21z"
      stroke="#c9953a" strokeWidth="2.3" strokeLinejoin="round"
      fill="rgba(201,149,58,0.08)"
    />
    {/* Pulso cardiológico no interior */}
    <path d="M14 24h4l2-4 3 8 2-4h9" stroke="#c9953a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
  </svg>
)

const LogosIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11 icon-float" aria-hidden="true"
    style={{ animationDelay: '1.4s' }}>
    {/* Lâmpada — insight / lógica */}
    <path
      d="M24 9c-6.1 0-11 4.9-11 11 0 4.1 2.2 7.7 5.5 9.7V33h11v-3.3C32.8 27.7 35 24.1 35 20c0-6.1-4.9-11-11-11z"
      stroke="#c9953a" strokeWidth="2.2" strokeLinejoin="round"
      fill="rgba(201,149,58,0.07)"
    />
    {/* Base da lâmpada */}
    <line x1="19" y1="36" x2="29" y2="36" stroke="#c9953a" strokeWidth="2"   strokeLinecap="round" />
    <line x1="20" y1="39" x2="28" y2="39" stroke="#c9953a" strokeWidth="1.8" strokeLinecap="round" />
    {/* Filamento interno */}
    <path d="M21 20c0-1.7 1.3-3 3-3s3 1.3 3 3" stroke="#c9953a" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
  </svg>
)

/* ─── Dados dos pilares ─── */
const pillars = [
  {
    label: 'Ethos',
    greek: 'ΗΘΟΣ',
    title: 'Autoridade',
    desc: 'Construa credibilidade instantânea e faça qualquer sala te respeitar antes mesmo de você falar.',
    icon: <EthosIcon />,
    initStyle: { opacity: 0, transform: 'translateX(-55px)' } as React.CSSProperties,
    delay: '0s',
  },
  {
    label: 'Pathos',
    greek: 'ΠΑΘΟΣ',
    title: 'Emoção',
    desc: 'Mova pessoas ao nível emocional. Quem controla os sentimentos, controla as decisões.',
    icon: <PathosIcon />,
    initStyle: { opacity: 0, transform: 'translateY(45px)' } as React.CSSProperties,
    delay: '0.15s',
  },
  {
    label: 'Logos',
    greek: 'ΛΟΓΟΣ',
    title: 'Lógica',
    desc: 'Estruture argumentos irrefutáveis que convencem até os céticos mais resistentes.',
    icon: <LogosIcon />,
    initStyle: { opacity: 0, transform: 'translateX(55px)' } as React.CSSProperties,
    delay: '0.3s',
  },
]

export default function SectionCourse() {
  const cardRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity    = '1'
            el.style.transform  = 'none'
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    cardRefs.forEach((ref) => { if (ref.current) observer.observe(ref.current) })
    return () => observer.disconnect()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className="section-lg bg-section-dark-2"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Glow ambiental central */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '40%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw', height: '70vw',
          maxWidth: 900, maxHeight: 900,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,149,58,0.07) 0%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-lp" style={{ position: 'relative' }}>

        {/* ── Cabeçalho ── */}
        <div className="text-center max-w-2xl mx-auto" style={{ marginBottom: '3.5rem' }}>

          {/* Ícone do templo */}
          <div style={{ marginBottom: '1.5rem' }}>
            <TempleIcon />
          </div>

          {/* Badge */}
          <span className="badge-offer" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>
            OS TRÊS PILARES DE ARISTÓTELES
          </span>

          <h2
            className="font-serif text-white leading-tight"
            style={{
              fontSize: 'clamp(2rem, 6vw, 3.4rem)',
              marginTop: '1rem',
              textShadow: '0 0 40px rgba(201,149,58,0.25)',
            }}
          >
            O QUE É O{' '}
            <span className="text-gold">MESTRE DA PERSUASÃO</span>?
          </h2>
          <div className="divider" />
          <p className="text-gray-400 leading-relaxed" style={{ fontSize: '1.1rem' }}>
            Um treinamento prático baseado no sistema de persuasão dos grandes líderes da história —
            os <strong className="text-white">três pilares de Aristóteles</strong>.
          </p>
        </div>

        {/* ── Cards dos 3 pilares ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              ref={cardRefs[i]}
              style={{
                ...p.initStyle,
                transition: `opacity 0.75s cubic-bezier(0.22,1,0.36,1) ${p.delay}, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${p.delay}`,
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(201,149,58,0.18)',
                borderTop: '3px solid',
                borderTopColor: '#c9953a',
                borderRadius: 16,
                padding: '2.25rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '0.75rem',
                backdropFilter: 'blur(4px)',
              }}
            >
              {/* Ícone com anel giratório */}
              <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
                <div style={{
                  width: 88, height: 88,
                  borderRadius: '50%',
                  background: 'rgba(201,149,58,0.07)',
                  border: '1px solid rgba(201,149,58,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}>
                  {/* Anel giratório externo */}
                  <div
                    className="icon-ring"
                    style={{
                      position: 'absolute',
                      inset: -6,
                      borderRadius: '50%',
                      border: '1.5px dashed rgba(201,149,58,0.4)',
                    }}
                  />
                  {p.icon}
                </div>
              </div>

              {/* Label latino + letra grega entre parênteses */}
              <span className="font-serif text-gold" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', opacity: 0.9 }}>
                {p.label}{' '}
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', opacity: 0.6 }}>({p.greek})</span>
              </span>

              {/* Divisor mini */}
              <div style={{ width: 32, height: 1, background: 'linear-gradient(90deg, transparent, #c9953a, transparent)', margin: '0.15rem 0' }} />

              {/* Título */}
              <h3 className="font-serif text-white" style={{ fontSize: '1.35rem' }}>{p.title}</h3>

              {/* Descrição */}
              <p className="text-gray-400" style={{ fontSize: '0.92rem', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Tagline final ── */}
        <p className="text-center text-gray-500 text-lg max-w-lg mx-auto" style={{ marginTop: '3rem' }}>
          Domine os três e se torne uma{' '}
          <strong className="text-white">máquina de persuasão</strong>.
        </p>

      </div>
    </section>
  )
}
