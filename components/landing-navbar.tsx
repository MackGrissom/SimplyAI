'use client'

import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

const font = Space_Grotesk({ subsets: ['latin'] })

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href='/' className='flex items-center'>
                <div className="relative h-8 w-8 items-center">
                    <Image fill alt='logo' src='/logo1.png' />
                </div>
                <h1 className={cn('text-2xl font-bolt text-white', font.className)}>
                    UnifiedAI
                </h1>
            </Link>
            <div className="flex items-center gap x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant='outline' className='rounded-lg'>
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}