import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "./brain4.json";

function Brain2() {
  const animationRef = useRef(null);

  const defaultOptions = {
    loop: true,
    autoplay: true, // Disable autoplay by default
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleMouseEnter = () => {
    animationRef.current.play(); // Play the animation when the mouse enters
  };

  const handleMouseLeave = () => {
    animationRef.current.pause(); // Pause the animation when the mouse leaves
  };

  return (
    <div
      className="bg-[none] p-0 m-0 absolute justify-center lg:flex align-middle hidden mb-0 pb-0 overflow-hidden left-[47%] bottom-[15%] w-[25%]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Lottie
        options={defaultOptions}
        isPaused={!defaultOptions.autoplay} // Pass isPaused prop to manage animation pause state
        ref={animationRef}
      />
    </div>
  );
}

export default Brain2;
