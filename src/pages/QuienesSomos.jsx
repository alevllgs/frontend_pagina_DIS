const QuienesSomos = () => {
    return (
      <div>
        <h1>Quiénes Somos</h1>
        <div className="team-container">
          <div className="team-member">
            <img src="/src/assets/professional1.jpg" alt="Profesional 1" />
            <h3>Dr. Juan Pérez</h3>
            <p>Especialista en Cardiología</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/professional2.jpg" alt="Profesional 2" />
            <h3>Dra. Ana Gómez</h3>
            <p>Especialista en Pediatría</p>
          </div>
          <div className="team-member">
            <img src="/src/assets/professional3.jpg" alt="Profesional 3" />
            <h3>Lic. Pedro Sánchez</h3>
            <p>Psicología Clínica</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default QuienesSomos;
  