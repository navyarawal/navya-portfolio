import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilityGroups } from "@/data/capabilities";

const accentCycle: ("cobalt" | "red" | "gold" | "green")[] = [
  "cobalt",
  "red",
  "gold",
  "green",
  "cobalt",
];
const dotClass: Record<"cobalt" | "red" | "gold" | "green", string> = {
  cobalt: "bg-blue",
  red: "bg-coral",
  gold: "bg-amber",
  green: "bg-green",
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-20 scroll-mt-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I actually work with, grouped by function."
          description="No proficiency bars — just what I've applied directly through the work above."
          accent="gold"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {capabilityGroups.map((group, i) => {
            const accent = accentCycle[i % accentCycle.length];
            return (
              <div key={group.id} className="bg-tint rounded-2xl p-5 flex flex-col gap-3">
                <div className={`h-2 w-2 rounded-full ${dotClass[accent]}`} aria-hidden="true" />
                <h3 className="text-lg font-extrabold leading-tight">{group.title}</h3>
                <p className="text-xs text-ink-soft leading-relaxed">{group.description}</p>
                <ul className="flex flex-wrap gap-1.5 mt-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-surface"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="bg-green rounded-2xl p-5 flex flex-col justify-between gap-4">
            <span className="text-4xl font-extrabold text-paper/25" aria-hidden="true">
              +
            </span>
            <p className="text-sm font-semibold text-paper leading-snug">
              This list grows with every new project — not a fixed checklist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
