export default function SectionGuarantee() {
  return (
    <section className="guarantee-section section">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left" style={{ borderTop: '1px solid #2a2a2a', paddingTop: '2rem' }}>
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full flex items-center justify-center mx-auto sm:mx-0" style={{ backgroundColor: 'rgba(201,149,58,0.1)', border: '1px solid rgba(201,149,58,0.3)' }}>
              <svg className="w-12 h-12" style={{ color: '#c9953a' }} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl text-white leading-tight mb-3">
              7 DIAS DE GARANTIA
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Compre com total segurança. Se por qualquer motivo o Mestre da Persuasão não for para você, basta enviar um e-mail para{' '}
              <a href="mailto:suporte@filosofiaempreendedora.com" className="text-gold hover:underline" style={{ color: '#c9953a' }}>
                suporte@filosofiaempreendedora.com
              </a>{' '}
              dentro de 7 dias e você receberá{' '}
              <strong className="text-white">cada centavo de volta</strong>.
              Seu risco é <strong style={{ color: '#c9953a' }}>ZERO</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
