import React from "react";
import cardData from "../data/quienesSomosData";
import CardComponent from "../components/CardComponent";
import "../styles/QuienesSomos.css";
import Footer from "../components/Footer";

function QuienesSomos() {
  return (
    <div className="quienes-somos-container">
      <div className="texto_quienes_somos">
        <h1 className="titulo-principal">
          Departamento de Información Sanitaria
        </h1>
        <h2>Quiénes Somos</h2>
        <p>
          Nuestro Departamento depende de la Subdirección de Gestión Asistencial
          del SSMO y está compuesto por profesionales de ámbitos
          multidisciplinarios como las Ciencias de la Salud, Financiera,
          Administrativa, Estadística e Informática Biomédica especializados en
          generar y gestionar información de calidad para nuestro Servicio.
        </p>

        <h2>Mision</h2>
        <p>
          Ser un departamento de apoyo continuo a la gestión del SSMO
          disponiendo para los requirentes internos y externos de información en
          salud integral, válida, oportuna y en los formatos adecuados para la
          planificación, organización, dirección, control y evaluación del
          Servicio. <br />
          <br /> Asimismo liderar ante los establecimientos de la red, la
          definición de los procesos según normas preestablecidas y los
          requerimientos del Servicio realizando actividades de coordinación y
          capacitación continua así como el apoyo directo a los referentes de
          cada establecimiento de salud. <br />
          <br /> Ser un departamento con recursos humanos calificados y en
          constante desarrollo para abordar las necesidades que se presentan y
          entregar productos de calidad. <br /> <br />
          Ser un departamento que genera aportes relevantes a la organización en
          el ámbito de la información en salud, generando insumos para
          investigación y que se encuentra dispuesto a adaptarse proactivamente
          a los cambios que impone el medio externo.
        </p>

        <h2>Organigrama</h2>
        <div className="organigrama-container">
          <img
            src="/img/quienes_somos/organigrama_2.jpg"
            alt="Organigrama del Departamento"
            className="organigrama-imagen"
          />
        </div>
      </div>
<div>
      <div className="nuestro-equipo">
        <h1>Nuestro Equipo</h1>
      </div>
      <div className="cards-container">
        {cardData.map((card) => (
          <CardComponent key={card.id} card={card} />
        ))}
      </div>
      </div>
      <Footer />
    </div>

  );
}

export default QuienesSomos;
