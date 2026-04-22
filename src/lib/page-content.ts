export type InfoPage = {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
};

export const infoPages: Record<string, InfoPage> = {
  nosotros: {
    eyebrow: "Quienes somos",
    title: "Asesoria aseguradora con trato cercano",
    description:
      "Alsegurber nace para ayudar a elegir seguros con criterio, lenguaje claro y acompanamiento real antes y despues de contratar.",
    points: [
      "Analisis de necesidades antes de recomendar una poliza.",
      "Comparacion entre companias y coberturas relevantes.",
      "Seguimiento cercano en renovaciones, cambios y siniestros.",
    ],
  },
  particulares: {
    eyebrow: "Particulares",
    title: "Seguros para tu dia a dia",
    description:
      "Coche, hogar, vida, salud y proteccion familiar con una revision practica de coberturas y precio.",
    points: [
      "Polizas adaptadas a vivienda, movilidad y familia.",
      "Explicacion sencilla de exclusiones, franquicias y limites.",
      "Revision anual para evitar pagar por coberturas que no necesitas.",
    ],
  },
  empresas: {
    eyebrow: "Empresas",
    title: "Gestion integral del riesgo empresarial",
    description:
      "Soluciones para pymes, comercios y sociedades que necesitan continuidad, responsabilidad civil y proteccion patrimonial.",
    points: [
      "Responsabilidad civil, multirriesgo, flotas y convenios.",
      "Revision de riesgos por actividad, instalaciones y equipo.",
      "Acompanamiento documental para contratar y renovar con orden.",
    ],
  },
  autonomos: {
    eyebrow: "Autonomos",
    title: "Cobertura para trabajar con respaldo",
    description:
      "Seguros pensados para profesionales que necesitan proteger ingresos, responsabilidad y herramientas de trabajo.",
    points: [
      "Responsabilidad civil profesional segun actividad.",
      "Baja laboral, salud y vida para proteger ingresos.",
      "Coberturas para local, equipos, vehiculos y mercancias.",
    ],
  },
  coche: {
    eyebrow: "Coche",
    title: "Seguro de coche en Jerez",
    description:
      "Encontramos una poliza equilibrada para tu vehiculo, uso real y presupuesto, sin letra pequena innecesaria.",
    points: [
      "Terceros, terceros ampliado, todo riesgo y franquicia.",
      "Asistencia en carretera, lunas, robo, incendio y conductor.",
      "Comparacion de precio y servicio entre companias.",
    ],
  },
  hogar: {
    eyebrow: "Hogar",
    title: "Seguro de hogar en Jerez",
    description:
      "Protege tu vivienda con coberturas ajustadas a continente, contenido, responsabilidad civil y asistencia.",
    points: [
      "Revision de capitales para evitar infraseguro.",
      "Cobertura de danos por agua, electricidad, cristales y robo.",
      "Opciones para propietarios, inquilinos y segundas viviendas.",
    ],
  },
  vida: {
    eyebrow: "Vida",
    title: "Seguro de vida en Jerez",
    description:
      "Planifica una proteccion economica para familia, hipoteca o negocio ante situaciones graves.",
    points: [
      "Capitales adaptados a cargas familiares y financieras.",
      "Opciones de invalidez, fallecimiento y enfermedades graves.",
      "Revision de beneficiarios y condiciones de contratacion.",
    ],
  },
  siniestros: {
    eyebrow: "Siniestros",
    title: "Te ayudamos cuando ocurre el imprevisto",
    description:
      "Gestionamos el parte, documentacion y seguimiento para que tengas visibilidad del proceso.",
    points: [
      "Orientacion sobre documentacion y plazos.",
      "Seguimiento con compania, peritos y reparadores.",
      "Defensa de coberturas contratadas cuando hay dudas.",
    ],
  },
};
