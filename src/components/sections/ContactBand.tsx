import Link from "next/link";

import { contact } from "@/content/site";

export function ContactBand() {
  return (
    <section className="contact-band">
      <div>
        <p className="eyebrow">Atencion directa</p>
        <h2>Cuentalo una vez. Lo seguimos contigo.</h2>
      </div>
      <div className="contact-actions">
        <a className="primary-button" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
          Llamar ahora
        </a>
        <Link className="secondary-button" href="/contacto">
          Contactar
        </Link>
      </div>
    </section>
  );
}
