// import Lottie from "Lottie";
import dynamic from "next/dynamic";
// import Lottie from "lottie-react";
import React from "react";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const AnimationLottie = ({ animationPath }: { animationPath: unknown }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: "95%",
    },
  };
  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
