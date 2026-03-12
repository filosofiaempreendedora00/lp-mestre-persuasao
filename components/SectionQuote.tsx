interface QuoteSectionProps {
  quote: string
  author: string
  ctaText: string
  ctaHref?: string
  dark?: boolean
}

export default function SectionQuote({ quote, author, ctaText, ctaHref = 'https://pay.kiwify.com.br/cvyDT6p' }: QuoteSectionProps) {
  return (
    <section className="section bg-section-dark-2">
      <div className="container-lp max-w-3xl mx-auto text-center">
        <div className="quote-block mb-8">
          <span
            className="block font-serif text-6xl leading-none mb-2"
            style={{ color: '#c9953a', opacity: 0.5 }}
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl leading-tight text-white">
            {quote}
          </blockquote>
          <p className="mt-4 text-sm tracking-widest uppercase text-gray-600">
            — {author}
          </p>
        </div>
        <a href={ctaHref} className="btn-cta inline-block text-lg" target="_blank" rel="noopener noreferrer">
          {ctaText}
        </a>
      </div>
    </section>
  )
}
