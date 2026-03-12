const modules = [
  {
    roman: 'I',
    title: 'As Raízes da Persuasão',
    tag: null,
    description: 'Descubra o sistema milenar que os grandes líderes usaram para mover multidões, fechar negócios e mudar o mundo.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M16 4L4 28h24L16 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M10 28V18h12v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    roman: 'II',
    title: 'Como Conquistar Respeito Imediato',
    tag: 'Ethos',
    description: 'Projete credibilidade e autoridade em segundos — antes mesmo de abrir a boca.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="16" cy="10" r="5" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 28c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    roman: 'III',
    title: 'Como Mover Pessoas pela Emoção',
    tag: 'Pathos',
    description: 'Aprenda a despertar sentimentos que eliminam resistências e tornam o "sim" inevitável.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M16 26S4 18 4 11a7 7 0 0 1 12-4.9A7 7 0 0 1 28 11c0 7-12 15-12 15z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    roman: 'IV',
    title: 'Como Construir Argumentos Irrefutáveis',
    tag: 'Logos',
    description: 'Estruture raciocínios tão sólidos que nenhuma objeção consegue derrubar.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M9 16h14M9 11h8M9 21h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    roman: 'V',
    title: 'Persuasão em Ação',
    tag: null,
    description: 'Integre os três pilares e aplique o sistema completo em negócios, carreira e relações do dia a dia.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-5 h-5" aria-hidden="true">
        <path d="M6 26l6-6 4 4 10-12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function SectionModules() {
  return (
    <section className="section-lg bg-section-dark">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-white leading-tight" style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)' }}>
            O que você terá acesso no{' '}
            <span className="text-gold">MESTRE DA PERSUASÃO</span>:
          </h2>
          <div className="divider" />
        </div>

        <div className="space-y-3">
          {modules.map((mod, i) => (
            <div
              key={mod.roman}
              className="group rounded-2xl px-6 py-5 flex gap-5 items-center transition-all duration-200"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,149,58,0.15)',
              }}
            >
              {/* Número romano + ícone */}
              <div
                className="flex-shrink-0 flex flex-col items-center justify-center gap-1 w-14 h-14 rounded-xl"
                style={{ background: 'rgba(201,149,58,0.1)', border: '1px solid rgba(201,149,58,0.3)', color: '#c9953a' }}
              >
                <span className="font-serif text-xs leading-none" style={{ color: '#c9953a' }}>{mod.icon}</span>
                <span className="font-serif text-xs leading-none tracking-wide" style={{ color: '#c9953a' }}>{mod.roman}</span>
              </div>

              {/* Conteúdo */}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base sm:text-lg text-white leading-snug">
                  {mod.title}
                  {mod.tag && (
                    <span className="ml-2 font-sans font-normal text-xs tracking-widest uppercase" style={{ color: '#c9953a' }}>
                      ({mod.tag})
                    </span>
                  )}
                </h3>
                <p className="text-gray-300 mt-1 leading-relaxed text-sm">{mod.description}</p>
              </div>

              {/* Linha decorativa lateral */}
              <div
                className="hidden sm:block flex-shrink-0 w-0.5 self-stretch rounded-full opacity-30"
                style={{ background: 'linear-gradient(to bottom, transparent, #c9953a, transparent)' }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
