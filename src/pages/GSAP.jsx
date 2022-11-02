import React, { useEffect } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, Draggable, TextPlugin);
function GSAP() {
  useEffect(() => {
    // move animation
    gsap.to(".box", { opacity: 0, duration: 1, repeat: -1 });
    gsap.to(".box", { x: 100, duration: 1 });
    gsap.to(".box", { y: 100, duration: 1, delay: 1 });
    //word wall
    gsap.to(".loop", {
      xPercent: "-50",
      ease: "none",
      duration: 10,
      repeat: -1,
    });
  }, []);
  return (
    <div>
      <div className="w-10 h-10 box bg-cyan-700"></div>
      <section className="h-screen max-w-full overflow-hidden section">
        <ul className="inline-block h-full text-white stroke-2 loop webkit-text-stroke whitespace-nowrap stroke-black text-7xl drop-shadow-lg">
          <li>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
          </li>
          <li>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
          </li>
          <li>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
            <span className="inline-block">
              {" "}
              THE F2E THE F2E THE F2E THE F2E{" "}
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default GSAP;
