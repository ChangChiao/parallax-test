import React from "react";
import { Link } from "react-router-dom";
const list = [
  { name: "index", path: "/" },
  { name: "aos", path: "/aos" },
  { name: "parallax", path: "/parallax" },
  { name: "lax", path: "/lax" },
  { name: "skrollr", path: "/skrollr" },
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
