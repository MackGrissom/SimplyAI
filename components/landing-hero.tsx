'use client'

"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1 className="capitalize">All-In-One AI Toolkit</h1>
                <div className="text-[skyblue] text-3xl sm:text-3xl md:text-4xl lg:5xl">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "GPT-4 Chatbot.",
                                "Code Generation.",
                                "Photo, Video and Audio Generation.",
                                "Email & Blog Writing.",
                                "E-mail Writing.",
                                "Brainstorming",
                                
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light ">
                10x Content Generation. Automate repetitive tasks. Optimize workflows and streamline processes.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button className=" w-40 bg-[#87ceeb] text-black border-[1px] border-white hover:text-white" type="submit" size="icon">
                        Try For Free
                    </Button>
                </Link>
            </div>
            <div className="text-xs md:text-sm font-normal">
                No credit card required.
            </div>
        </div>
    );
};