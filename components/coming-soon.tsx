import React from 'react';
import Lottie from 'lottie-web';
import animationData from './animation/brain11.json'; // Replace with your Lottie animation JSON file
import { Button } from './ui/button';

interface ComingSoonProps {
    animationData: any;
    text: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ animationData, text }) => {
    const animationContainerRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        if (animationContainerRef.current) {
            const animation = Lottie.loadAnimation({
                container: animationContainerRef.current,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData,
            });

            return () => {
                animation.destroy();
            };
        }
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }} className='bottom-0 w-full text-white -mt-[10%] hidden lg:flex md:flex'>
            <div ref={animationContainerRef} style={{ width: '500px', height: '500px' }} />
            <h1 className='text-white'>{text}</h1>
            <Button className='mt-2'> Join the Beta</Button>

        </div>
    );
};

export default ComingSoon;
