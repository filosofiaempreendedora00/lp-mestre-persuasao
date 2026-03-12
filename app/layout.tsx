import type { Metadata } from 'next'
import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}
