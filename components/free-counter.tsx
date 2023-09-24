"use client"

import { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { MAX_FREE_COUNTS } from "@/constants";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Code, ImageIcon, MessageSquare, Music, Rocket, VideoIcon, Zap } from "lucide-react";
import { motion } from 'framer-motion';
import { useProModal } from "@/hooks/use-pro-modal";


interface FreeCounterProps {
    apiLimitCount: number;
    isPro: boolean;
};

export const FreeCounter = ({
    apiLimitCount = 0,
    isPro = false,

}: FreeCounterProps) => {
    const proModal = useProModal();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    if (isPro) {
        return null
    }

    return (

        <div className=''>
            <Card className="bg-transparent border-0 h-full w-[95%]">
                <CardContent className="py-0">
                    <div className="text-center text-sm text-white mb-4 space-y-2">
                        <p> {apiLimitCount} / {MAX_FREE_COUNTS} Free Trial</p>
                        <Progress
                            className="h-3 p-2"
                            value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
                        />
                        <motion.button
                            onClick={proModal.onOpen}
                            className="w-full bg-[skyblue]/50  outline outline-1 outline-[white] h-8 font-extrabold text-lg rounded-lg text-[white]"
                            whileHover={{
                                scale: 1.1, // Increase the size on hover
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
                            }}
                        >
                            <div className="flex justify-center gap-2">
                                <div className=" align-center justify-items-start text-[white]">
                            <Rocket/> 
                            </div>
                                Upgrade
                                </div>
                        </motion.button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}