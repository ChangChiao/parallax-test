import { useEffect } from "react";
import Parallax from "parallax-js";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";
const ParallaxPage = () => {
  useEffect(() => {
    var scene = document.getElementById("scene");
    var parallaxInstance = new Parallax(scene);
  }, []);
  return (
    <div id="scene">
      <div data-depth="0.2">
        <img src={bg1} />
      </div>
      <div className="absolute right-0 " data-depth="0.6">
        <img src={bg2} />
      </div>
      <div data-depth="0.8">
        {/* <img src={bg3} /> */}
        third layer
      </div>
    </div>
  );
};

export default ParallaxPage;
