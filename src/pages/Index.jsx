import React from "react";
import { Link } from "react-router-dom";
const list = [
  { name: "index", path: "/" },
  { name: "aos", path: "/aos" },
  { name: "parallax", path: "/parallax" },
  { name: "lax", path: "/lax" },
  { name: "skrollr", path: "/skrollr" },
  { name: "PDF", path: "/pdf" },
  { name: "GSAP", path: "/gsap" },
  { name: "TimeLine", path: "/timeline" },
  { name: "ScrollTrigger", path: "/scrollTrigger" },
  { name: "ScrollTriggerPin", path: "/scrollTriggerPin" },
];
function Index() {
  return (
    <ul className="flex items-center justify-between">
      {list.map((item) => (
        <Link key={item.name} to={item.path}>
          {item.name}
        </Link>
      ))}
    </ul>
  );
}

export default Index;
