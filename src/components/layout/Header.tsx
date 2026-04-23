import Link from "next/link";
import { contact, navItems } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="brand" href="/" aria-label="ALSEGUR inicio">
          <span className="brand-mark">A</span>

          <span className="brand-copy">
            <strong>ALSEGUR</strong>
            <small>Correduría de seguros en Jerez</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="main-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <a
            className="header-phone"
            href={`tel:${contact.phone.replaceAll(" ", "")}`}
            aria-label={`Llamar al ${contact.phone}`}
          >
            {contact.phone}
          </a>

          <Link className="header-button" href="/contacto">
            Contactar
          </Link>
        </div>
      </div>
    </header>
  );
}