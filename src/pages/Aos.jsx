import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Aos() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className="item" data-aos="fade-in" data-aos-offset="200">
        1111
      </div>
      <div
        className="absolute item top-1 right-1"
        data-aos="fade-up-left"
        data-aos-delay="50"
      >
        2222
      </div>
      <div className="item" data-aos="fade-right" data-aos-easing="ease-in-out">
        3333
      </div>
      <div className="item" data-aos="zoom-in-up" data-aos-once="false">
        4444
      </div>
    </div>
  );
}

export default Aos;
