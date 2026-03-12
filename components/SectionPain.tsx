import Image from 'next/image'

export default function SectionPain() {
  return (
    <section className="section bg-section-dark">
      <div className="container-lp">

        {/* Grid 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Coluna esquerda — título + imagem */}
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight mb-8">
              O MARKETING MENTIROSO{' '}
              <span className="text-gold">TE ENGANA</span>{' '}
              TODOS OS DIAS...
            </h2>
            <Image
              src="/images/section-pain.png"
              alt="O Marketing Mentiroso"
              width={560}
              height={560}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Coluna direita — texto */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-6">
            <p>
              Cada dia que passa aparece um papo furado diferente na internet.
              Tigrinho, apostas esportivas, cursos que te ensinam a vender
              curso...
            </p>
            <p>
              Mentiras e mais mentiras pra todo o lado.
            </p>
            <p className="text-gray-100 font-semibold">
              Fala a verdade: você não está{' '}
              <strong className="text-gold">CANSADO</strong>{' '}
              de tanta baboseira??
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
