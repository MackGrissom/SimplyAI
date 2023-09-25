import React from "react";
import Lottie from "react-lottie";
import animationData from "./image.json";
import { useLottie } from "lottie-react";

function ImageBrain() {
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
  <>{View}</>);
}

export default ImageBrain;