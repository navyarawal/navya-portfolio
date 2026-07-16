import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUpStat } from "./CountUpStat";
import { LeadershipCard } from "./LeadershipCard";
import { impactStats, leadership } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-20 sm:py-28 scroll-mt-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Leadership & Impact"
          title="Leadership measured in what actually got built, and who it reached."
          accent="red"
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {impactStats.map((stat, i) => (
            <CountUpStat key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {leadership.map((entry, i) => (
            <LeadershipCard key={entry.slug} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
