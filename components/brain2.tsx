import React from "react";
import Lottie from "react-lottie";
import animationData from "./brain2.json";
import animationData2 from './brain2.json'
function Brain2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (

    <div className='bg-[none] p-0 m-0  -z-[999] absolute justify-center   lg:flex align-middle hidden mb-0 pb-0 overflow-hidden left-[42%] bottom-5 w-[35%] '>
      
        <Lottie options={defaultOptions} />
      
    </div>
  )


}

export default Brain2;