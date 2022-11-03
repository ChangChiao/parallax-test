import { useEffect } from "react";
import lax from "lax.js";
import "../../styles/laxUpdate.css";
function LaxUpdate() {
  useEffect(() => {
    lax.init();

    lax.addDriver("scrollY", function () {
      return window.scrollY;
    });

    lax.addElements(
      "#text",
      {},
      {
        onUpdate: function (driverValues, domElement) {
          const scrollY = driverValues.scrollY[0];

          const oCount = Math.floor(scrollY / 10 + 1);
          const oString = Array.from({ length: oCount }, (v, i) => "o").join(
            ""
          );
          domElement.innerHTML = "scr" + oString + "ll";

          if (scrollY > 1000) {
            domElement.classList.add("pink");
          } else {
            domElement.classList.remove("pink");
          }
        },
      }
    );
  }, []);

  return <div id="text"></div>;
}

export default LaxUpdate;
