import Link from "next/link";

import { contact, navItems } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Alsegurber inicio">
        <span className="brand-mark">A</span>
        <span>
          <strong>Alsegurber</strong>
          <small>Correduria de seguros</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Navegacion principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-action" href={`tel:${contact.phone.replaceAll(" ", "")}`}>
        {contact.phone}
      </a>
    </header>
  );
}
