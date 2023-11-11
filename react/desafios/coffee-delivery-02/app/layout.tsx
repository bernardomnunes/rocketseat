import type { Metadata } from 'next'
import { Roboto, Baloo_2 as Baloo2 } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

const baloo2 = Baloo2({
  subsets: ['latin'],
  weight: ['700', '800'],
  variable: '--font-baloo-2',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Coffee delivery',
    default: 'Coffee delivery',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${roboto.variable} ${baloo2.variable}`} lang="pt">
      <body className="bg-background antialiased font-roboto min-h-screen">
        {children}
      </body>
    </html>
  )
}
