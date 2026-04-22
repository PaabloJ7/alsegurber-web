import Link from "next/link";

import { services } from "@/content/site";

export function ServiceGrid() {
  return (
    <section className="content-band">
      <div className="section-heading">
        <p className="eyebrow">Soluciones</p>
        <h2>Proteccion para cada etapa</h2>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <Link className="service-card" key={service.href} href={service.href}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span>Consultar</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
