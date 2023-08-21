'use client'

import ComingSoon from "@/components/coming-soon";
import animationData from '@/components/animation/comingsoon.json'; // Replace with your Lottie animation JSON file

const TranslatorPage = () => {
  return (
    <div>
      <ComingSoon animationData={animationData} text="Under Development. Coming Soon!" />
    </div>
  );
}

export default TranslatorPage;
