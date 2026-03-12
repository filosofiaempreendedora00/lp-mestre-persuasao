import Image from 'next/image'

export default function SectionHero() {
  return (
    <section className="hero-section section-lg" style={{ paddingTop: '2rem' }}>
      <div className="container-lp">

        {/* ── Logo do produto ── */}
        <div className="text-center mb-10">
          <Image
            src="/images/Frame-392.png"
            alt="Mestre da Persuasão"
            width={120}
            height={120}
            priority
            className="w-20 sm:w-24 md:w-32 h-auto drop-shadow-2xl mx-auto"
          />
        </div>

        {/* ── Headline com destaques dourados ── */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl leading-snug tracking-wide">
            CANSOU DE VER &ldquo;PROFISSIONAIS&rdquo; COM NEM{' '}
            <span className="text-gold">METADE DO SEU CONHECIMENTO</span>{' '}
            GANHANDO{' '}
            <span className="text-gold">MAIS DINHEIRO</span>{' '}
            QUE VOCÊ?
          </h1>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
            Então engole esse choro, assiste o vídeo abaixo e para de ficar
            dando murro em ponta de faca nessa sua carreira estagnada...
          </p>
        </div>

        {/* ── Vídeo com moldura dourada ── */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="video-gold-frame">
            <div
              className="relative w-full bg-black"
              style={{ paddingBottom: '56.25%' }}
            >
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
