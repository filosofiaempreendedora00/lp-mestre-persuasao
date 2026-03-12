const included = [
  'Módulo I — As Raízes da Persuasão',
  'Módulo II — Como Conquistar Respeito Imediato (Ethos)',
  'Módulo III — Como Mover Pessoas pela Emoção (Pathos)',
  'Módulo IV — Como Construir Argumentos Irrefutáveis (Logos)',
  'Módulo V — Persuasão em Ação',
  'Acesso vitalício — estude no seu ritmo, para sempre',
  'Garantia incondicional de 7 dias',
]

export default function SectionPricing() {
  const today = new Date().toLocaleDateString('pt-BR')

  return (
    <section className="section-lg bg-pricing" id="oferta">
      <div className="container-lp max-w-2xl mx-auto">

        {/* Badge */}
        <div className="text-center mb-6">
          <span className="badge-offer">⚡ OFERTA POR TEMPO LIMITADO</span>
        </div>

        {/* Card principal */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 0 0 1px rgba(201,149,58,0.4), 0 0 60px rgba(201,149,58,0.15)',
        }}>

          {/* Header degradê */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1200 0%, #3a2800 40%, #1a1200 100%)',
            padding: '1.75rem 2rem 1.5rem',
            textAlign: 'center',
            borderBottom: '2px solid #c9953a',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div aria-hidden="true" style={{
              position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
              width: '300px', height: '120px',
              background: 'radial-gradient(ellipse, rgba(201,149,58,0.25) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <p className="font-sans text-xs uppercase tracking-[0.3em] mb-2" style={{ color: '#c9953a' }}>
              Acesso Vitalício Incluído
            </p>
            <h2 className="font-serif leading-tight" style={{ fontSize: 'clamp(1.4rem, 4vw, 2rem)', color: '#ffffff' }}>
              MESTRE DA <span style={{ color: '#c9953a' }}>PERSUASÃO</span>
            </h2>
            <div className="inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold"
              style={{ background: 'rgba(201,149,58,0.15)', border: '1px solid rgba(201,149,58,0.4)', color: '#e0b96a' }}>
              Economize R$310,00 — oferta válida hoje, {today}
            </div>
          </div>

          {/* Corpo */}
          <div style={{ padding: '1.5rem 2rem 2rem', background: '#ffffff' }}>

            {/* Lista */}
            <h3 className="font-serif text-lg mb-3" style={{ color: '#1a1a1a' }}>
              O que você vai receber hoje:
            </h3>
            <ul className="space-y-2 mb-5">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm" style={{ color: '#333' }}>
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c9953a' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Bloco de preço */}
            <div style={{
              background: 'linear-gradient(135deg, #f9f4ec 0%, #fff8ee 100%)',
              border: '1.5px solid rgba(201,149,58,0.35)',
              borderRadius: '14px',
              padding: '1.25rem 1.5rem',
              textAlign: 'center',
              marginBottom: '1.25rem',
            }}>
              {/* Preço riscado — ancoragem clara */}
              <p className="text-base mb-2" style={{ color: '#888' }}>
                De{' '}
                <span style={{ textDecoration: 'line-through', color: '#999', fontWeight: 600, fontSize: '1.1rem' }}>
                  R$497,00
                </span>
              </p>

              {/* Parcelado — tipografia uniforme */}
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span style={{ color: '#666', fontSize: '0.9rem', fontWeight: 600 }}>12x de</span>
                <span className="font-serif" style={{ fontSize: '2.6rem', color: '#1a1a1a', fontWeight: 700, lineHeight: 1 }}>
                  R$19,34
                </span>
              </div>

              <div style={{ height: '1px', background: 'rgba(201,149,58,0.25)', margin: '0.75rem 0' }} />

              {/* À vista */}
              <p className="text-sm" style={{ color: '#555' }}>
                ou <strong style={{ fontSize: '1.2rem', color: '#a67928' }}>R$187,00</strong> à vista no PIX ou cartão
              </p>
            </div>

            {/* Botão 3D dourado */}
            <div className="text-center">
              <a
                href="https://pay.kiwify.com.br/cvyDT6p"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-3d btn-gold-pulse font-serif"
                style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}
              >
                QUERO ME TORNAR UM MESTRE DA PERSUASÃO
              </a>

              {/* Selos com ícones on-brand */}
              <div className="flex items-center justify-center gap-5 mt-4" style={{ color: '#777', fontSize: '0.72rem' }}>
                <span className="flex flex-col items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Compra segura
                </span>
                <span className="flex flex-col items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  Garantia 7 dias
                </span>
                <span className="flex flex-col items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Acesso imediato
                </span>
                <span className="flex flex-col items-center gap-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  Vitalício
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
