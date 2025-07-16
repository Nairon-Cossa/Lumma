import React, { useEffect, useState } from "react";
import "../styles.css";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animateToggle, setAnimateToggle] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    setAnimateToggle(true);
    const timeout = setTimeout(() => setAnimateToggle(false), 400);
    return () => clearTimeout(timeout);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <img src="assets/Logo.jpg" alt="Logo LUMMA" className="logo" />

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#sobre" onClick={handleLinkClick}>Sobre</a>
        <a href="#menu" onClick={handleLinkClick}>Menu</a>
        <a href="#reservas" onClick={handleLinkClick}>Reservas</a>
        <a href="#galeria" onClick={handleLinkClick}>Galeria</a>
        <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
      </nav>

      <div className="nav-controls">
        <button
          className="reserve-btn"
          onClick={() =>
            document.getElementById("reservas").scrollIntoView({ behavior: "smooth" })
          }
        >
          Reservar
        </button>
        <button
          className={`toggle-dark ${animateToggle ? "animate" : ""}`}
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? "☀️" : "🌓"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
