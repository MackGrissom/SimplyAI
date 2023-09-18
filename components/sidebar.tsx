'use client'
import React, { useState } from "react";
import Link from "next/link";
import {
    Code,
    ImageIcon,
    Laptop,
    LayoutDashboard,
    MessageSquare,
    Music,
    PanelRightClose,
    PanelRightOpen,
    Settings,
    VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image"; // Import the Image component

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";



const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "SimplyGPT",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Code Assistant",
        icon: Code,
        color: "text-green-700",
        href: "/code",
    },
    {
        label: "Image Generator",
        icon: ImageIcon,
        color: "text-pink-700",
        href: "/image",
    },
    {
        label: "Video Generator",
        icon: VideoIcon,
        color: "text-orange-700",
        href: "/video",
    },
    {
        label: "Music Generator",
        icon: Music,
        color: "text-emerald-500",
        href: "/music",
    },
    {
        label: "Developer Resources",
        icon: Laptop,
        color: "text-[skyblue]",
        href: "/developers",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },
];
interface LogoProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const LogoImage: React.FC<LogoProps> = ({ src, width, height, alt }) => {
    return <Image alt={alt} src={src} width={width} height={height} />;
};

export const Sidebar = ({
    apiLimitCount = 0,
    isPro = false,
}: {
    apiLimitCount: number;
    isPro: boolean;
}) => {
    const pathname = usePathname();

    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={`space-y-4 flex flex-col h-full bg-black/10 text-white ${collapsed ? "w-16" : "w-60"
                }`}
        >
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    {collapsed ? (
                        <LogoImage
                            alt="Logo"
                            src="/slogo.png"
                            width={32}
                            height={32}
                        />
                    ) : (
                        <>
                            <div className="relative h-8 w-8 mr-4">
                                <LogoImage
                                    alt="Logo"
                                    src="/slogo.png"
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <h1 className={cn("text-3xl font-bold")}>SimplyAI</h1>
                        </>
                    )}
                </Link>

                <div className="space-y-1 bg-transparent rounded-lg">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white text-black hover:bg-white/10 rounded-lg transition",
                                pathname === route.href
                                    ? "text-white bg-[skyblue]/40"
                                    : "text-white-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                {route.icon && (
                                    <route.icon
                                        className={cn("h-5 w-5 mr-3", route.color)}
                                    />
                                )}
                                {!collapsed && route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro}
                collapsed={collapsed} />
            <div
                className={`flex items-center justify-${collapsed ? "center" : "end"
                    } h-12 cursor-pointer ${collapsed ? "w-16" : "w-60"}`}
                onClick={() => setCollapsed(!collapsed)}
            >
                <span className="text-[skyblue]/60  hover:text-white hidden lg:flex">
                    {collapsed ? <PanelRightClose /> : <PanelRightOpen />}
                </span>
            </div>
        </div>
    );
};