import { useEffect } from "react";
import lax from "lax.js";
import "../../styles/laxSnap.css";
function LaxSnap() {
  useEffect(() => {
    lax.init();

    const container = document.querySelector(".container");

    lax.addDriver("containerScrollX", function () {
      return container.scrollLeft;
    });

    lax.addElements(".bg", {
      containerScrollX: {
        opacity: [
          [
            "screenWidth * (index-1)",
            "screenWidth * index",
            "screenWidth * (index+1)",
          ],
          [0, 1, 0],
        ],
      },
    });

    const imageAnimationMap = [
      "elCenterX-elWidth",
      "elCenterX",
      "elCenterX+elWidth",
    ];
    const textAnimationMap = [
      "elCenterX-(elWidth/3)",
      "elCenterX",
      "elCenterX+(elWidth/3)",
    ];

    lax.addElements(".page h1", {
      containerScrollX: {
        translateY: [
          textAnimationMap,
          [200, 0, 200],
          {
            easing: "easeInOutQuad",
          },
        ],
        opacity: [textAnimationMap, [0, 1, 0]],
      },
    });

    lax.addElements(".page p", {
      containerScrollX: {
        translateY: [
          textAnimationMap,
          [500, 0, 500],
          {
            easing: "easeInOutQuad",
          },
        ],
        opacity: [textAnimationMap, [0, 1, 0]],
      },
    });

    lax.addElements(".page .image", {
      containerScrollX: {
        translateY: [
          imageAnimationMap,
          [-100, 0, -100],
          {
            easing: "easeInOutQuad",
          },
        ],
        scale: [
          imageAnimationMap,
          [0.8, 1, 0.8],
          {
            easing: "easeInOutQuad",
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <div className="background">
        <div
          className="bg"
          style={{ backgroundImage: "url(../assets/bg3.png)" }}
        ></div>
        <div
          className="bg"
          style={{ backgroundImage: "url(../assets/bg1.png)" }}
        ></div>
        <div
          className="bg"
          style={{ backgroundImage: "url(../assets/bg2.png)" }}
        ></div>
      </div>

      <div className="container" id="scroller">
        <div className="page">
          <div
            className="image"
            style={{ backgroundImage: "url(../assets/shoe3.png)" }}
          ></div>
          <h1>Superstar</h1>
          <p>
            classNameics never go out of style. An instant icon since their
            debut, adidas Superstar Shoes first rose to fame on the basketball
            courts of the '70s and haven't slowed their roll since.
          </p>
        </div>

        <div className="page">
          <div
            className=" image"
            style="background-image: url('../assets/shoe1.png');"
          ></div>
          <h1>Retrorun</h1>
          <p>
            Retro design with a modern twist. Check out a busy side street or
            stroll to the corner store in these adidas running-inspired shoes.
            Suede overlays and contrast 3-Stripes give the flexible upper a
            sleek, sporty finish.
          </p>
        </div>

        <div className="page">
          <div
            className="image"
            style={{ backgroundImage: "url(../assets/shoe2.png)" }}
          ></div>
          <h1>Grand Court</h1>
          <p>
            A '70s style reborn. These shoes take inspiration from iconic sport
            styles of the past and move them into the future. The shoes craft an
            everyday look with a leather-like upper.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LaxSnap;
