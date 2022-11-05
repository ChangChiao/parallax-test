import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../styles/scrollTriggerScene.css";
import TextPlugin from "gsap/TextPlugin";
function ScrollTriggerScene() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
    const srollTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        pin: true,
        markers: true,
        scrub: true,
      },
    });

    srollTL.to(".gate-left-1", { yPercent: "-100" });
    srollTL.to(".gate-right-1", { yPercent: "100" }, "<");
    srollTL.to(".gate-left-2", { yPercent: "-100" });
    srollTL.to(".gate-right-2", { yPercent: "100" }, "<");
  }, []);
  return (
    <section class="section3">
      <div class="gate gate-left gate-left-1 z-20">
        <i class="fa-solid fa-house"></i>
      </div>
      <div class="gate gate-right gate-right-1 z-20">
        <h2>WEEK 1</h2>
      </div>
      <div class="gate gate-left gate-left-2 z-10">
        <i class="fa-solid fa-cloud"></i>
      </div>
      <div class="gate gate-right gate-right-2 z-10">
        <h2>WEEK 2</h2>
      </div>
      <div class="gate gate-left gate-left-3 z-0">
        <i class="fa-solid fa-location-dot"></i>
      </div>
      <div class="gate gate-right gate-right-3 z-0">
        <h2>WEEK 3</h2>
      </div>
    </section>
  );
}

export default ScrollTriggerScene;
