import SectionHero from '@/components/SectionHero'
import SectionPain from '@/components/SectionPain'
import SectionBenefit from '@/components/SectionBenefit'
import SectionReality from '@/components/SectionReality'
import SectionCourse from '@/components/SectionCourse'
import SectionModules from '@/components/SectionModules'
import SectionEmotional from '@/components/SectionEmotional'
import SectionPricing from '@/components/SectionPricing'
import SectionGuarantee from '@/components/SectionGuarantee'
import SectionTestimonials from '@/components/SectionTestimonials'
import SectionQuote from '@/components/SectionQuote'
import SectionHowItWorks from '@/components/SectionHowItWorks'
import SectionGuaranteeDetails from '@/components/SectionGuaranteeDetails'
import SectionFaq from '@/components/SectionFaq'
import SectionContact from '@/components/SectionContact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — Headline + Vídeo + CTA */}
      <SectionHero />

      {/* 2. Dor — O Marketing Mentiroso */}
      <SectionPain />

      {/* 3. Benefícios — CHEGA DESSA M&RD4 */}
      <SectionBenefit />

      {/* 4. Realidade — O mundo é dos mais persuasivos */}
      <SectionReality />

      {/* 5. Sobre o curso — O QUE É O MESTRE DA PERSUASÃO? */}
      <SectionCourse />

      {/* 6. Módulos — O que você terá acesso */}
      <SectionModules />

      {/* 7. Gancho emocional — MEU ALECRIM DOURADO */}
      <SectionEmotional />

      {/* 8. Oferta / Preço */}
      <SectionPricing />

      {/* 9. Garantia resumida */}
      <SectionGuarantee />

      {/* 10. Depoimentos / Prova social */}
      <SectionTestimonials />

      {/* 11. Citação — Benjamin Franklin */}
      <SectionQuote
        quote="Investir em conhecimento sempre rende os melhores juros ($$$)."
        author="Benjamin Franklin"
        ctaText="QUERO OS MELHORE($) JURO($)"
      />

      {/* 12. Como funciona — 4 passos */}
      <SectionHowItWorks />

      {/* 13. Citação — Martin Luther King */}
      <SectionQuote
        quote="O que me preocupa não é o grito dos maus, mas o silêncio dos bons"
        author="Martin Luther King"
        ctaText="QUERO SER PERSUASIVO"
        dark
      />

      {/* 14. Detalhes da garantia incondicional */}
      <SectionGuaranteeDetails />

      {/* 15. FAQ */}
      <SectionFaq />

      {/* 16. Contato WhatsApp */}
      <SectionContact />

      {/* Rodapé */}
      <Footer />
    </main>
  )
}
