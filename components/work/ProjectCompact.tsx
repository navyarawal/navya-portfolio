import type { Project } from "@/data/projects";

const accentText: Record<Project["accent"], string> = {
  cobalt: "text-blue",
  red: "text-coral",
  gold: "text-amber",
  green: "text-green",
};

export function ProjectCompact({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-3xl bg-tint h-full">
      <p className={`text-xs font-semibold uppercase tracking-wide ${accentText[project.accent]}`}>
        {project.category}
      </p>
      <h4 className="font-bold text-xl sm:text-2xl leading-tight">{project.title}</h4>
      <p className="text-sm text-ink-soft leading-relaxed">{project.summary}</p>
      <div className="mt-auto flex items-center justify-between pt-3 text-xs font-semibold text-ink-soft">
        <span>{project.role}</span>
        <span>{project.dates}</span>
      </div>
    </div>
  );
}
