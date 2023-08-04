import Image from "next/image";
import Brain3 from "../animation/brain3";

interface EmptyProps {
    label: string;
}

export const Empty2 = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">

            <Brain3/>
                {/* <Image src="/empty.png" fill alt="Empty" /> */}
            
            
            </div>
            <p className="text-white text-sm text-center">
                {label}
            </p>
        </div>
    );
};