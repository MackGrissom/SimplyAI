import Image from "next/image";

export const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center bg-none rounded-md bg-transparent">
            <div className="w-10 h-10 relative animate-spin">
                <Image alt='logo' src='/slogo.png' fill sizes="" />
            </div>
            <p className="text-md text-white"> SimplyAI is thinking..</p>
        </div>
    )
}