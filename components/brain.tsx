import React from "react";
import Lottie from "react-lottie";
import animationData from "./brain.json";

function Brain() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} />;
}

export default Brain;