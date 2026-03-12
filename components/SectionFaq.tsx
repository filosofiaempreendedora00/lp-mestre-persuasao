const faqs = [
  { question: 'Para quem é o Curso?', answer: 'Para pessoas que entendem que o mundo não é dos mais esforçados, e sim dos mais persuasivos. Persuasão verdadeira, aquela que já venceu o tempo. Nada de manipulação. Convencer com ética e verdade.' },
  { question: 'É um curso?', answer: 'Sim! Curso gravado, com acesso vitalício. Assista em qualquer dispositivo (PC, tablet ou celular). De qualquer lugar que tenha acesso à internet.' },
  { question: 'Por onde eu acesso ao Mestre da Persuasão?', answer: 'Após a compra, você receberá um e-mail com acesso à plataforma Kiwify (plataforma de vendas brasileira). Todas as aulas gravadas estarão disponíveis lá.' },
  { question: 'E se eu desistir da minha compra?', answer: 'Você tem 7 dias de garantia incondicional. Teste o curso e, se não for para você, envie um e-mail para suporte@filosofiaempreendedora.com para receber o reembolso total. Sem burocracia.' },
  { question: 'Por quanto tempo eu terei acesso?', answer: 'Acesso vitalício. Você acessa o conteúdo quantas vezes quiser, para sempre.' },
  { question: 'Como posso realizar o pagamento?', answer: 'PIX e cartão de crédito. O processamento é feito pela plataforma Kiwify, segura e confiável.' },
]

export default function SectionFaq() {
  return (
    <section className="section bg-section-dark">
      <div className="container-lp max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            PERGUNTAS FREQUENTES
          </h2>
          <div className="divider" />
        </div>

        <div>
          {faqs.map((faq, i) => (
            <details key={i} className="faq-item">
              <summary className="font-serif text-lg">{faq.question}</summary>
              <div className="faq-answer pl-1">
                <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
