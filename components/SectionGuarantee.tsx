export default function SectionGuarantee() {
  return (
    <section
      className="section-lg"
      style={{
        background: 'linear-gradient(160deg, #0d1b2e 0%, #091524 60%, #0a1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Halo decorativo de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,149,58,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-lp max-w-2xl mx-auto text-center" style={{ position: 'relative' }}>

        {/* Ícone premium — medalha/lacre */}
        <div className="flex justify-center mb-8">
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              background: 'linear-gradient(145deg, #1e2e20, #0d1a10)',
              border: '2px solid rgba(201,149,58,0.5)',
              boxShadow: '0 0 0 6px rgba(201,149,58,0.08), 0 0 40px rgba(201,149,58,0.18)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            {/* Anel interno */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 8,
                borderRadius: '50%',
                border: '1px solid rgba(201,149,58,0.25)',
              }}
            />
            {/* Medalha SVG */}
            <svg
              viewBox="0 0 64 64"
              fill="none"
              className="w-14 h-14"
              aria-hidden="true"
            >
              {/* Fita superior */}
              <path d="M22 4 L32 16 L42 4" stroke="#c9953a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 4 L32 12 L38 4" fill="rgba(201,149,58,0.15)" stroke="none" />
              {/* Círculo da medalha */}
              <circle cx="32" cy="38" r="18" fill="url(#medalGold)" />
              <circle cx="32" cy="38" r="14" fill="none" stroke="rgba(255,220,120,0.3)" strokeWidth="1.5" />
              {/* Estrela / check */}
              <path
                d="M23 38 L29 44 L41 32"
                stroke="#1a0f00"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <radialGradient id="medalGold" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#f0c060" />
                  <stop offset="55%" stopColor="#c9953a" />
                  <stop offset="100%" stopColor="#8a5e1a" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Tag */}
        <div className="flex justify-center mb-4">
          <span
            className="font-sans text-xs uppercase tracking-[0.3em]"
            style={{
              color: '#c9953a',
              background: 'rgba(201,149,58,0.08)',
              border: '1px solid rgba(201,149,58,0.3)',
              borderRadius: 4,
              padding: '4px 16px',
            }}
          >
            Garantia Incondicional
          </span>
        </div>

        {/* Título */}
        <h2
          className="font-serif leading-tight mb-2"
          style={{ fontSize: 'clamp(2rem, 5vw, 2.8rem)', color: '#ffffff' }}
        >
          7 Dias para Testar,{' '}
          <span style={{ color: '#c9953a' }}>Sem Nenhum Risco</span>
        </h2>

        {/* Divisor */}
        <div className="divider" />

        {/* Corpo do texto */}
        <div
          className="text-lg leading-relaxed space-y-4"
          style={{ color: '#b0b8c4', maxWidth: 540, margin: '0 auto' }}
        >
          <p>
            Assinando hoje o Mestre da Persuasão, você ganha{' '}
            <strong style={{ color: '#fff' }}>7 dias de garantia incondicional</strong>.
          </p>
          <p>
            Em outras palavras, você pode testar à vontade o curso durante esse período. Se
            você achar que ele não é para você, basta enviar um e-mail para{' '}
            <a
              href="mailto:suporte@filosofiaempreendedora.com"
              style={{ color: '#c9953a' }}
            >
              suporte@filosofiaempreendedora.com
            </a>{' '}
            e eu te devolverei cada centavo investido.
          </p>
          <p style={{ color: '#d4dce6' }}>
            Portanto, sim:{' '}
            <strong style={{ color: '#c9953a', fontSize: '1.1em' }}>
              o seu risco é ZERO
            </strong>
            . Você não tem nada a perder.
          </p>
        </div>

        {/* Selos de confiança */}
        <div
          className="grid grid-cols-3 gap-4 mt-10"
          style={{ borderTop: '1px solid rgba(201,149,58,0.15)', paddingTop: '2rem' }}
        >
          {[
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              ),
              label: 'Reembolso integral',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              ),
              label: 'Compra 100% segura',
            },
            {
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9953a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              label: 'Prazo de 7 dias',
            },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center" style={{ color: '#8a96a4', fontSize: '0.8rem' }}>
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
