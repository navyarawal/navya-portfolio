import type { LeadershipEntry } from "@/data/leadership";
import { Gallery } from "@/components/ui/Gallery";

const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function LeadershipCard({
  entry,
  index,
}: {
  entry: LeadershipEntry;
  index: number;
}) {
  return (
    <div className={`${spans[index % 4]} flex flex-col gap-5 p-6 sm:p-8 rounded-3xl bg-tint`}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">{entry.org}</h3>
          <p className="text-sm text-ink-soft mt-1">{entry.role}</p>
        </div>
        <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft whitespace-nowrap">
          {entry.dates}
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {entry.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2.5 text-sm sm:text-base">
            <span className="mt-1.5 h-2 w-2 rounded-full shrink-0 bg-coral" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
      {entry.images.length ? (
        <Gallery items={entry.images} accent="red" seedPrefix={entry.slug} aspect="aspect-[4/3]" />
      ) : null}
    </div>
  );
}
