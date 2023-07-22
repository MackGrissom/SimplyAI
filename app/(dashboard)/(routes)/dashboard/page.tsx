"use client";

import { ArrowBigRightDash, ArrowRight, BrainCircuit, Bug, CalendarSearch, File, GoalIcon, HelpCircle, Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";
import { tools } from "@/constants";
import Brain2 from "@/components/brain2";
import Brain4 from '@/components/brain4';
import Image from "next/image";

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
      label: 'Music Generation',
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
]



  return (
    <div className="mb-0 pb-0">
      
      {/* HEADING */}
      <div className="mb-8 space-y-4">
        <Brain2 />
        <h2 className="text-2xl md:text-5xl font-bold text-center text-skyblue-300 text-outline-black bg-gradient-to-b from-sky-400 to-slate-900 bg-clip-text text-transparent">
          Welcome to Your All-In-One AI ToolKit
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Leverage our latest AI tools and automate your tasks
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
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-[gray]/10 hover:shadow-[skyblue]/70 text-[black]/70"
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
  <div className="col-span-1 space-y-4  text-[black] bg-white/20 h-full w-full text-xl text-center ">
   <span className="flex justify-center">
{/* <p className="italic"> Welcome to Unify. Bringing together all the latest AI tools into one powerful suite. As a solo developer, I am thrilled to present this cutting-edge platform that aims to simplify and streamline your AI experience. While Unify is still in its early stages, I am dedicated to refining and expanding its capabilities. Your feedback is incredibly valuable to me, so please share your thoughts, suggestions, and ideas. 
  Together, we can shape Unify into the ultimate AI solution that's accessible to everyone.. <br/> Thank you for joining us on this exciting journey! </p> */}

  </span> 
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
          className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer bg-[gray]/10 hover:shadow-[skyblue]/70 text-[black]/70"
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