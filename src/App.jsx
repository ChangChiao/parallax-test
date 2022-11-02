import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import Aos from "./pages/Aos";
import Parallax from "./pages/Parallax";
import Lax from "./pages/Lax";
import LaxCursor from "./pages/Lax/LaxCursor";
import LaxInertia from "./pages/lax/LaxInertia";
import Skrollr from "./pages/Skrollr";
import Pdf from "./pages/Pdf";
import GSAP from "./pages/GSAP";
import TimeLine from "./pages/TimeLine";
import ScrollTrigger from "./pages/ScrollTrigger";
function App() {
  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/aos" element={<Aos />} />
        <Route path="/parallax" element={<Parallax />} />
        <Route path="lax" element={<Lax />}>
          <Route path="laxcursor" element={<LaxCursor />} />
          <Route path="laxInertia" element={<LaxInertia />} />
        </Route>
        <Route path="/skrollr" element={<Skrollr />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/gsap" element={<GSAP />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/scrollTrigger" element={<ScrollTrigger />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
