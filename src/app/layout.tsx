import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alan Babu | MERN Stack Developer',
  description: 'Portfolio of Alan Babu, a modern MERN Stack Developer specializing in React, Node.js, and MongoDB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
