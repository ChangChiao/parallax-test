import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin);
function TimeLine() {
  const timelime = gsap.timeline();
  useEffect(() => {
    timelime.to(".box", { x: 100, opacity: 1, duration: 1 });
    timelime.to(".box1", { y: 100, opacity: 1, duration: 1 });
  }, []);
  return (
    <div>
      <div className="w-10 h-10 opacity-0 box bg-cyan-700"></div>
      <div className="w-10 h-10 bg-green-500 opacity-0 box1"></div>
    </div>
  );
}

export default TimeLine;
