import { useEffect } from "react";
import lax from "lax.js";
import "../../styles/laxInertia.css";
function LaxInertia() {
  useEffect(() => {
    window.onload = function () {
      lax.init();

      lax.addDriver(
        "scrollY",
        function () {
          return window.scrollY;
        },
        { inertiaEnabled: true }
      );

      lax.addElements(".circle", {
        scrollY: {
          perspective: [[0], [1000]],
          rotateX: [
            [0],
            [0],
            {
              inertia: -1,
            },
          ],
          "box-shadow": [
            [0],
            [0],
            {
              inertia: -1,
              cssFn: (val) => {
                return `0px ${Math.abs(val)}px 30px rgba(0,0,0,0.2)`;
              },
            },
          ],
          translateY: [
            [0],
            [0],
            {
              inertia: -1,
            },
          ],
          brightness: [
            [0],
            [1],
            {
              inertia: -0.01,
            },
          ],
        },
      });
    };
  }, []);

  return <div class="circle"></div>;
}

export default LaxInertia;
