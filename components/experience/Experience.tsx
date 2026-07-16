import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceRow } from "./ExperienceRow";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 scroll-mt-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Experience"
          title="Where the technical work happens day to day."
          accent="cobalt"
        />
        <div className="mt-14">
          {experience.map((entry, i) => (
            <ExperienceRow
              key={entry.slug}
              entry={entry}
              index={i + 1}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
