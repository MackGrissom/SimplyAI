'use client'

import Image from 'next/image';
import {  Code, ImageIcon, Languages, MessageCircleIcon, PenToolIcon, Video, WrenchIcon, } from 'lucide-react';
import React from 'react';

const features = [
    {
        name: 'AI Chat Bot',
        description: 'Engage your users with a sophisticated AI chat bot that provides intelligent responses.',
        icon: MessageCircleIcon,
    },
    {
        name: 'Code Generator',
        description: 'Automatically generate code snippets for various programming languages and use cases.',
        icon: Code,
    },
    {
        name: 'Image Generator',
        description: 'Create stunning images using advanced AI algorithms to cater to your design needs.',
        icon: ImageIcon,
    },
    {
        name: 'Video Generator',
        description: 'Effortlessly generate videos with AI-assisted tools, adding visual appeal to your content.',
        icon: Video,
    },
    {
        name: 'Translator',
        description: 'Utilize cutting-edge AI to instantly translate text between languages with high accuracy.',
        icon: Languages,
    },
    {
        name: 'AI Developer Toolkit',
        description: 'Empower developers with a comprehensive toolkit and instructional API integration for building AI-powered applications.',
        icon: WrenchIcon,
    },
    // Add more features here
];

const Features: React.FC = () => {
    return (
        <div className="bg-transparent py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <div>
                        <h2 className="text-base font-semibold leading-7 text-[skyblue]">UnifyAI: Powering Your Potential</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-[white] sm:text-4xl">All-Inclusive AI Platform</p>
                        <p className="mt-6 text-base leading-7 text-white/70">
                            Elevate your capabilities with UnifyAI, the ultimate all-in-one platform. Seamlessly engage users with our advanced AI chat bot, effortlessly generate code snippets for diverse programming needs, create visually captivating images and videos using cutting-edge algorithms, and facilitate text translation across languages with precision.
                            Developers and creatives alike can harness UnifyAI&pos;s comprehensive toolkit and API integration to craft AI-powered applications that unleash unlimited potential.
                        </p>
                    </div>
                    <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-white sm:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-9">
                                <dt className="font-semibold text-[skyblue]/70">
                                    {React.createElement(feature.icon, {
                                        className: "absolute left-0 top-1 h-5 w-5 text-[skyblue]/40",
                                        "aria-hidden": true
                                    })}
                                    <span className='text-[skyblue]'>
                                    {feature.name}
                                    </span>
                                </dt>
                                <dd className="mt-2">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default Features;