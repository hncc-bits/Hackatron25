"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import rocket from "../../utils/Rocket/rocket.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const Countdown = () => {
  return (
    <div className="countdown">
      <Lottie play loop animationData={rocket} className="rocket" speed={1} />
    </div>
  );
};

export default Countdown;
