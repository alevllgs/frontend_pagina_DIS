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
      <Button href="estadisticas/" icon="fa-chart-bar" title="Estadísticas REM" delay="0" iconColor={palette[0]} /> 
      <Button href="lista_espera/" icon="fa-list-alt" title="Lista de Espera" delay="300" iconColor={palette[3]} /> 
      <Button href="ges/" icon="fa-hospital-user" title="GES" delay="100" iconColor={palette[1]} /> 
      <Button href="grd/" icon="fa-bed-pulse" title="GRD" delay="200" iconColor={palette[2]} /> 
      <Button href="indicadores/" icon="fa-chart-pie" title="Indicadores" delay="900" iconColor={palette[0]} /> 
      
      <Button href="produccion_hospitalaria/" icon="fa-hospital" title="Producción Hospitalaria" delay="800" iconColor={palette[4]} /> 
      <Button href="produccion_ambulatoria/" icon="fa-house-medical" title="Producción APS" delay="800" iconColor={palette[4]} /> 
      <Button href="at_urgencia/" icon="fa-ambulance" title="Atenciones de Urgencia" delay="800" iconColor={palette[4]} /> 
      <Button href="inmunizaciones/" icon="fa-syringe" title="Inmunización" delay="500" iconColor={palette[1]} /> 
      <Button href="https://app.powerbi.com/view?r=eyJrIjoiOWJmNThmNDYtMmU5Mi00MzNiLWJmMzctNmEyZjA2NGY5NWRjIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9" icon="fa-person-walking-arrow-right" title="Mapa de derivación" delay="600" iconColor={palette[2]} /> 
      
      <Button href="https://app.powerbi.com/view?r=eyJrIjoiM2ZjNGI1ODQtODMwOS00NmI4LWE4ODAtMmZiMjk5NDNkZjI3IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9" icon="fa-money-check-dollar" title="Gestión Clínica-Financiera" delay="700" iconColor={palette[3]} />
      <Button href="visores_territoriales/" icon="fa-map-location-dot" title="Visores territoriales" delay="1200" iconColor={palette[4]} /> 
      <Button href="poblacion/" icon="fa-people-group" title="Población" delay="400" iconColor={palette[4]} />
    </div>
  );
};

export default ButtonGroup;


