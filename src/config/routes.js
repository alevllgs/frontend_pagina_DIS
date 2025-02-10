//src\config\routes.js
export const routes = {
  home: "/", // Navbar
  quienesSomos: "/quienes-somos",
  documentos: "/documentos",
  administrador: "/administrador",
  

  // ✅ CORRECCIÓN: Deben ser rutas absolutas bajo /administrador
  administradorRem: "/administrador/admin_rem",
  administradorInformesRem: "/administrador/admin_inf_rem",
  administradorDashboard: "/administrador/admin_dashboard",

  rem: "/rem", // ButtonGroup
  ges: "/ges",
  listaEspera: "/lista_espera",
  comges: "/comges",
  actividadesAps: "/actividades_aps",
  produccionHospitalaria: "/produccion_hospitalaria",
  urgencia: "/urgencia",
  gestionClinicaFinanciera: "/gestion_clinica_financiera",
  estadisticasVitales: "/estadisticas_vitales",
  inmunizacion: "/inmunizacion",
  visorTerritorial: "/visor_territorial",
  controlGestion: "/control_gestion",
  linksInteres: "/links_interes",

  subirRem: "/subir_rem", // Rutas interiores
  gesProtegido: "/ges_protegido",
  validador: "/validador",

  adminLogin: "/admin_login", // Login administrativo
  remLogin: "/rem_login",
  gesLogin: "/ges_login",
};

