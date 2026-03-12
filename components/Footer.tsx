import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', borderTop: '1px solid #1a1a1a' }} className="py-10">
      <div className="container-lp text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo-filosofia-empreendedora.png"
            alt="Filosofia Empreendedora"
            width={160}
            height={41}
            className="h-10 w-auto brightness-0 invert opacity-40"
            loading="lazy"
          />
        </div>
        <p className="text-gray-700 text-sm mb-3">
          © {new Date().getFullYear()} Filosofia Empreendedora. Todos os direitos reservados.
        </p>
        <p className="text-xs leading-relaxed max-w-lg mx-auto text-gray-700">
          O Mestre da Persuasão é um produto digital distribuído pela plataforma Kiwify. Os resultados mencionados nos depoimentos são individuais e não constituem garantia de resultado.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-700">
          <a href="mailto:suporte@filosofiaempreendedora.com" className="hover:text-gray-400 transition-colors" style={{ color: 'inherit' }}>
            suporte@filosofiaempreendedora.com
          </a>
          <span>·</span>
          <a href="https://api.whatsapp.com/send?phone=5527998001953" className="hover:text-gray-400 transition-colors" style={{ color: 'inherit' }} target="_blank" rel="noopener noreferrer">
            (27) 99800-1953
          </a>
        </div>
      </div>
    </footer>
  )
}
