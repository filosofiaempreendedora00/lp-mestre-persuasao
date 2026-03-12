export default function SectionGuaranteeDetails() {
  return (
    <section className="section bg-section-dark-2">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="rounded-2xl p-8 md:p-12 text-center" style={{ backgroundColor: '#161616', border: '1px solid #c9953a' }}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(201,149,58,0.1)', border: '1px solid rgba(201,149,58,0.3)' }}>
            <svg className="w-10 h-10" style={{ color: '#c9953a' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight mb-3">
            Garantia <span className="text-gold">INCONDICIONAL</span> de 7 dias
          </h2>
          <div className="divider" />

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Assinando hoje o Mestre da Persuasão, você ganha{' '}
            <strong className="text-white">7 dias de garantia incondicional</strong>.
            Em outras palavras, você pode testar à vontade o curso durante esse período.
            Se você achar que ele não é para você, basta enviar um e-mail para{' '}
            <a href="mailto:suporte@filosofiaempreendedora.com" className="hover:underline" style={{ color: '#c9953a' }}>
              suporte@filosofiaempreendedora.com
            </a>{' '}
            e eu te devolverei{' '}
            <strong className="text-white">cada centavo investido</strong>.
            Portanto, sim: o seu risco é <strong style={{ color: '#c9953a' }}>ZERO</strong>.
          </p>

          <div className="mt-8">
            <a href="https://pay.kiwify.com.br/cvyDT6p" className="btn-cta inline-block" target="_blank" rel="noopener noreferrer">
              EXPERIMENTAR AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
