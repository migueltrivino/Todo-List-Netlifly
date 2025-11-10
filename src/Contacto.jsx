import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto__content">
        <h2>Contáctanos</h2>

        <form className="contacto__form">
          <label htmlFor="nombre">Nombre completo</label>
          <input type="text" id="nombre" placeholder="Tu nombre" required />

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" placeholder="ejemplo@gmail.com" required />

          <label htmlFor="mensaje">Mensaje</label>
          <textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." rows="5" required></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>

      <footer className="contacto__footer">
        <p>© {new Date().getFullYear()} SENA </p>
      </footer>
    </section>
  );
}

export default Contacto;
