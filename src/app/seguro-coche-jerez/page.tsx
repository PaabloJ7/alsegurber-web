import { PageHeader } from "@/components/ui/PageHeader";
import { infoPages } from "@/lib/page-content";

export const metadata = {
  title: "Seguro de coche en Jerez",
};

export default function SeguroCocheJerezPage() {
  const page = infoPages.coche;

  return (
    <article className="standard-page">
      <PageHeader eyebrow={page.eyebrow} title={page.title}>
        {page.description}
      </PageHeader>
      <ul className="check-list">
        {page.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </article>
  );
}
