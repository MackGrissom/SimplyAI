import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import {Particles} from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import { useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
