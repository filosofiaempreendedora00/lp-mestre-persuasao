export default function SectionCourse() {
  const pillars = [
    {
      label: 'Ethos',
      title: 'Autoridade',
      desc: 'Construa credibilidade instantânea e faça qualquer sala te respeitar antes de falar.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
          <circle cx="24" cy="15" r="7" stroke="#c9953a" strokeWidth="2.5" />
          <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#c9953a" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M24 28v6M21 31h6" stroke="#c9953a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      label: 'Pathos',
      title: 'Emoção',
      desc: 'Mova pessoas ao nível emocional. Quem controla os sentimentos, controla as decisões.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
          <path d="M24 38S8 28 8 17a9 9 0 0 1 16-5.66A9 9 0 0 1 40 17c0 11-16 21-16 21z" stroke="#c9953a" strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      label: 'Logos',
      title: 'Lógica',
      desc: 'Estruture argumentos irrefutáveis que convencem até os céticos mais resistentes.',
      icon: (
        <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10" aria-hidden="true">
          <rect x="8" y="8" width="32" height="32" rx="4" stroke="#c9953a" strokeWidth="2.5" />
          <path d="M15 24h18M15 17h10M15 31h14" stroke="#c9953a" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-lg bg-section-dark-2">
      <div className="container-lp">
        {/* Cabeçalho centralizado */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-white leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)' }}>
            O QUE É O{' '}
            <span className="text-gold">MESTRE DA PERSUASÃO</span>?
          </h2>
          <div className="divider" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Um treinamento prático baseado no sistema de persuasão dos grandes líderes da história —
            os <strong className="text-white">três pilares de Aristóteles</strong>.
          </p>
        </div>

        {/* Cards dos 3 pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center text-center rounded-2xl p-8 gap-4"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,149,58,0.2)' }}
            >
              {/* Ícone com halo dourado */}
              <div
                className="flex items-center justify-center rounded-full w-20 h-20 mb-2"
                style={{ background: 'rgba(201,149,58,0.08)', border: '1px solid rgba(201,149,58,0.25)' }}
              >
                {p.icon}
              </div>

              {/* Label grego */}
              <span className="font-serif text-xs tracking-[0.25em] uppercase text-gold opacity-80">
                {p.label}
              </span>

              {/* Título */}
              <h3 className="font-serif text-xl text-white">{p.title}</h3>

              {/* Descrição curta */}
              <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Tagline final */}
        <p className="text-center text-gray-500 text-lg mt-10 max-w-lg mx-auto">
          Domine os três e se torne uma{' '}
          <strong className="text-white">máquina de persuasão</strong>.
        </p>
      </div>
    </section>
  )
}
