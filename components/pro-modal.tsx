import { useProModal } from "@/hooks/use-pro-modal";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare, Music, ImageIcon, VideoIcon, Code, BrainCircuit, Check, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from 'framer-motion';

const tools = [
    {
        label: 'UnifyChat Conversation Model',
        icon: MessageSquare,
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",
    },
    {
        label: 'Audio Generator',
        icon: Music,
       
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
    },
    {
        label: 'Image Generator',
        icon: ImageIcon,
        color: "text-pink-700",
        bgColor: "bg-pink-700/10",
        
    },
    {
        label: 'Video Generator',
        icon: VideoIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        
    },
    {
        label: 'Code Generation',
        icon: Code,
        color: "text-green-700",
        bgColor: "bg-green-700/10",
        
    },
    {
        label: 'Unlimited Access to all future updates.',
        icon: BrainCircuit,
        color: "text-sky-700",
        bgColor: "bg-sky-700/10",
       
    },
];

export default function ProModal() {
    const proModal = useProModal();
    return (
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to UnifyAI
                            <Badge className="uppercase text-sm py-1  bg-gradient-to-r from-slate-500 to-sky-500  outline outline-1 outline-[black] h-8 font-extrabold ">
                                Pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">

                        {/* iterating over tools object  */}
                        {tools.map((tool) => (

                            <Card key={tool.label}
                                className="p-3 border-black/5 flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                                        <tool.icon className={cn('w-6 h-6', tool.color)} />
                                    </div>
                                    <div className="font-semibold text-sm"> {tool.label}</div>
                                </div>
                                <Check className="text-primary w-5 h-5"/>
                            </Card>
                        ))}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="">
                <motion.button
                            className="w-full  bg-gradient-to-t from-slate-500 to-sky-500  outline outline-1 outline-[black] h-[50px] font-extrabold text-lg text-[white]"
                            whileHover={{
                                scale: 1.0, // Increase the size on hover
                                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
                            }}
                        >
                            <span className="w-4 ml-2 fill-white h-4 ">&#9889;</span>
                            Upgrade
                        </motion.button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}