export default function SectionEmotional() {
  return (
    <section className="section-lg" style={{ backgroundColor: '#f5f0e8', color: '#1a1a1a' }}>
      <div className="container-lp max-w-3xl mx-auto text-center">

        {/* Ornamento decorativo */}
        <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
          <div style={{ height: '1px', width: 48, background: 'linear-gradient(to right, transparent, #c9953a)' }} />
          <svg viewBox="0 0 40 20" fill="none" className="w-10 h-5" style={{ color: '#c9953a' }}>
            <path d="M20 2 L23 9 L30 9 L24.5 13.5 L26.5 20.5 L20 16.5 L13.5 20.5 L15.5 13.5 L10 9 L17 9 Z" fill="currentColor" opacity="0.85" />
          </svg>
          <div style={{ height: '1px', width: 48, background: 'linear-gradient(to left, transparent, #c9953a)' }} />
        </div>

        {/* Título grande */}
        <h2
          className="font-serif leading-tight mb-6"
          style={{ fontSize: 'clamp(1.9rem, 5vw, 3.4rem)', color: '#1a1a1a' }}
        >
          Meu Alecrim Dourado...{' '}
          <br className="hidden sm:block" />
          o mundo não é dos mais{' '}

          {/* "esforçados" com pincelada riscando */}
          <span style={{ position: 'relative', display: 'inline-block', color: '#999' }}>
            esforçados
            <svg
              viewBox="0 0 200 28"
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: '-3%',
                width: '106%',
                height: '16px',
                top: '52%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
              }}
            >
              <path
                d="M3,14 C20,7 48,20 82,13 C118,6 152,18 180,12 C190,9 196,13 199,12"
                stroke="#a07838"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                opacity="0.55"
              />
              <path
                d="M5,13 C28,10 60,16 98,12 C135,8 165,14 196,11"
                stroke="#c9953a"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
              />
              <path
                d="M45,15 C68,11 95,17 122,13"
                stroke="#a07838"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                opacity="0.2"
              />
            </svg>
          </span>

          {', '}e sim dos mais{' '}
          <em style={{ color: '#a67928', fontStyle: 'italic' }}>persuasivos</em>...
        </h2>

        <div className="divider" />

        {/* Parágrafo de apoio */}
        <p
          className="text-xl leading-relaxed mb-12 mt-4"
          style={{ color: '#444', background: 'none' }}
        >
          E <strong style={{ color: '#1a1a1a' }}>você</strong>? Teria a coragem de se
          tornar um{' '}
          <strong style={{ color: '#a67928' }}>Mestre da Persuasão</strong>, e
          influenciar todos ao seu redor?
        </p>

        {/* Setas animadas */}
        <div className="flex flex-col items-center gap-1" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <svg
              key={i}
              viewBox="0 0 24 14"
              fill="none"
              className="w-7 h-4"
              style={{
                color: '#c9953a',
                opacity: 1 - i * 0.28,
                animation: `arrowBounce 1.4s ease-in-out ${i * 0.18}s infinite`,
              }}
            >
              <path
                d="M2 2l10 10L22 2"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }
      `}</style>
    </section>
  )
}
