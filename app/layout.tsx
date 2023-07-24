import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Space_Grotesk } from 'next/font/google'
const font = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UnifyAI',
  description: 'AI ToolKit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='everything'>
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
