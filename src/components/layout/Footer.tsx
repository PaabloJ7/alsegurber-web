import Link from "next/link";

import { contact, navItems } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Alsegurber</strong>
        <p>Asesoramiento asegurador cercano para particulares, autonomos y empresas.</p>
      </div>
      <div className="footer-links">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <address>
        {contact.location}
        <br />
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </address>
    </footer>
  );
}
