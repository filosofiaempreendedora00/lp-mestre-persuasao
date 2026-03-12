'use client'

import { useEffect, useRef } from 'react'

const items = [
  {
    content: (
      <>Conheça a <strong>verdadeira</strong> persuasão…</>
    ),
  },
  {
    content: (
      <>Conhecimentos profundos que já <strong>venceram</strong> o tempo…</>
    ),
  },
  {
    content: (
      <>Convença todos ao seu redor a <strong>comprarem as suas ideias</strong>…</>
    ),
  },
  {
    content: (
      <>Seja <strong>ouvido</strong> e finalmente <strong>respeitado</strong> (inclusive dentro da sua própria casa)…</>
    ),
  },
  {
    content: (
      <>Construa argumentos sólidos e cresça <strong>45% mais rápido</strong>*</>
    ),
    footnote: '*Segundo um estudo de 2024 feito pela Universidade de Stanford',
  },
]

export default function SectionBenefit() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('benefit-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="section bg-section-dark-2">
      <div className="container-lp max-w-3xl mx-auto">

        {/* Título centralizado */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-gold text-center leading-tight mb-14">
          CHEGA DESSA M&amp;RD4.
        </h2>

        {/* Cards individuais */}
        <div className="space-y-5">
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardRefs.current[i] = el }}
              className={`benefit-card ${i % 2 === 0 ? 'benefit-from-left' : 'benefit-from-right'}`}
            >
              <div
                className="rounded-2xl px-8 py-6 text-white text-xl text-center"
                style={{
                  border: '1px solid rgba(201,149,58,0.35)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}
              >
                <p>{item.content}</p>
                {item.footnote && (
                  <p className="text-sm text-gray-500 mt-2 italic">{item.footnote}</p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
