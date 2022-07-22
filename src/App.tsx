import React, { ReactElement, useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App(): ReactElement {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") || ""
  );

  const updateTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <BrowserRouter>
      <div className={`App ${theme}`}>
        <div className="main">
          <Navbar theme={theme} updateTheme={updateTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
