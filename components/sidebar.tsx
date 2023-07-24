'use client'

import { cn } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, SeparatorHorizontalIcon, Settings, VideoIcon } from "lucide-react";
import { Space_Grotesk } from 'next/font/google'
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation'
import { Separator } from "@/components/ui/separator"

const montserrat = Space_Grotesk({
    weight: '600',
    subsets: ['latin']
});


const routes = [{
    label: "Dashboard",
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
},
{
    label: "Conversation",
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500"
},
{
    label: "Image Generation",
    icon: ImageIcon,
    href: '/image',
    color: "text-orange-500"
},
{
    label: "Video Generation",
    icon: VideoIcon,
    href: '/video',
    color: "text-indigo-500"
},
{
    label: "Audio Generation",
    icon: Music,
    href: '/audio',
    color: "text-pink-500"
},
{
    label: "Code Generation",
    icon: Code,
    href: '/code',
    color: "text-green-700"
},
{
    label: "Settings",
    icon: Settings,
    href: '/settings',
    color: "text-white"
},

]

const SideBar = () => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full text-white  bg-black/20 bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
            <div className="px-3 py-2 flex-1">
                <Link href='/dashboard' className="flex items-center pl-3 mb-6">
                    <div className="relative w-8 h-8 mr-4">
                        <Image fill sizes='full'alt='logo' src='/logo1.png' />
                    </div>
                    <h1 className={cn("text-2xl font-bold", montserrat.className)}>UnifyAI</h1>
                </Link>
                <Separator className="p-0 mb-4 -mt-[5] text-[skyblue] "/>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link 
                            href={route.href}
                            key={route.href} 
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", 
                            pathname === route.href ? "text-white bg-[skyblue]/40" : "text-zinc-400"
                            )}
                            >
                                <div className="flex items-center flex-1">
                                    <route.icon  className={cn ("h-5 w-5 mr-3", pathname === route.href ? route.color : 'text-none')}/>
                                    {route.label}
                                </div>
                            </Link>
                    ))}
                </div>

            </div>
           
        </div>
    );
}

export default SideBar;
