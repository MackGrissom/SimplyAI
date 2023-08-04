'use client'
import React from 'react';
import TypewriterComponent from 'typewriter-effect';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import Features from './features';
import PricingExample from './pricing';
import Banner from './banner';

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <>
            <div className="text-white font-bold py-36 text-center space-y-5">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                    <h1 className="capitalize">The All-In-One AI Toolkit</h1>
                    <div className="text-[skyblue] text-3xl sm:text-3xl md:text-4xl lg:5xl">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    'AI Chatbot.',
                                    'Code Generator.',
                                    'Art, Photo, Video & Audio Generator.',
                                    'Text-to-Speech',
                                    'Email & Blog Writing.',
                                    'Brainstorming',
                                    'Unlock Unlimited Potential',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className="text-sm md:text-xl font-light">
                    10x Content Generation. Automate repetitive tasks. Optimize workflows and streamline processes.
                </div>
                <div className="flex flex-row flex-wrap content-around justify-center items-end gap-3">
                    <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
                        <Button className="w-40 bg-[#87ceeb]/60 text-white border-[1px] border-white hover:text-white" type="submit" size="icon">
                            Try For Free
                        </Button>
                    </Link>
                    <Button className="w-40 bg-transparent text-black border-[1px] border-white hover:bg-skyblue hover:text-white mt-2" type="submit" size="icon">
                        <a href="#use-client-section" className="text-sm text-[skyblue]  cursor-pointer">
                            Learn More
                        </a>
                    </Button>
                </div>

                <div className="text-xs md:text-sm font-normal">
                    No credit card required.
                </div>
            </div>
            <div id="use-client-section">
                <Features />
            </div>
            <PricingExample />
        </>
    );
};