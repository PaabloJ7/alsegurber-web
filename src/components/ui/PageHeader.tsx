type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="page-header">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}
