import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JustStop__\'s Portfolio',
  description: 'The portfolio of JustStop__',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href='https://unpkg.com/css.gg@2.0.0/icons/css/mouse.css' rel='stylesheet' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
