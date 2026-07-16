export function CaseStudySection({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 py-8">
      <div className="lg:col-span-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{label}</p>
        <h3 className="text-xl sm:text-2xl font-bold mt-1">{title}</h3>
      </div>
      <div className="lg:col-span-9 text-base leading-relaxed max-w-2xl text-ink-soft">
        {children}
      </div>
    </div>
  );
}
