"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, ImageIcon, Languages, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat({ weight: '600', subsets: ['latin'] });

const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
        color: "text-sky-500"
    },
    {
        label: 'UnifyChat',
        icon: MessageSquare,
        href: '/conversation',
        color: "text-violet-500",
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        href: '/code',
    },
    {
        label: 'Translator',
        icon: Languages,
        color: "text-[blue]-700",
        href: '/translator',
    },
    {
        label: 'Image Generation',
        icon: ImageIcon,
        color: "text-pink-700",
        href: '/image',
    },
    {
        label: 'Video Generation',
        icon: VideoIcon,
        color: "text-orange-700",
        href: '/video',
    },
    {
        label: 'Music Generation',
        icon: Music,
        color: "text-emerald-500",
        href: '/music',
    },
    
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
];

export const Sidebar = ({
    apiLimitCount = 0,
    isPro = false
}: {
    apiLimitCount: number;
    isPro: boolean;
}) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4  flex flex-col h-full bg-black/10 text-white">
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14 ">
                    <div className="relative h-8 w-8 mr-4">
                        <Image fill alt="Logo" src="/logo1.png" />
                    </div>
                    <h1 className={cn("text-4xl font-bold")}>
                        UnifyAI
                    </h1>
                </Link>

                <div className="space-y-1 bg-transparent rounded-lg ">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white text-black hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-[skyblue]/40" : "text-white-400",
                            )}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    );
};