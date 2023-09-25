import Image from "next/image";
import Brain3 from "../animation/brain3";
import ImageBrain from "../animation/image-brain.";

interface EmptyProps {
    label: string;
}

export const ImageAnimation = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full  flex flex-col items-center justify-center">
            <div className="relative w-[25rem]">

            <ImageBrain/>
                {/* <Image src="/empty.png" fill alt="Empty" /> */}
            
            
            </div>
            <p className="text-white/80 text-sm text-center">
                {label}
            </p>
        </div>
    );
};