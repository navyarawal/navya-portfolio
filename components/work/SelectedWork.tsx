import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFeature } from "./ProjectFeature";
import { ProjectCompact } from "./ProjectCompact";
import { featuredProjects, additionalProjects } from "@/data/projects";

export function SelectedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 scroll-mt-24">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Selected Work"
          title="Four projects, four different ways I've turned an idea into something real."
          description="A concise selection spanning product, research, hardware, and community-scale programs — each with a full case study if you want to go deeper."
          accent="cobalt"
        />

        <div className="mt-14 flex flex-col gap-6">
          {featuredProjects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} index={i + 1} />
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-baseline justify-between flex-wrap gap-4 mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Additional Experiments &amp; Projects
            </h3>
            <p className="text-sm text-ink-soft max-w-sm">
              Smaller in scope, same bias toward building and testing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalProjects.map((project) => (
              <ProjectCompact key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
