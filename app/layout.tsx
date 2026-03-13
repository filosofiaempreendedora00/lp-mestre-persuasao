import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import MetaPixel from '@/components/MetaPixel'

export const metadata: Metadata = {
  title: 'Torne-se hoje um Mestre da Persuasão - Filosofia Empreendedora',
  description:
    'O Mestre da Persuasão é um treinamento prático e completo, que te ensina o mesmo sistema de persuasão usado pelos grandes homens da humanidade para conquistarem seus objetivos mais ousados.',
  robots: 'index, follow',
  openGraph: {
    title: 'Mestre da Persuasão - Filosofia Empreendedora',
    description:
      'Domine o Ethos, Pathos e Logos de Aristóteles e torne-se uma máquina de persuadir.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MS3F78M');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica+SC&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica+SC&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MS3F78M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <MetaPixel />
        {children}
      </body>
    </html>
  )
}
