import React from "react";
import "./Hero.css";

function Hero() {
  const programas = [
    {
      titulo: "Tecnología en Análisis y Desarrollo de Software",
      descripcion:
        "El programa de formación tecnológica en Análisis y Desarrollo de Software, está enfocado en el desarrollo de habilidades alrededor de las actividades inherentes al proceso de creación de aplicaciones informáticas, de acuerdo con los requerimientos funcionales y técnicos para una solución de negocio, estableciendo métodos de trabajo individual y en equipo, potenciando los valores éticos, profesionales y personales, en beneficio de la sociedad y de la competitividad del país.",
      imagen:
        "https://i.ytimg.com/vi/8t3a_aEJM3Y/maxresdefault.jpg",
    },
    {
      titulo: "Desarrollo de Videojuegos y Entornos Interactivos",
      descripcion:
        "En este programa se aprenderá a desarrollar videojuegos y entornos interactivos, partiendo desde cero, pasando por las fases de preproducción, producción y posproducción. Comenzando por la historia y tipos de videojuegos, para poder desarrollar la idea base, elaborar el guion narrativo, guion técnico, storyboard y definir las mecánicas y niveles del juego.",
      imagen:
        "https://www.sena.edu.co/es-co/Noticias/NoticiasImg/20160498.jpg",
    },
    {
      titulo: "Alimentacòn Bovina",
      descripcion:
        "Con esta estrategia, el SENA busca propiciar el reconocimiento del campesinado en la vida social, cultural y económica del país, con líneas de acción transversales para atender a esta población y generar capacidades para la articulación y consolidación de modelos asociativos campesinos.",
      imagen:
        "https://www.sena.edu.co/es-co/Noticias/NoticiasImg/BPganaderia_13Dic2018.jpg",
    },
  ];

  return (
    <section className="hero">
      <h2>Bienvenidos a mi página</h2>
      <p>Explora algunos de los programas destacados que ofrece el SENA</p>

      <div className="hero__cards">
        {programas.map((programa, index) => (
          <div className="hero__card" key={index}>
            <img src={programa.imagen} alt={programa.titulo} />
            <div className="hero__card-content">
              <h3>{programa.titulo}</h3>
              <p>{programa.descripcion}</p>
              <button>Más información</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
