import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img
          src="https://www.sena.edu.co/Style%20Library/alayout/images/logoSena.png?rev=40"
          alt="Logo SENA"
        />
        <h1>SENA</h1>
      </div>

      <nav className="navbar__links">
        <a href="#">Inicio</a>
        <a href="#">Programas</a>
        <a href="#">Acerca</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
}

export default Navbar;
