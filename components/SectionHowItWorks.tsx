const steps = [
  { number: '1', text: 'Você realiza a sua compra por meio desta página (e ganha a garantia de 7 dias)' },
  { number: '2', text: 'Em seguida, você receberá em seu e-mail o acesso da plataforma online e segura Kiwify' },
  { number: '3', text: 'Lá, você encontrará todos os módulos e aulas gravadas' },
  { number: '4', text: 'Você começa ainda hoje a se tornar um Mestre da Persuasão' },
]

export default function SectionHowItWorks() {
  return (
    <section className="section bg-section-dark">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            ENTENDA COMO FUNCIONA...
          </h2>
          <div className="divider" />
        </div>

        <ol className="space-y-6">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-5">
              <div className="step-number flex-shrink-0" aria-hidden="true">{step.number}</div>
              <p className="text-gray-300 text-lg leading-relaxed pt-2">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-10">
          <a href="https://pay.kiwify.com.br/cvyDT6p" className="btn-cta inline-block" target="_blank" rel="noopener noreferrer">
            COMEÇAR AGORA
          </a>
        </div>
      </div>
    </section>
  )
}
