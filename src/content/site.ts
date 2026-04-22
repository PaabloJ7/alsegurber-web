export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  href: string;
  description: string;
};

export const navItems: NavItem[] = [
  { label: "Nosotros", href: "/nosotros" },
  { label: "Particulares", href: "/seguros-particulares" },
  { label: "Empresas", href: "/seguros-empresas" },
  { label: "Autonomos", href: "/seguros-autonomos" },
  { label: "Siniestros", href: "/siniestros" },
  { label: "Contacto", href: "/contacto" },
];

export const services: Service[] = [
  {
    title: "Seguro de coche en Jerez",
    href: "/seguro-coche-jerez",
    description:
      "Comparamos coberturas, asistencia y precio para que circules con una poliza clara.",
  },
  {
    title: "Seguro de hogar en Jerez",
    href: "/seguro-hogar-jerez",
    description:
      "Proteccion para vivienda habitual, segunda residencia, continente, contenido y responsabilidad civil.",
  },
  {
    title: "Seguro de vida en Jerez",
    href: "/seguro-vida-jerez",
    description:
      "Soluciones para cuidar a tu familia, hipoteca o actividad profesional ante imprevistos.",
  },
  {
    title: "Seguros para empresas",
    href: "/seguros-empresas",
    description:
      "Programas de riesgo para comercios, pymes y sociedades con atencion cercana.",
  },
  {
    title: "Seguros para autonomos",
    href: "/seguros-autonomos",
    description:
      "Responsabilidad civil, baja laboral, salud y proteccion del negocio para trabajar con tranquilidad.",
  },
  {
    title: "Gestion de siniestros",
    href: "/siniestros",
    description:
      "Te acompanamos desde el parte hasta la resolucion, con seguimiento y criterio profesional.",
  },
];

export const contact = {
  phone: "956 000 000",
  email: "info@alsegurber.es",
  location: "Jerez de la Frontera, Cadiz",
};
