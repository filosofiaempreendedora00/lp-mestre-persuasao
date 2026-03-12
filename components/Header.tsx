import Image from 'next/image'

export default function Header() {
  return (
    <header style={{ backgroundColor: '#000000', borderBottom: '1px solid #1a1a1a' }} className="py-4">
      <div className="container-lp flex items-center justify-center">
        <a href="https://filosofiaempreendedora.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/logo-filosofia-empreendedora.png"
            alt="Filosofia Empreendedora"
            width={180}
            height={46}
            priority
            className="h-10 w-auto brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </header>
  )
}
