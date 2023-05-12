import React, { ReactElement, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App(): ReactElement {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || ""
  );

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <div className="main">
          <Navbar theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
