import React from "react";
import Lottie from "react-lottie";
import animationData from "./brain9.json";
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
    <div className="-z-[999]">
            <Lottie options={defaultOptions} />
            </div>
    );




}

export default Brain3;