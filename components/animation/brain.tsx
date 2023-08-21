// THIS IS BEING USED ON CONVERSATION....


import React from "react";
import Lottie, { useLottie } from 'lottie-react'
import animationData from "./brain.json";

function Brain() {
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

export default Brain;