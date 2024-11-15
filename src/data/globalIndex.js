// src/data/globalIndex.js  aca ingreso lo que debe buscar el buscador

const globalIndex = [
    {
      page: "Home",
      path: "/",
      content: [
        { title: "¡Bienvenido a nuestra página! Explora nuestros servicios.", link: null },
        { title: "Departamento de Información Sanitaria", link: null },
        { title: "Estadísticas REM", link: "/estadisticas/" },
        { title: "Lista de Espera", link: "/lista_espera/" },
        { title: "GES", link: "/ges/" },
        { title: "GRD", link: "/grd/" },
        { title: "Indicadores", link: "/indicadores/" },
        { title: "Producción Hospitalaria", link: "/produccion_hospitalaria/" },
        { title: "Producción APS", link: "/produccion_ambulatoria/" },
        { title: "Atenciones de Urgencia", link: "/at_urgencia/" },
        { title: "Inmunización", link: "/inmunizaciones/" },
        {
          title: "Mapa de derivación",
          link: "https://app.powerbi.com/view?r=eyJrIjoiOWJmNThmNDYtMmU5Mi00MzNiLWJmMzctNmEyZjA2NGY5NWRjIiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9",
        },
        {
          title: "Gestión Clínica-Financiera",
          link: "https://app.powerbi.com/view?r=eyJrIjoiM2ZjNGI1ODQtODMwOS00NmI4LWE4ODAtMmZiMjk5NDNkZjI3IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9",
        },
        { title: "Visores territoriales", link: "/visores_territoriales/" },
        { title: "Población", link: "/poblacion/" },
      ],
    },
    {
      page: "GES",
      path: "/ges",
      content: [
        {
          title: "Garantías Retrasadas GES (bimensual)",
          link: "https://app.powerbi.com/view?r=eyJrIjoiYWM0OGMxNWItYmMyMC00ZDM5LWEwZWMtNzEwOTBhODQwMjQ2IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9",
        },
        {
          title: "Cumplimiento de Garantías GES (mensual)",
          link: "https://app.powerbi.com/view?r=eyJrIjoiYTE5Y2RjNmYtZmFlMy00NDc1LThhYzUtNWM3Zjc1ODE2OTY2IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9",
        },
        {
          title: "Garantías Exceptuadas Transitorias",
          link: "https://app.powerbi.com/view?r=eyJrIjoiNjIzNGI0ODAtY2FhOC00YWVkLThhMTgtMmFkZTFhMDRiYmI3IiwidCI6IjA2MDc0N2E5LTk5YjYtNDg4NS1hNmQxLWI3ZDg1OGE4M2E1MyJ9",
        },
        { title: "Mapa derivación GES (flujo)", link: "/pagina_sigges/protocolos_ges.html" },
        {
          title: "Circular 195 Super Salud",
          link: "https://dis.saludoriente.cl/degidssmo/ges/Circular-195%20(DAU%20Notificaci%C3%B3n)%202013.pdf",
        },
        {
          title: "Circular 227 Super Salud",
          link: "https://dis.saludoriente.cl/degidssmo/ges/CircularN%C2%BA227_Modifica%20Constancia%20GES.pdf",
        },
        {
          title: "Circular 288 Super Salud",
          link: "https://dis.saludoriente.cl/degidssmo/ges/Cirular%20SIS%20288%20Modificaciones%20Excepciones%20GO_%2006%2007%202017.pdf",
        },
        {
          title: "Ordinario MINSAL N° 2134",
          link: "https://dis.saludoriente.cl/degidssmo/ges/Ord%202134%20nueva%20intrucciones%20GES%20mayo%202018.pdf",
        },
        {
          title: "Nueva Nomenclatura Garantias",
          link: "https://dis.saludoriente.cl/degidssmo/ges/Nueva%20Nomenclatura%20de%20Garant%C3%ADas%20v1%20%202018.pdf",
        },
        {
          title: "Diario Oficial Decreto GES 2019",
          link: "https://dis.saludoriente.cl/degidssmo/ges/Publicacion%20diario%20oficial.%20Nuevo%20Decreto%20GES%202019.pdf",
        },
      ],
    },
    {
      page: "Documentos",
      path: "/documentos",
      content: [
        { title: "Documento 1 - Introducción a React", link: null },
        { title: "Documento 2 - Guía de uso de Context API", link: null },
        { title: "Documento 3 - Configuración de Vite", link: null },
        { title: "Documento 4 - Rutas protegidas en React", link: null },
        { title: "Documento 5 - Manejo de Estados en React", link: null },
      ],
    },
    {
      page: "Quiénes Somos",
      path: "/quienes-somos",
      content: [
        { title: "Sobre Nosotros", link: null },
        {
          title: "Esta es la sección principal de nuestra página donde describimos quiénes somos y qué hacemos.",
          link: null,
        },
        { title: "Nuestros Servicios", link: null },
        { title: "Detalles sobre nuestros servicios...", link: null },
      ],
    },
  ];
  
  export default globalIndex;
  