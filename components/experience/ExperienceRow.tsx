import type { ExperienceEntry } from "@/data/experience";
import { Gallery } from "@/components/ui/Gallery";

export function ExperienceRow({
  entry,
  index,
  isLast,
}: {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}) {
  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pb-12">
      <div className="hidden lg:flex lg:col-span-1 flex-col items-center">
        <span className="h-3 w-3 rounded-full bg-blue shrink-0" aria-hidden="true" />
        {!isLast ? <span className="w-px flex-1 bg-line mt-2" aria-hidden="true" /> : null}
      </div>

      <div className="lg:col-span-3 flex flex-col gap-1">
        <span className="text-xs font-semibold text-ink-soft lg:hidden mb-1">
          {String(index).padStart(2, "0")}
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">{entry.org}</h3>
        <p className="text-sm text-ink-soft">{entry.role}</p>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mt-1">
          {entry.dates}
        </p>
      </div>

      <div className="lg:col-span-8 flex flex-col gap-4">
        <p className="text-base leading-relaxed max-w-2xl">{entry.summary}</p>
        {entry.highlights.length ? (
          <ul className="flex flex-col gap-2">
            {entry.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm sm:text-base">
                <span className="mt-1.5 h-2 w-2 rounded-full shrink-0 bg-blue" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <ul className="flex flex-wrap gap-2">
          {entry.capabilities.map((c) => (
            <li
              key={c}
              className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-tint text-ink-soft"
            >
              {c}
            </li>
          ))}
        </ul>
        {entry.images.length ? (
          <div className="max-w-xl">
            <Gallery items={entry.images} accent="cobalt" seedPrefix={entry.slug} aspect="aspect-[4/3]" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
