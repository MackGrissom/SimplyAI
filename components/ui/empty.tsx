import Image from "next/image";
import Brain from "../animation/brain";

interface EmptyProps {
    label: string;
}

export const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full  flex flex-col items-center justify-center">
            <div className="relative w-[25rem]">

            <Brain/>
                {/* <Image src="/empty.png" fill alt="Empty" /> */}
            
            
            </div>
            <p className="text-white/80 text-sm text-center">
                {label}
            </p>
        </div>
    );
};