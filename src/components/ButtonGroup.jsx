import React from 'react';
import Button from './Button';
import colorPalettes from '../styles/colors'; // Importar la lista de paletas de colores
import '../styles/Button.css'; // Estilo de botones

// Puedes definir qué paleta usar, por ejemplo, la Paleta 1.
const palette = colorPalettes[0]; // Cambia el índice para usar una paleta diferente

const ButtonGroup = () => {
  return (
    <div className="buttons">
      <Button href="estadisticas/" icon="fa-chart-bar" title="Estadísticas REM" delay="0" iconColor={palette[0]} /> 
      <Button href="egresos_hospitalarios/" icon="fa-hospital" title="Egresos Hospitalarios" delay="100" iconColor={palette[1]} /> 
      <Button href="poblacion/" icon="fa-users" title="Población" delay="200" iconColor={palette[2]} /> 
      <Button href="lista_espera/" icon="fa-list-alt" title="Lista de Espera" delay="300" iconColor={palette[3]} /> 
      <Button href="mortalidad_natalidad/" icon="fa-heartbeat" title="Mortalidad / Natalidad" delay="400" iconColor={palette[4]} />
      <Button href="inmunizaciones/" icon="fa-syringe" title="R.N.I" delay="500" iconColor={palette[1]} /> 
      <Button href="prest_centinelas/" icon="fa-user-md" title="Prestaciones" delay="600" iconColor={palette[2]} /> 
      <Button href="https://app.powerbi.com/view?r=eyJrIjoiM2ZjNGI1ODQtODMwOS00NmI4LWE4ODAtMmZiMjk5NDNkZjI3IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9" icon="fa-money-check-dollar" title="Gestión Clínica-Financiera" delay="700" iconColor={palette[3]} /> 
      <Button href="at_urgencia/" icon="fa-ambulance" title="Atenciones de Urgencia" delay="800" iconColor={palette[4]} /> 
      <Button href="monitoreo_metas/" icon="fa-chart-pie" title="Monitoreo de Metas" delay="900" iconColor={palette[0]} /> 
      <Button href="red_asistencial/" icon="fa-h-square" title="Red Asistencial" delay="1000" iconColor={palette[2]} /> 
      <Button href="capsula/" icon="fa-graduation-cap" title="Capacitación" delay="1100" iconColor={palette[3]} /> 
      <Button href="noticias/" icon="fa-newspaper" title="Noticias" delay="1200" iconColor={palette[4]} /> 
    </div>
  );
};

export default ButtonGroup;


