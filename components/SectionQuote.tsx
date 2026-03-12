interface QuoteSectionProps {
  quote: string
  author: string
  ctaText: string
  ctaHref?: string
  dark?: boolean
}

export default function SectionQuote({ quote, author, ctaText, ctaHref = 'https://pay.kiwify.com.br/cvyDT6p' }: QuoteSectionProps) {
  return (
    <section
      className="section-lg"
      style={{
        background: 'linear-gradient(160deg, #f9f5ee 0%, #fdf9f2 60%, #f5f0e4 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ornamentos de fundo */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '-80px', left: '-80px',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(201,149,58,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-60px', right: '-60px',
        width: 260, height: 260, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(201,149,58,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-lp max-w-3xl mx-auto text-center" style={{ position: 'relative' }}>

        {/* Aspas grandes */}
        <div
          aria-hidden="true"
          style={{
            fontSize: '9rem',
            lineHeight: 0.7,
            color: '#c9953a',
            opacity: 0.18,
            fontFamily: 'Georgia, serif',
            marginBottom: '0.25rem',
            userSelect: 'none',
          }}
        >
          "
        </div>

        {/* Citação */}
        <blockquote
          className="font-serif leading-tight mb-6"
          style={{
            fontSize: 'clamp(1.7rem, 4.5vw, 2.8rem)',
            color: '#1a1a1a',
            fontStyle: 'italic',
          }}
        >
          {quote}
        </blockquote>

        {/* Divisor dourado */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to right, transparent, #c9953a)' }} />
          <svg viewBox="0 0 16 16" fill="#c9953a" className="w-3 h-3" aria-hidden="true">
            <path d="M8 0l2 6h6l-5 4 2 6-5-4-5 4 2-6L0 6h6z" />
          </svg>
          <div style={{ height: 1, width: 40, background: 'linear-gradient(to left, transparent, #c9953a)' }} />
        </div>

        {/* Autor */}
        <p
          className="font-serif text-lg mb-10"
          style={{ color: '#a67928', letterSpacing: '0.05em' }}
        >
          — {author}
        </p>

        {/* Botão */}
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-3d btn-gold-pulse font-serif inline-block"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            maxWidth: 480,
            margin: '0 auto',
          }}
        >
          {ctaText}
        </a>
      </div>
    </section>
  )
}
