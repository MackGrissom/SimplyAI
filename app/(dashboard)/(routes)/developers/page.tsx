'use client'

import Features from "@/components/features";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookKeyIcon, Code, Group, Heading, Plug } from "lucide-react";

import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Fragment } from "react";
import { motion } from 'framer-motion'
import ComingSoon from "@/components/coming-soon";

import animationData from '@/components/animation/comingsoon.json'


const cards = [
    {
        name: 'API Integration Guides',
        description: 'Step-by-step instructions on seamlessly integrating our AI capabilities into your projects. Unlock the potential of our API.',
        icon: Plug,
    },
    {
        name: 'Developer Resources',
        description: 'A comprehensive collection of resources to aid developers in harnessing the power of our AI API. Code examples, SDKs, and more..',
        icon: Group,
    },
    {
        name: 'API Reference Documentation',
        description: ' Deep-dive into the technical intricacies of our AI API. Explore endpoints, parameters, and responses for seamless implementation',
        icon: BookKeyIcon

    },
]
const Developers = () => {
    return (
        // <div className="px-10 pb-20 ">
        //     <div className="relative isolate overflow-hidden bg-[skyblue] py-24 sm:py-32 bg-transparent">
        //         <Image
        //             src="/bg8.svg"
        //             alt=""
        //             className="absolute inset-0 -z-10 h-full w-full object-cover object-right opacity-0 md:object-center"
        //             width='20'
        //             height='20'
        //         />
        //         <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        //             <div
        //                 className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        //                 style={{
        //                     clipPath:
        //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //                 }}
        //             />
        //         </div>
        //         <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        //             <div
        //                 className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        //                 style={{
        //                     clipPath:
        //                         'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        //                 }}
        //             />
        //         </div>
        //         <div className="mx-auto max-w-7xl px-6 lg:px-8">
        //             <div className="mx-auto max-w-2xl lg:mx-0">
        //                 <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Developers</h2>
        //                 <p className="mt-6 text-lg leading-8 text-gray-300">
        //                     Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
        //                     fugiat veniam occaecat fugiat aliqua.
        //                 </p>
        //             </div>
        //             <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 h-[100%]">
        //                 {cards.map((card) => (
        //                     <motion.div
        //                         key={card.href}
        //                         whileHover={{ scale: 1.05, opacity: 0.8 }} // Framer Motion whileHover effect
        //                     >
        //                         <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
        //                             <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
        //                             <div className="text-base leading-7">
        //                                 <h3 className="font-semibold text-white">{card.name}</h3>
        //                                 <p className="mt-2 text-gray-300">{card.description}</p>
        //                             </div>
        //                         </div>
        //                     </motion.div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <ComingSoon animationData={animationData} text="Coming Soon!" />
        </div>

    );
}

export default Developers;