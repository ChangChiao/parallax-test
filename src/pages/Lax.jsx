import { useEffect } from "react";
import lax from "lax.js";
function Lax() {
  useEffect(() => {
    window.onload = function () {
      lax.init();

      // Add a driver that we use to control our animations
      lax.addDriver("scrollY", function () {
        return window.scrollY;
      });

      // Add animation bindings to elements
      lax.addElements(".selector", {
        scrollY: {
          translateX: [
            ["elInY", "elCenterY", "elOutY"],
            [0, "screenWidth/2", "screenWidth"],
          ],
        },
      });
    };
  }, []);

  return (
    <div>
      <div className="selector">Hello</div>
    </div>
  );
}

export default Lax;
