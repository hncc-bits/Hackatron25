"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import fire from "../../utils/Rocket/fire.json";
import smoke from "../../utils/Rocket/smoke.json";

const Lottie = dynamic(() => import("react-lottie-player"), { ssr: false });

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const [showFire, setShowFire] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
        setShowFire(false);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <button
        type="button"
        className={`go-to-top-btn ${show ? "show" : ""}`}
        onClick={() => {
          setShow(true);
          setShowFire(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <Lottie
          play
          loop
          animationData={fire}
          className={`rocketFire ${showFire ? "show" : "hidden"}`}
          style={{ height: "100px", width: "100px", transform: "-rotate(45deg)" }}
          speed={1}
        />
        <Lottie
          play
          loop
          animationData={smoke}
          className={`rocketSmoke ${showFire ? "hidden" : "show"}`}
          style={{ height: "100px", width: "100px", transform: "-rotate(45deg)" }}
          speed={1}
        />
      </button>
    </div>
  );
};

export default BackToTop;
