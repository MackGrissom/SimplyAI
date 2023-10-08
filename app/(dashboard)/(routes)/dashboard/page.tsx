"use client";


import {
  ConversationIcon,
  AboutIcon,
  ArrowRightIcon,
  BugIcon,
  CodeIcon,
  CollapseLeftIcon,
  CollapseRightIcon,
  DashboardIcon,
  FeatureIcon,
  ImageIcon,
  MusicIcon,
  SettingsIcon,
  VideoIcon,
} from '@/components/icons';

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";



import Image from "next/image";
import { Loader } from "@/components/loader";

export default function HomePage() {
  const router = useRouter();
  const tools = [
    {
      label: 'Conversation Model',
      icon: ConversationIcon,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Coding Assistant',
      icon: CodeIcon,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
    {
      label: 'Music Generator (In Development)',
      icon: MusicIcon,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generator (In Development)',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },



  ];
  const tools2 = [
    {
      label: 'Video Generator (In Development)',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Request A Feature',
      icon: FeatureIcon,
      href: '/feature-request',
      color: "text-sky-500",
      bgColor: "bg-sky-500/10",
    },
    {
      label: 'Report A Bug',
      icon: BugIcon,
      href: '/bug-reporting',
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },

    {
      label: 'Learn About SimplyAI',
      icon: AboutIcon,
      href: '/about',
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (

    <div className="mb-0 pb-0 mt-3">
      <div className="mb-8 space-y-4 overflow-hidden">
        {/* Heading, animated */}
        <div className="overflow-hidden flex items-center justify-center pt-2">
          <Image src="/slogo.png" alt="Logo" className="w-10 h-10 mr-2" width={10} height={10} />
          <div
            className="bg-gradient-to-tr from-black to-sky-400 inline-block"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <h2 className="py-4 text-2xl md:text-5xl font-bold text-center text-white">
              SimplyAI
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-center text-white text-sm md:text-lg font-medium p-4 rounded-lg inline-block drop-shadow-lg">
            AI In The Palm Of Your Hand
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:px-8 ">

        {/* First Column - pulls from tools object */}
        <div className="col-span-1 row-2 space-y-4 drop-shadow-lg">
          {/* mapping over tools */}
          {tools.map((tool) => (
            <motion.div
              key={tool.href}
              whileHover={{ scale: 1.05, opacity: 0.8 }} // Framer Motion whileHover effect
            >
              <Card
                onClick={() => router.push(tool.href)}
                className=" border-black/5 flex items-center justify-between hover:shadow-sm transition cursor-pointer bg-[white]/20  text-[white] "
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon />
                  </div>
                  <div className={cn(`font-semibold`)}>
                    {tool.label}
                  </div>
                </div>
                
              </Card>
            </motion.div>
          ))}
        </div>


        {/* last column - pulls from tools2 object */}
        <div className="col-span-1 space-y-4 flex-col justify-end">
          {/* mapping over tools */}
          {tools2.map((tool) => (
            <motion.div
              key={tool.href}
              whileHover={{ scale: 1.05, opacity: 0.8 }} // Framer Motion whileHover effect
            >
              <Card
                onClick={() => router.push(tool.href)}
                className=" border-black/5 flex items-center justify-between  transition cursor-pointer  text-[white] bg-[white]/20"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon/>
                  </div>
                  <div className={cn(`font-semibold`)}>
                    {tool.label}
                  </div>
                </div>
                
                
              </Card>
            </motion.div>
          ))}
        </div>
      </div>







    </div>
  );
}