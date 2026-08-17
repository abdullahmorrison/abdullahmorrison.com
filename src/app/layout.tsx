import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Shippori_Mincho_B1 } from 'next/font/google'

const shippori_mincho_b1 = Shippori_Mincho_B1({ 
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Abdullah Morrison | Software Engineer',
  description: 'Abdullah Morrison is a software engineer based in Ottawa, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={shippori_mincho_b1.className}>{children}</body>
    </html>
  )
}
