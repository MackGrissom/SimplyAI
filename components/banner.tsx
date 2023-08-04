'use client'
import { useState } from 'react';
import { X } from 'lucide-react';

const Banner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="flex items-center gap-x-6 bg-[skyblue]/30 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 rounded-lg">
            <p className="text-sm leading-6 text-white">
                <a href="#">
                    <strong className="font-semibold">We're Officially In Beta!</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    Join us as we continue to develop  and see what’s coming up next&nbsp;
                    <span aria-hidden="true">&rarr;</span>
                </a>
            </p>
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
                    <span className="sr-only">Dismiss</span>
                    <X className="h-5 w-5 text-white" aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default Banner;
