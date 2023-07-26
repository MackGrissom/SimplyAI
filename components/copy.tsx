
// tools object
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




// DIALOG TITLE 
<DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
<div className="flex items-center gap-x-2 font-bold py-1">
    Upgrade to UnifyAI
    <Badge className="uppercase text-sm py-1  bg-gradient-to-r from-slate-500 to-sky-500  outline outline-1 outline-[black] h-8 font-extrabold ">
        Pro
    </Badge>
</div>
</DialogTitle>






// BUTTON
<motion.button
onClick={onSubscribe}
            className="w-full  bg-gradient-to-t from-slate-500 to-sky-500  outline outline-1 outline-[black] h-[50px] font-extrabold text-lg text-[white]"
            whileHover={{
                scale: 1.0, // Increase the size on hover
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
            }}
        >
            <span className="w-4 ml-2 fill-white h-4 ">&#9889;</span>
            Upgrade
        </motion.button>