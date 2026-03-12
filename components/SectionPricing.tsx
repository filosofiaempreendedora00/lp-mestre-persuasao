const included = [
  'Módulo 1: Fundamentos da Retórica – O Legado de Aristóteles',
  'Módulo 2: Ethos – Construindo Autoridade e Credibilidade',
  'Módulo 3: Pathos – O Poder da Emoção',
  'Módulo 4: Logos – A Força dos Argumentos Lógicos',
  'Módulo 5: A Retórica em Ação – Integrando Ethos, Pathos e Logos',
  'Acesso vitalício em qualquer dispositivo',
  'Garantia incondicional de 7 dias',
]

export default function SectionPricing() {
  return (
    <section className="section-lg bg-pricing" id="oferta">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <span className="badge-offer">💰 OFERTA LIMITADA</span>
        </div>

        <div className="pricing-card">
          <div className="pricing-header">
            <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
              ACESSO VITALÍCIO AO{' '}
              <span className="text-gold">MESTRE DA PERSUASÃO</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Economize hoje, {new Date().toLocaleDateString('pt-BR')}, mais de R$300,00 no Mestre da Persuasão
            </p>
          </div>

          <div className="p-8 md:p-10">
            <h3 className="font-serif text-lg text-gray-300 mb-5">O que você recebe:</h3>
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c9953a' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Preço */}
            <div className="text-center rounded-xl p-6 mb-8" style={{ backgroundColor: '#111111', border: '1px solid #2a2a2a' }}>
              <p className="text-gray-500 text-sm uppercase tracking-wide mb-1">
                Desconto especial de{' '}
                <strong className="text-red-500">R$310,00</strong>{' '}
                por tempo limitado
              </p>
              <div className="flex items-baseline justify-center gap-3 my-3">
                <span className="text-gray-600 line-through text-xl">R$497,00</span>
                <span className="font-serif text-5xl text-white font-bold">
                  R$187<span className="text-3xl">,00</span>
                </span>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#c9953a' }}>
                ou R$148,42 à vista no cartão ou PIX
              </p>
              <p className="text-gray-600 text-xs mt-2">Pagamento via PIX ou cartão de crédito</p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="https://pay.kiwify.com.br/cvyDT6p" className="btn-cta-lg btn-cta-pulse mx-auto" target="_blank" rel="noopener noreferrer">
                ACESSO IMEDIATO E VITALÍCIO
              </a>
              <div className="flex items-center justify-center gap-4 mt-5 text-gray-600 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Compra segura
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Garantia de 7 dias
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Acesso imediato
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
