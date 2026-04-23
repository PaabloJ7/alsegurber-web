import Image from "next/image";
import Link from "next/link";
import { services } from "@/content/site";

const differentiators = [
  {
    title: "Correduría independiente",
    description:
      "Analizamos opciones con criterio profesional para ayudarte a elegir mejor, no para empujarte una única compañía.",
  },
  {
    title: "Trato cercano y rápido",
    description:
      "Atención directa, seguimiento real y una correduría local que responde cuando hace falta.",
  },
  {
    title: "Gestión de siniestros",
    description:
      "Te acompañamos desde el parte hasta la resolución con criterio, orden y contacto claro.",
  },
];

const steps = [
  {
    number: "01",
    title: "Escuchamos tu caso",
    description:
      "Entendemos qué necesitas, qué tienes ahora y qué nivel de protección buscas.",
  },
  {
    number: "02",
    title: "Estudiamos opciones",
    description:
      "Comparamos coberturas, planteamientos y encaje real para darte una propuesta seria.",
  },
  {
    number: "03",
    title: "Te explicamos la recomendación",
    description:
      "Sin líos ni tecnicismos innecesarios. Sabes qué contratas y por qué.",
  },
  {
    number: "04",
    title: "Seguimos a tu lado",
    description:
      "Cambios, dudas, renovaciones y siniestros con acompañamiento profesional.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-topbar">
        <div className="shell home-topbar__inner">
          <div className="home-topbar__left">
            <span>
              <strong>Teléfono:</strong> 614 40 19 25
            </span>
            <span>
              <strong>Email:</strong> info@alsegurber.es
            </span>
            <span>
              <strong>Visitanos:</strong> Avenida Bartolomé Guiterrez, 29, 11408 Jerez de la Frontera
            </span>
          </div>

          <div className="home-topbar__right">
            <a href="tel:+34614401925">Llamar</a>
            <a
              href="https://wa.me/34614401925"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="hero-v2">
        <Image
          src="/images/hero-correduria.jpg"
          alt="Asesoramiento profesional en correduría de seguros"
          fill
          priority
          className="hero-v2__image"
        />
        <div className="hero-v2__overlay" />

        <div className="shell hero-v2__inner">
          <div className="hero-v2__content">
            <p className="eyebrow">  Correduría de seguros en Jerez</p>
            <h1>Correduría de seguros en Jerez de la Frontera.</h1>
            <p className="hero-v2__lead">
  Seguros para particulares, autónomos y empresas con atención cercana,
  comparativa real y gestión profesional.
            </p>

            <div className="hero-v2__actions">
              <Link href="/contacto" className="button button--primary">
                Pedir estudio
              </Link>
              <a
                href="https://wa.me/34614401925"
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-v2__panel">
            <p className="hero-v2__panel-label">Alsegurber</p>
            <h2>Protección para particulares, autónomos y empresas.</h2>
            <ul>
              <li>Comparativa y asesoramiento</li>
              <li>Gestión de siniestros</li>
              <li>Trato directo y cercano</li>
              <li>Correduría local en Jerez</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="metrics-band">
        <div className="shell metrics-band__grid">
          <article className="metric-card">
            <strong>500+</strong>
            <span>clientes</span>
          </article>
          <article className="metric-card">
            <strong>1000+</strong>
            <span>pólizas</span>
          </article>
          <article className="metric-card">
            <strong>Jerez</strong>
            <span>correduría local</span>
          </article>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Servicios principales</p>
            <h2>Soluciones claras para cada perfil de cliente.</h2>
            <p>
              Una estructura pensada para ayudarte a elegir mejor y darte soporte
              cuando de verdad hace falta.
            </p>
          </div>

          <div className="cards-grid">
            {services.slice(0, 6).map((service) => (
              <article key={service.href} className="info-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link href={service.href} className="text-link">
                  Ver más
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--tint">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Por qué elegir Alsegurber</p>
            <h2>Una correduría que busca hacerlo bien antes, durante y después.</h2>
          </div>

          <div className="cards-grid cards-grid--three">
            {differentiators.map((item) => (
              <article key={item.title} className="info-card info-card--soft">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Cómo trabajamos</p>
            <h2>Un proceso sencillo, serio y profesional.</h2>
          </div>

          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.number} className="step-card">
                <span className="step-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-section__inner">
          <div>
            <p className="eyebrow">Contacto</p>
            <h2>Cuéntanos qué necesitas y estudiamos contigo la mejor opción.</h2>
          </div>

          <div className="cta-section__actions">
            <Link href="/contacto" className="button button--primary">
              Contactar ahora
            </Link>
            <a href="tel:+34956000000" className="button button--secondary">
              Llamar
            </a>
          </div>
        </div>
      </section>
    </>
  );
}