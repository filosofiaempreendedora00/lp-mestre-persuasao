const testimonials = [
  { name: 'Marcos Almeida', role: 'Engenheiro', text: 'Simplesmente uma maravilha. Bendito foi o dia que recebi um anúncio do Mapa da Sabedoria no meu Facebook. Me surpreendi com a praticidade que ele entrega. Só não digo que é nota 10, porque é nota 1.000!', initials: 'MA' },
  { name: 'Felipe Amorin', role: 'Médico', text: 'Eu estou apaixonado pela filosofia. E é incrível poder acessar tão facilmente as mentes de Sócrates, Nietzsche, Santo Agostinho, Marco Aurélio...', initials: 'FA' },
  { name: 'Felipe Amorin', role: 'Guia turístico', text: 'Para mim, a funcionalidade mais incrível do Mapa da Sabedoria é o acesso às influências de cada intelectual. Com um único clique.', initials: 'FA' },
  { name: 'Jarceu Filho', role: 'Professor', text: 'Fantástico. Ter fácil acesso às maiores mentes da humanidade é algo que não tem preço. Hoje em dia tem muita futilidade nas redes sociais...', initials: 'JF' },
  { name: 'Sandra Aquino', role: 'Funcionária pública', text: 'Eu sempre fico com receio de comprar ou assinar coisas na internet, porque hoje em dia a coisa tá feia. Mas que bom que eu deixei esse medo de lado. O Filosofia Empreendedora tá de parabéns com o Mapa, viu!', initials: 'SA' },
  { name: 'Antônio Córdoba', role: 'Empresário', text: 'Aproveitei um desses super descontos que vocês dão vez ou outra, na assinatura anual... sinceramente... teria me arrependido amargamente! Indico DEMAIS! Revolucionou minha forma de aprender aos 59 anos.', initials: 'AC' },
  { name: 'Juliana Reis', role: 'Psicóloga', text: "Eu era uma das pessoas que pensava: 'ora, no Google tem tudo de graça!' Coitada rsrs. Não tem nem como comparar! O Mapa nos dá clareza, estrutura, ECONOMIA de tempo!", initials: 'JR' },
  { name: 'Dra. Lourdes Gonzaga', role: 'Professora universitária', text: 'Dou aula de filosofia há quase 40 anos e olha... eu nunca havia visto um material tão prático, de uso fácil e democrático!', initials: 'LG' },
  { name: 'Tadeu Dias', role: 'Arquiteto', text: "Li uma coisa na página que me marcou profundamente... 'o investimento em conhecimento é o que rende os melhores juros'... O Mapa é FENOMENAL!!", initials: 'TD' },
]

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-3" style={{ color: '#c9953a' }} aria-label="Avaliação 5 estrelas">
      {[1,2,3,4,5].map((s) => (
        <svg key={s} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function SectionTestimonials() {
  return (
    <section className="section bg-section-dark">
      <div className="container-lp">
        <div className="text-center mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
            O QUE ESTÃO FALANDO SOBRE O{' '}
            <span className="text-gold">MAPA</span>:
          </h2>
          <div className="divider" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <article key={i} className="testimonial-card">
              <StarRating />
              <blockquote className="text-gray-400 leading-relaxed mb-4 italic text-sm">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <footer className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-black text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: '#c9953a' }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
