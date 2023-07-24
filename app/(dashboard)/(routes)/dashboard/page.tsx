"use client";

import { ArrowBigRightDash, ArrowRight, BrainCircuit, Bug, BugIcon, CalendarSearch, File, GoalIcon, HelpCircle, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { tools } from "@/constants";
import Brain2 from "@/components/brain2";
import Brain4 from '@/components/brain4';
import Image from "next/image";
import { Loader } from "@/components/loader";

export default function HomePage() {
  const router = useRouter();
  const tools = [
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Audio Generation',
      icon: Music,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
  ];
  const tools2 = [
    {
      label: 'Request A Feature',
      icon: Terminal,
      href: '/',
      color: "text-[skyblue]-500",
      bgColor: "bg-[skyblue]-500/10",
    },
    {
      label: 'Report A Bug',
      icon: BugIcon,
      href: '/',
      color: "text-[skyblue]-500",
      bgColor: "bg-[skyblue]-500/10",
    },
    {
      label: 'Contribute To The Code',
      icon: BugIcon,
      href: '/',
      color: "text-[skyblue]-500",
      bgColor: "bg-[skyblue]-500/10",
    },
    {
      label: 'Contribute To The Code',
      icon: BugIcon,
      href: '/',
      color: "text-[skyblue]-500",
      bgColor: "bg-[skyblue]-500/10",
    },
    {
      label: 'Contribute To The Code',
      icon: BugIcon,
      href: '/',
      color: "text-[skyblue]-500",
      bgColor: "bg-[skyblue]-500/10",
    },
  ]

  return (
    <div className="mb-0 pb-0">

      <div className="mb-8 space-y-4 overflow-hidden">
        {/* ANIMATION... */}
        <Brain2 />


{/* Heading, animated */}
<div className="overflow-hidden flex items-center justify-center">
      <Image src="/logo1.png" alt="Logo" className="w-10 h-10 mr-2" width={10} height={10} />
      <div
        className="bg-gradient-to-tr from-black to-sky-400 inline-block"
        style={{
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        <motion.h2
          className=" py-4 text-2xl md:text-5xl font-bold text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            color: "#f2f8fc",
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          UnifyAI
        </motion.h2>
      </div>
    </div>

        <p className="text-white/40 bold  font-medium text-sm md:text-lg text-center">
          Leverage our latest AI tools and automate your workflow
        </p>
      </div>



      {/* CARDS */}
      <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:px-8 ">

        {/* First Column - pulls from tools object */}
        <div className="col-span-1 space-y-4">
          {/* mapping over tools */}
          {tools.map((tool) => (
            <motion.div
              key={tool.href}
              whileHover={{ scale: 1.1 }} // Framer Motion whileHover effect
            >
              <Card
                onClick={() => router.push(tool.href)}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-[black]/80 hover:shadow-[skyblue] text-[white]"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className={cn(`font-semibold hover:bg-[${tool.bgColor}]`)}>
                    {tool.label}
                  </div>
                </div>
                <ArrowBigRightDash className="w-5 h-5" />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Middle Empty Column */}
        <div className="col-span-1 space-y-4">

        </div>

        {/* last column - pulls from tools2 object */}
        <div className="col-span-1 space-y-4">
          {/* mapping over tools */}
          {tools2.map((tool) => (
            <motion.div
              key={tool.href}
              whileHover={{ scale: 1.1 }} // Framer Motion whileHover effect
            >
              <Card
                onClick={() => router.push(tool.href)}
                className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-[black]/80 hover:shadow-[skyblue] text-[white]"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-8 h-8", tool.color)} />
                  </div>
                  <div className={cn(`font-semibold hover:bg-[${tool.bgColor}]`)}>
                    {tool.label}
                  </div>
                </div>
                <ArrowBigRightDash className="w-5 h-5" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>







    </div>
  );
}