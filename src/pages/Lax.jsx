import { useEffect } from "react";
import lax from "lax.js";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const list = [
  { name: "cursor", path: "laxcursor" },
  { name: "Inertia", path: "laxInertia" },
  { name: "update", path: "laxUpdate" },
  { name: "scroll", path: "laxScroll" },
  { name: "Snap", path: "laxSnap" },
];
function Lax() {
  useEffect(() => {
    // window.onload = function () {
    //   lax.init();
    //   // Add a driver that we use to control our animations
    //   lax.addDriver("scrollY", function () {
    //     return window.scrollY;
    //   });
    //   // Add animation bindings to elements
    //   lax.addElements(".selector", {
    //     scrollY: {
    //       translateX: [
    //         ["elInY", "elCenterY", "elOutY"],
    //         [0, "screenWidth/2", "screenWidth"],
    //       ],
    //     },
    //   });
    // };
  }, []);

  return (
    <div>
      <ul className="flex items-center justify-between">
        {list.map((item) => (
          <Link key={item.name} to={item.path}>
            {item.name}
          </Link>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}

export default Lax;
