// THIS IS BEING USED ON CODE GENERATOR.........



import React from "react";
import { useLottie } from "lottie-react";
import animationData from "./brain4.json";


function Brain3() {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

 const { View } = useLottie(options)

    return (
        <>{View}</>
    );




}

export default Brain3;