import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [animateToggle, setAnimateToggle] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dark mode toggle animation
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

  // Navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fecha menu ao clicar em link (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src="assets/Logo.jpg" alt="Logo LUMMA" className="logo" />

      {/* Hamburger - só aparece em mobile */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
        aria-expanded={menuOpen}
      >
        <span className={`bar ${menuOpen ? "open1" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open2" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open3" : ""}`}></span>
      </button>

      {/* Menu de navegação */}
      <nav className={menuOpen ? "open" : ""}>
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
