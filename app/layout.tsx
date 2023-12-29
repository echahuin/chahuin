import './globals.css'
import type { Metadata } from 'next'
import Nav from './components/Nav'

export const metadata: Metadata = {
  title: 'dev-chahuin',
  description: 'Portfolio generated with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <>
          <Nav />
          <main>{children}</main>
        </>
      </body>
    </html>
  )
}
