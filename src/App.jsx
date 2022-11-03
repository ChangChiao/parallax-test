import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import Aos from "./pages/Aos";
import Parallax from "./pages/Parallax";
import Lax from "./pages/Lax";
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
        <Route path="/lax" element={<Lax />} />
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
