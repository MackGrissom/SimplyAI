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
                    <h1 className="capitalize">The Ultimate AI Toolkit</h1>
                    <div className="text-[skyblue] text-3xl sm:text-3xl md:text-4xl lg:5xl">
                        <TypewriterComponent
                            options={{
                                strings: [
                                    'AI Chatbot',
                                    'Code Generation',
                                    'Media Creation (Art, Photo, Video, Audio)',
                                    'Text-to-Speech',
                                    'Content Writing (Emails, Blogs)',
                                    'Idea Generation',
                                    'Language Translation',
                                    'Data Analysis',
                                    'Question Answering',
                                    'Virtual Tutoring',
                                    'Content Summarization',
                                    'Language Generation',
                                    'Sentiment Analysis',
                                    'Speech Recognition',
                                    'Image Recognition',
                                    'Recommendation Systems',
                                    'Data Generation',
                                    'Customer Support Automation',
                                    'Document Automation',
                                    'Language Correction',
                                    'Virtual Assistant',
                                    'Research Assistance',
                                    'Game Development',
                                    'Simulations',
                                    'Medical Diagnosis',
                                    'Financial Analysis',
                                    'Content Curation',
                                    'And More...',                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
                <div className="text-sm md:text-xl font-light">
                SimplyAI: Powering 10x Content Generation, Automation, and Workflow Optimization.
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