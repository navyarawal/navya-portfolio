import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const accentText: Record<Project["accent"], string> = {
  cobalt: "text-blue",
  red: "text-coral",
  gold: "text-amber",
};

export function ProjectCompact({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col gap-3 p-6 rounded-3xl bg-tint hover:-translate-y-0.5 hover:shadow-soft transition-all h-full"
    >
      <div className="flex items-start justify-between gap-3">
        <p className={`text-xs font-semibold uppercase tracking-wide ${accentText[project.accent]}`}>
          {project.category}
        </p>
        <ArrowUpRight
          size={16}
          className="shrink-0 text-ink-soft group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </div>
      <h4 className="font-bold text-xl sm:text-2xl leading-tight">{project.title}</h4>
      <p className="text-sm text-ink-soft leading-relaxed">{project.summary}</p>
      <div className="mt-auto flex items-center justify-between pt-3 text-xs font-semibold text-ink-soft">
        <span>{project.role}</span>
        <span>{project.dates}</span>
      </div>
    </Link>
  );
}
