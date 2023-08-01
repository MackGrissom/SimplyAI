"use client";

import { ArrowBigRightDash, ArrowRight, BarChart3, Brain, BrainCircuit, Bug, BugIcon, CalendarSearch, File, GoalIcon, HelpCircle, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { tools } from "@/constants";
import Brain2 from "@/components/animation/brain2";

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
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
    {
      label: 'Music Generation (In Beta)',
      icon: Music,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation (In Beta)',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
   


  ];
  const tools2 = [
    {
      label: 'Video Generation (In Beta)',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Request A Feature',
      icon: Terminal,
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
      label: 'Learn About UnifyAI',
      icon: Brain,
      href: '/about',
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
  ]

  return (
    <div className="mb-0 pb-0 mt-3">

      <div className="mb-8 space-y-4 overflow-hidden">
        {/* ANIMATION... */}



        {/* Heading, animated */}
        <div className="overflow-hidden flex items-center justify-center pt-2">
          <Image src="/logo1.png" alt="Logo" className="w-10 h-10 mr-2" width={10} height={10} />
          <div
            className="bg-gradient-to-tr from-black to-sky-400 inline-block"
            style={{
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <h2 className="py-4 text-2xl md:text-5xl font-bold text-center text-white">
              UnifyAI
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <p className="text-center text-white text-sm md:text-lg font-medium p-4 rounded-lg inline-block drop-shadow-lg">
            Cutting-edge AI solutions, centralized.
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
                className=" border-black/5 flex items-center justify-between  transition cursor-pointer  text-[white] bg-[white]/10"
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