import React from "react";
import Lottie from "react-lottie";
import animationData from "./brain3.json";
import animationData3 from './brain4.json'
function Brain3() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };


    return (
    
            <Lottie options={defaultOptions} />
       
    );




}

export default Brain3;