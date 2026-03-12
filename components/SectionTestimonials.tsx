'use client'

import { useState } from 'react'

const testimonials = [
  {
    name: 'Rodrigo Santana',
    role: 'Representante Comercial',
    initials: 'RS',
    photo: 'https://randomuser.me/api/portraits/men/66.jpg',
    text: 'Cara, eu perdi conta de quantas vendas boas eu deixei escapar por não saber me posicionar. Tinha o melhor preço, o melhor produto... e mesmo assim levava não. Depois que aprendi a me apresentar diferente — antes mesmo de falar de valor — virou outro jogo. Fechei três contratos num mês que antes eu nunca teria fechado.',
  },
  {
    name: 'Camila Torres',
    role: 'Professora de Ensino Médio',
    initials: 'CT',
    photo: 'https://randomuser.me/api/portraits/women/41.jpg',
    text: 'Sempre achei que persuasão era coisa de vendedor ou político. Não era pra mim. Aí um dia percebi que tava perdendo minha própria turma — aluno mexendo no celular, conversando paralelo... Fiz o curso mais por curiosidade do que por convicção. Hoje a turma é outra. O respeito que eu recebia antes era diferente do que recebo agora.',
  },
  {
    name: 'Bruno Macedo',
    role: 'Analista de TI',
    initials: 'BM',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: 'Era o tipo de cara que chegava na reunião com a melhor solução e saía sem ninguém ter prestado atenção. Não é que eu era tímido, é que eu não sabia como fazer as pessoas comprarem o que eu falava. Aprendi isso aqui. Dois meses depois recebi uma promoção que eu esperava faz dois anos.',
  },
  {
    name: 'Priscila Nunes',
    role: 'Corretora de Imóveis',
    initials: 'PN',
    photo: 'https://randomuser.me/api/portraits/women/54.jpg',
    text: 'Já gastei dinheiro com curso de vendas, PNL, coaching... honestamente? Nenhum mudou nada de verdade. Esse foi diferente porque parou de me ensinar técnica e me ensinou a entender gente. Hoje eu ouço o cliente de um jeito que antes eu não ouvia — e aí a venda acontece quase que sozinha. As comissões triplicaram em quatro meses.',
  },
  {
    name: 'Fernanda Lima',
    role: 'Recepcionista',
    initials: 'FL',
    photo: 'https://randomuser.me/api/portraits/women/42.jpg',
    text: 'Eu não tenho empresa, não vendo nada. Comprei porque tava cansada de ser invisível nas reuniões — meu chefe cortava minha fala na metade e todo mundo deixava. Hoje eu entro numa sala e as pessoas me ouvem de um jeito diferente. Semana passada meu chefe me pediu pra apresentar pro cliente principal da empresa. Precisei ouvir duas vezes pra acreditar.',
  },
  {
    name: 'Diego Moraes',
    role: 'Estudante de Direito, 23 anos',
    initials: 'DM',
    photo: 'https://randomuser.me/api/portraits/men/60.jpg',
    text: 'Fiz porque um professor meu indicou — ele disse que direito é 90% comunicação e 10% lei. Não acreditei. Acredito agora. Aprendi a montar um argumento de um jeito que as pessoas não conseguem refutar sem parecer que estão sendo irracionais. Meu professor de processo perguntou de onde veio essa clareza. Não contei de onde.',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-5" aria-label="5 estrelas">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className="w-4 h-4" fill="#c9953a" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SectionTestimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="section-lg bg-section-dark">
      <div className="container-lp max-w-3xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            O QUE ESTÃO FALANDO SOBRE O{' '}
            <span className="text-gold">MESTRE DA PERSUASÃO</span>:
          </h2>
          <div className="divider" />
        </div>

        {/* Carrossel */}
        <div style={{ position: 'relative' }}>

          {/* Card */}
          <div
            key={current}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(201,149,58,0.2)',
              borderLeft: '4px solid #c9953a',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              minHeight: 240,
              animation: 'fadeSlide 0.35s ease',
            }}
          >
            {/* Aspas decorativas */}
            <div
              aria-hidden="true"
              style={{
                fontSize: '5rem',
                lineHeight: 0.7,
                color: 'rgba(201,149,58,0.18)',
                fontFamily: 'Georgia, serif',
                marginBottom: '0.5rem',
                userSelect: 'none',
              }}
            >
              "
            </div>

            <StarRating />

            <blockquote
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#c8d0db', fontStyle: 'italic' }}
            >
              {t.text}
            </blockquote>

            {/* Autor */}
            <footer className="flex items-center gap-4">
              <img
                src={t.photo}
                alt={t.name}
                width={44}
                height={44}
                className="rounded-full flex-shrink-0"
                style={{
                  width: 44,
                  height: 44,
                  objectFit: 'cover',
                  border: '2px solid rgba(201,149,58,0.5)',
                  boxShadow: '0 0 10px rgba(201,149,58,0.2)',
                }}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  const fallback = target.nextElementSibling as HTMLElement
                  if (fallback) fallback.style.display = 'flex'
                }}
              />
              <div
                className="w-11 h-11 rounded-full items-center justify-center text-black text-sm font-bold flex-shrink-0"
                style={{
                  display: 'none',
                  background: 'linear-gradient(135deg, #f0c060, #c9953a)',
                  boxShadow: '0 0 12px rgba(201,149,58,0.3)',
                }}
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-xs tracking-wide" style={{ color: '#c9953a' }}>{t.role}</p>
              </div>
            </footer>
          </div>

          {/* Setas */}
          <div className="flex items-center justify-between mt-8 gap-4">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,149,58,0.25)',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#c9953a',
                flexShrink: 0,
                transition: 'background 0.15s',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Navegação dos depoimentos">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Depoimento ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    border: 'none',
                    cursor: 'pointer',
                    background: i === current ? '#c9953a' : 'rgba(201,149,58,0.25)',
                    transition: 'width 0.3s ease, background 0.2s',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo depoimento"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,149,58,0.25)',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#c9953a',
                flexShrink: 0,
                transition: 'background 0.15s',
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Contador */}
          <p className="text-center mt-4 text-xs" style={{ color: 'rgba(201,149,58,0.5)' }}>
            {current + 1} / {testimonials.length}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
