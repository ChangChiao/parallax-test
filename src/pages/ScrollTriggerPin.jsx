import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin);
function ScrollTriggerPin() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box1",
        markers: true,
        start: "top 6%",
        end: "top 4%",
        scrub: true,
      },
    });

    tl.to(".box1", {
      top: 0,
      left: "50%",
      xPercent: "-50",
      // duration: 10,
      position: "absolute",
    }).to(".box1", {
      top: "100%",
      yPercent: "-100",
      // duration: 20,
      position: "absolute",
    });
  }, []);
  return (
    <div className="h-[300vh] bg-slate-500 py-[500px]">
      <div className="fixed top-0 left-0 right-0 bottom-0 m-auto h-[300px] w-1/2 bg-white">
        <div className="w-10 h-10 bg-green-500 box1"></div>
      </div>
    </div>
  );
}

export default ScrollTriggerPin;
