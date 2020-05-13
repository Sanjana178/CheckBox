import React from "react";
import Lottie from "react-lottie";
import * as done from "./done.json";

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: done.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Done = () => {
  return (
    <div>
      <Lottie options={defaultOptions} height={120} width={120} />
    </div>
  );
};

export default Done;
