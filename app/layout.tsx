import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DanCham Quiz - Find Din DanCham Værdi',
  description: '6 spørgsmål der viser hvordan medlemskab matcher dine behov',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  )
}
