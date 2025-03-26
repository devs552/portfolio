import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Abdullah Shahab Portfolio',
  description: 'Created with Next js',
  generator: 'Abdullah Shahab',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
