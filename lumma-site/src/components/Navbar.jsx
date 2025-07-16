import React, { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [animateToggle, setAnimateToggle] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Gatilho de animação ao trocar
    setAnimateToggle(true);
    const timeout = setTimeout(() => setAnimateToggle(false), 400); // Duração da animação

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

  return (
    <header className="navbar">
      <img src="assets/Logo.jpg" alt="Logo LUMMA" className="logo" />
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#menu">Menu</a>
        <a href="#reservas">Reservas</a>
        <a href="#galeria">Galeria</a>
        <a href="#contacto">Contacto</a>
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
