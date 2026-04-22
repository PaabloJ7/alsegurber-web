import { PageHeader } from "@/components/ui/PageHeader";
import { contact } from "@/content/site";

export const metadata = {
  title: "Contacto",
};

export default function ContactoPage() {
  return (
    <article className="standard-page">
      <PageHeader eyebrow="Contacto" title="Hablemos de tus seguros">
        Cuéntanos que necesitas revisar y te orientamos con una propuesta clara.
      </PageHeader>
      <div className="contact-panel">
        <a href={`tel:${contact.phone.replaceAll(" ", "")}`}>{contact.phone}</a>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
        <span>{contact.location}</span>
      </div>
    </article>
  );
}
