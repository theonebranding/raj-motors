export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-copy">
      {eyebrow ? <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-700">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">{title}</h2>
      {description ? <p className="mt-4 font-body text-base leading-8 text-slate-600">{description}</p> : null}
    </div>
  );
}
