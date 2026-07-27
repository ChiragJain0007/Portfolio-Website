import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ toggleTheme, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">

      <div className="logo">
        Portfolio
      </div>

      <div className="menu-icon" onClick={handleMenu}>
        ☰
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </nav>

    </header>
  );
}

export default Navbar;