import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilityGroups } from "@/data/capabilities";

const accentCycle: ("cobalt" | "red" | "gold")[] = ["cobalt", "red", "gold", "cobalt", "red"];
const dotClass: Record<"cobalt" | "red" | "gold", string> = {
  cobalt: "bg-blue",
  red: "bg-coral",
  gold: "bg-amber",
};

export function Capabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 scroll-mt-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I actually work with, grouped by function."
          description="No proficiency bars — just what I've applied directly through the work above."
          accent="gold"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilityGroups.map((group, i) => {
            const accent = accentCycle[i % accentCycle.length];
            return (
              <div key={group.id} className="bg-tint rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
                <div className={`h-2.5 w-2.5 rounded-full ${dotClass[accent]}`} aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">{group.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{group.description}</p>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-surface"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="bg-blue rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-6">
            <span className="text-6xl font-extrabold text-paper/25" aria-hidden="true">
              +
            </span>
            <p className="text-lg font-semibold text-paper leading-snug">
              This list grows with every new project — not a fixed checklist.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
