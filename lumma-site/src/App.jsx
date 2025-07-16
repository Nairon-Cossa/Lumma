import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Menu from "./components/Menu";
import Reservas from "./components/Reservas";
import Galeria from "./components/Galeria";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Menu />
      <Reservas />
      <Galeria />
      <Contacto />
      <Footer />
    </>
  );
}

export default App;
