import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Index from "./pages/Index";
import Aos from "./pages/Aos";
import Parallax from "/pages/Parallax";
import Lax from "./pages/Lax";
import Skrollr from "./pages/Skrollr";
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
      </Routes>
    </HashRouter>
  );
}

export default App;
