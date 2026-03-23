import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sagar Pandya — Software Quality Engineer',
  description:
    'Quality engineering for SaaS products where system reliability, data integrity, and compliance carry real weight.',
  openGraph: {
    title: 'Sagar Pandya — Software Quality Engineer',
    description:
      'Quality engineering for SaaS products where system reliability, data integrity, and compliance carry real weight.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
