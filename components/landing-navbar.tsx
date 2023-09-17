'use client'

import { Space_Grotesk } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import Banner from './banner'

const font = Space_Grotesk({ subsets: ['latin'] })

export const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href='/' className='flex items-center'>
                <div className="relative h-8 w-8 items-center">
                    <Image fill alt='logo' src='/slogo.png' />
                </div>
                <h1 className={cn('text-2xl font-bolt text-white', font.className)}>
                    SimplyAI
                </h1>
            </Link>
            <Banner />
            {/* <div className='gap-8'>
                <ul className='grid grid-cols-3 text-white gap-8'>
                    <li className='col-span-1 hover:underline hover:text-[skyblue]'>
                        <Link href='/pricing'>Pricing</Link>
                    </li>
                    <li className='col-span-1 hover:underline hover:text-[skyblue]'>
                        <a href='/about'>About</a>
                    </li>
                    <li className='col-span-1 hover:underline hover:text-[skyblue]'>
                        <a href='/test'>Test</a>
                    </li>
                </ul>
            </div> */}
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