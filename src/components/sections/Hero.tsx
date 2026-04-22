import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="hero-section">
      <Image
        src="/images/hero-office.png"
        alt="Mesa de asesoria de seguros en una oficina luminosa"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Correduria de seguros en Jerez</p>
        <h1>Alsegurber</h1>
        <p>
          Seguros claros para particulares, autonomos y empresas, con asesoria local y
          seguimiento cuando mas importa.
        </p>
        <div className="hero-actions">
          <Link className="primary-button" href="/contacto">
            Pedir asesoramiento
          </Link>
          <Link className="secondary-button" href="/seguros-particulares">
            Ver seguros
          </Link>
        </div>
      </div>
    </section>
  );
}
