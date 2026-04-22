import { ContactBand } from "@/components/sections/ContactBand";
import { Hero } from "@/components/sections/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="intro-strip">
        <div>
          <strong>Asesoria independiente</strong>
          <span>Trabajamos para que entiendas que contratas y por que.</span>
        </div>
        <div>
          <strong>Atencion local</strong>
          <span>Cercania en Jerez y seguimiento directo de cada gestion.</span>
        </div>
        <div>
          <strong>Siniestros acompanados</strong>
          <span>Cuando hay un problema, no te dejamos solo con la compania.</span>
        </div>
      </section>
      <ServiceGrid />
      <ContactBand />
    </>
  );
}
