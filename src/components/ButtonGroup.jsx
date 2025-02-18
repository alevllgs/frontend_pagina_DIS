import React from 'react';
import Button from './Button';
import colorPalettes from '../styles/colors'; // Importar la lista de paletas de colores
import '../styles/Button.css'; // Estilo de botones

// Puedes definir qué paleta usar, por ejemplo, la Paleta 1.
const paleta = Math.floor(Math.random() * colorPalettes.length) // Cambia el índice para usar una paleta diferente
const palette = colorPalettes[paleta]; 

const ButtonGroup = () => {
  return (
    <div className="buttons">
      <Button href="rem/" icon="fa-chart-bar" title="REM" delay="0" iconColor={palette[0]} /> 
      <Button href="lista_espera/" icon="fa-list-alt" title="Lista de Espera" delay="300" iconColor={palette[1]} /> 
      <Button href="ges/" icon="fa-hospital-user" title="GES" delay="100" iconColor={palette[2]} /> 
      <Button href="https://app.powerbi.com/view?r=eyJrIjoiZDFiNGU5YjQtNDQwYi00ODhkLTgxOWYtNDcyOTA0MzZhMjgxIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9" icon="fa-bed-pulse" title="GRD" delay="200" iconColor={palette[3]} /> 
      <Button href="comges/" icon="fa-chart-pie" title="COMGES" delay="900" iconColor={palette[4]} /> 
      <Button href="https://app.powerbi.com/view?r=eyJrIjoiNWZkNjNhMDAtNjFjYi00OTgzLTllODctMjc3ZmJhNjUwNTU1IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9" icon="fa-chart-line" title="Acuerdo de Gestión FONASA" delay="900" iconColor={palette[5]} /> 
      
      <Button href="produccion_hospitalaria/" icon="fa-hospital" title="Producción Hospitalaria" delay="800" iconColor={palette[5]} /> 
      <Button href="actividades_aps/" icon="fa-house-medical" title="Actividades de APS" delay="800" iconColor={palette[4]} /> 
      <Button href="urgencia/" icon="fa-ambulance" title="Atenciones de Urgencia" delay="800" iconColor={palette[3]} /> 
      <Button href="inmunizacion/" icon="fa-syringe" title="Inmunización" delay="500" iconColor={palette[2]} /> 
      <Button href="mapas_derivacion" icon="fa-person-walking-arrow-right" title="Mapas de derivación" delay="600" iconColor={palette[1]} /> 
      
      <Button href="gestion_clinica_financiera/" icon="fa-money-check-dollar" title="Gestión Clínica-Financiera" delay="700" iconColor={palette[0]} />
      <Button href="visor_territorial/" icon="fa-map-location-dot" title="Visores territoriales" delay="1200" iconColor={palette[0]} /> 
      <Button href="estadisticas_vitales/" icon="fa-people-group" title="Estadísticas Vitales" delay="400" iconColor={palette[1]} />
      
      
      <Button href="gestion_adm_pacientes/" icon="fa-house-medical-circle-check" title="Gestión Adm de Pacientes" delay="400" iconColor={palette[2]} />
      <Button href="links_interes/" icon="fa-link" title="Links de interés" delay="400" iconColor={palette[3]} />
      <Button href="control_gestion/" icon="fa-magnifying-glass-chart" title="Dpto Control de Gestión" delay="400" iconColor={palette[4]} />
    </div>
  );
};

export default ButtonGroup;


