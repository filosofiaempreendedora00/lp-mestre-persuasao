export default function SectionHero() {
  return (
    <section
      className="hero-section"
      style={{
        background: 'linear-gradient(160deg, #0a0a0a 0%, #111008 40%, #0d0c04 70%, #000000 100%)',
        paddingTop: '3rem',
        paddingBottom: '4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Halo dourado de fundo */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70vw',
          height: '70vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(201,149,58,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-lp max-w-3xl mx-auto text-center" style={{ position: 'relative' }}>

        {/* Nome do produto animado */}
        <div style={{ marginBottom: '2rem' }}>
          <div className="hero-product-wrap justify-center"
            style={{
              display: 'inline-flex',
              background: 'rgba(201,149,58,0.07)',
              border: '1px solid rgba(201,149,58,0.35)',
              borderRadius: 6,
              padding: '6px 20px',
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: 18, height: 18, flexShrink: 0 }}>
              <path d="M2 17h20l-2-9-4 5-4-8-4 8-4-5-2 9z" fill="rgba(201,149,58,0.9)" stroke="#c9953a" strokeWidth="1.2" strokeLinejoin="round"/>
              <rect x="2" y="17" width="20" height="2.5" rx="1" fill="#c9953a" opacity="0.7"/>
            </svg>
            <span
              className="hero-product-shimmer font-serif"
              style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.05rem)', letterSpacing: '0.2em' }}
            >
              MESTRE DA PERSUASÃO
            </span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: 18, height: 18, flexShrink: 0 }}>
              <path d="M2 17h20l-2-9-4 5-4-8-4 8-4-5-2 9z" fill="rgba(201,149,58,0.9)" stroke="#c9953a" strokeWidth="1.2" strokeLinejoin="round"/>
              <rect x="2" y="17" width="20" height="2.5" rx="1" fill="#c9953a" opacity="0.7"/>
            </svg>
          </div>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: '1.25rem' }}>
          <h1
            className="font-serif text-white leading-tight"
            style={{ fontSize: 'clamp(1.35rem, 3.8vw, 2.1rem)' }}
          >
            CANSOU DE VER COLEGAS DE PROFISSÃO COM NEM{' '}
            <span style={{ color: '#c9953a' }}>METADE DO SEU CONHECIMENTO</span>{' '}
            GANHANDO{' '}
            <span style={{ color: '#c9953a' }}>MAIS DINHEIRO</span>{' '}
            QUE VOCÊ?
          </h1>
        </div>

        {/* Divisor */}
        <div className="divider" style={{ marginBottom: '1.5rem' }} />

        {/* Subtítulo */}
        <p
          className="leading-relaxed"
          style={{
            color: '#a0a8b4',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            maxWidth: 560,
            margin: '0 auto 2.5rem',
          }}
        >
          Então engole esse choro, assiste o vídeo abaixo e para de ficar
          dando murro em ponta de faca em uma carreira estagnada...
        </p>

        {/* Vídeo com moldura premium */}
        <div
          style={{
            padding: 2,
            borderRadius: 14,
            background: 'linear-gradient(135deg, #c9953a 0%, #f0c96b 40%, #8a5e1a 70%, #c9953a 100%)',
            boxShadow: '0 0 32px rgba(201,149,58,0.35), 0 0 80px rgba(201,149,58,0.12), 0 28px 56px rgba(0,0,0,0.7)',
          }}
        >
          <div
            style={{
              borderRadius: 12,
              overflow: 'hidden',
              background: '#000',
            }}
          >
          <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/BW0xQuUaxy0?rel=0&modestbranding=1"
              title="Mestre da Persuasão"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
          </div>
        </div>

      </div>
    </section>
  )
}
