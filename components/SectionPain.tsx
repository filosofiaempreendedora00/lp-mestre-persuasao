import Image from 'next/image'

const lies = [
  'Tigrinho, apostas esportivas e "renda fácil" da noite pro dia',
  'Cursos que te ensinam a vender… outros cursos',
  'Gurus que nunca empreenderam um dia sequer na vida',
]

export default function SectionPain() {
  return (
    <section className="section-lg bg-section-dark">
      <div className="container-lp">

        {/* Headline centralizada */}
        <div className="text-center anim-up" style={{ marginBottom: '3rem' }}>
          <span
            className="badge-offer"
            style={{ marginBottom: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ width: 14, height: 14 }}>
              <path d="M12 2L2 20h20L12 2z" stroke="#c9953a" strokeWidth="2" strokeLinejoin="round"/>
              <line x1="12" y1="9" x2="12" y2="14" stroke="#c9953a" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="17.5" r="0.8" fill="#c9953a"/>
            </svg>
            ATENÇÃO
          </span>

          <h2
            className="font-serif text-white leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginTop: '1rem' }}
          >
            O MARKETING MENTIROSO{' '}
            <span className="text-gold">TE ENGANA</span>{' '}
            TODOS OS DIAS...
          </h2>
          <div className="divider" />
        </div>

        {/* Grid 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Coluna esquerda — imagem com moldura e badge */}
          <div className="anim-left" style={{ position: 'relative' }}>

            {/* Moldura dourada na imagem */}
            <div style={{
              padding: 2,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #c9953a 0%, #f0c96b 45%, #8a5e1a 75%, #c9953a 100%)',
              boxShadow: '0 0 36px rgba(201,149,58,0.22), 0 24px 48px rgba(0,0,0,0.55)',
            }}>
              <div style={{ borderRadius: 12, overflow: 'hidden', background: '#0e0e0e' }}>
                <Image
                  src="/images/section-pain.png"
                  alt="O Marketing Mentiroso"
                  width={560}
                  height={560}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

          </div>

          {/* Coluna direita — texto estruturado */}
          <div className="anim-right">

            <p
              className="leading-relaxed"
              style={{ color: '#b0b8c4', fontSize: '1.05rem', marginBottom: '1.75rem' }}
            >
              Cada dia que passa aparece um papo furado diferente na internet.
            </p>

            {/* Lista de mentiras */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.75rem' }}>
              {lies.map((lie, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    background: 'rgba(229,62,62,0.05)',
                    border: '1px solid rgba(229,62,62,0.18)',
                    borderLeft: '3px solid rgba(229,62,62,0.6)',
                    borderRadius: 8,
                    padding: '12px 16px',
                  }}
                >
                  <span style={{
                    color: '#e53e3e',
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    flexShrink: 0,
                    marginTop: 2,
                    lineHeight: 1,
                  }}>
                    ✕
                  </span>
                  <span style={{ color: '#c4c4c4', fontSize: '0.95rem', lineHeight: 1.55 }}>{lie}</span>
                </div>
              ))}
            </div>

            <p
              className="leading-relaxed"
              style={{ color: '#b0b8c4', fontSize: '1.05rem', marginBottom: '2rem' }}
            >
              Mentiras e mais mentiras pra todo o lado.
            </p>

            {/* Callout com a pergunta */}
            <div style={{
              background: 'rgba(201,149,58,0.06)',
              border: '1px solid rgba(201,149,58,0.28)',
              borderLeft: '4px solid #c9953a',
              borderRadius: 10,
              padding: '20px 24px',
            }}>
              <p style={{
                color: '#e8e8e8',
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                fontWeight: 600,
                lineHeight: 1.55,
                margin: 0,
              }}>
                Fala a verdade: você não está{' '}
                <span className="text-gold">CANSADO</span>{' '}
                de tanta baboseira??
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
