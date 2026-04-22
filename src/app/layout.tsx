import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/SiteShell";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alsegurber | Correduria de seguros en Jerez",
    template: "%s | Alsegurber",
  },
  description:
    "Correduria de seguros en Jerez para particulares, autonomos y empresas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
