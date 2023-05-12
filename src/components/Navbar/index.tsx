import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineWbSunny, MdOutlineDarkMode } from "react-icons/md";

const Navbar = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const updateTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h3>AY</h3>
          </Link>
        </div>
        <div className="right-nav">
          <ul className={isMobileMenuOpen ? "active" : ""}>
            <li>
              <Link onClick={closeMenu} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="toggle-button"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
          <div className="theme">
            {theme === "light" || !theme ? (
              <MdOutlineDarkMode onClick={() => updateTheme("dark")} />
            ) : (
              <MdOutlineWbSunny onClick={() => updateTheme("light")} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
