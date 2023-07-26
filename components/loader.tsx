import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center bg-[skyblue]/70 rounded-md">
            <div className="w-10 h-10 relative animate-spin">
                <Image alt='logo' src='/logo1.png' fill sizes="" />
            </div>
            <p className="text-md text-muted-foreground"> UnifyAI is thinking..</p>
        </div>
    )
}