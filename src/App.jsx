import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import Aos from "./pages/Aos";
import Parallax from "./pages/Parallax";
import Lax from "./pages/Lax";
import LaxCursor from "./pages/Lax/LaxCursor";
import LaxInertia from "./pages/lax/LaxInertia";
import LaxUpdate from "./pages/Lax/LaxUpdate";
import LaxScroll from "./pages/Lax/LaxScroll";
import LaxSnap from "./pages/Lax/LaxSnap";
import Skrollr from "./pages/Skrollr";
import Pdf from "./pages/Pdf";
import GSAP from "./pages/GSAP";
import TimeLine from "./pages/TimeLine";
import ScrollTrigger from "./pages/ScrollTrigger";
import ScrollTriggerPin from "./pages/ScrollTriggerPin";
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
          <Route path="laxUpdate" element={<LaxUpdate />} />
          <Route path="laxScroll" element={<LaxScroll />} />
          <Route path="laxSnap" element={<LaxSnap />} />
        </Route>
        <Route path="/skrollr" element={<Skrollr />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="/gsap" element={<GSAP />} />
        <Route path="/timeline" element={<TimeLine />} />
        <Route path="/scrollTrigger" element={<ScrollTrigger />} />
        <Route path="/scrollTriggerPin" element={<ScrollTriggerPin />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
