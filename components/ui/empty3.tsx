import Image from "next/image";
import Brain6 from "../animation/brain6";

interface EmptyProps {
    label: string;
}

export const Empty3 = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">

            <Brain3/>
                {/* <Image src="/empty.png" fill alt="Empty" /> */}
            
            
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    );
};