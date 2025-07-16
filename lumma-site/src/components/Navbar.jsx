import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [animateToggle, setAnimateToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detecta o tema do sistema no carregamento
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
  }, []);

  // Aplica/remover dark mode
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

  // Animação ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      navbar.classList.toggle("scrolled", window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <img src="assets/Logo.jpg" alt="Logo LUMMA" className="logo" />

      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <a onClick={() => handleNavClick("sobre")}>Sobre</a>
        <a onClick={() => handleNavClick("menu")}>Menu</a>
        <a onClick={() => handleNavClick("reservas")}>Reservas</a>
        <a onClick={() => handleNavClick("galeria")}>Galeria</a>
        <a onClick={() => handleNavClick("contacto")}>Contacto</a>
        {/* Botão dentro do menu em telas pequenas */}
        <button
          className={`toggle-dark ${animateToggle ? "animate" : ""}`}
          onClick={() => setIsDark((prev) => !prev)}
        >
          {isDark ? "☀️ Claro" : "🌙 Escuro"}
        </button>
      </nav>

      <div className="nav-controls">
        <button className="reserve-btn" onClick={() => handleNavClick("reservas")}>
          Reservar
        </button>
        {/* Botão fora do menu em telas grandes */}
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
