import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Gallery } from "@/components/ui/Gallery";
import { PdfCard } from "@/components/ui/PdfCard";

const accentText: Record<Project["accent"], string> = {
  cobalt: "text-blue",
  red: "text-coral",
  gold: "text-amber",
};

const accentBg: Record<Project["accent"], string> = {
  cobalt: "bg-blue",
  red: "bg-coral",
  gold: "bg-amber",
};

const accentTint: Record<Project["accent"], string> = {
  cobalt: "bg-blue-tint",
  red: "bg-coral-tint",
  gold: "bg-amber-tint",
};

const cardTint: Record<Project["accent"], string> = {
  cobalt: "bg-blue-tint/60",
  red: "bg-coral-tint/60",
  gold: "bg-amber-tint/60",
};

function Meta({ project }: { project: Project }) {
  return (
    <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Role</dt>
        <dd className="font-semibold">{project.role}</dd>
      </div>
      <div>
        <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">Dates</dt>
        <dd className="font-semibold">{project.dates}</dd>
      </div>
    </dl>
  );
}

function Results({ project }: { project: Project }) {
  return (
    <ul className="flex flex-col gap-2">
      {project.results.map((r) => (
        <li key={r} className="flex items-start gap-2.5 text-sm sm:text-base">
          <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${accentBg[project.accent]}`} />
          <span className="font-medium">{r}</span>
        </li>
      ))}
    </ul>
  );
}

function Capabilities({ project }: { project: Project }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {project.capabilities.map((c) => (
        <li
          key={c}
          className="text-[11px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full bg-surface text-ink-soft"
        >
          {c}
        </li>
      ))}
    </ul>
  );
}

function CaseStudyLink({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group inline-flex items-center gap-1.5 self-start px-5 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-blue transition-colors"
    >
      View Case Study
      <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
    </Link>
  );
}

function CategoryTag({ project }: { project: Project }) {
  return (
    <span
      className={`inline-flex self-start px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${accentTint[project.accent]} ${accentText[project.accent]}`}
    >
      {project.category}
    </span>
  );
}

export function ProjectFeature({ project, index }: { project: Project; index: number }) {
  const variant = index % 4;
  const card = `rounded-[2rem] sm:rounded-[2.5rem] ${cardTint[project.accent]} p-6 sm:p-10`;

  if (variant === 0) {
    // Sunny — headline-forward, gallery on the right.
    return (
      <article className={`${card} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start`}>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <CategoryTag project={project} />
          <h3 className="font-extrabold text-4xl sm:text-5xl leading-[0.98] tracking-tight">
            {project.title}
          </h3>
          <Meta project={project} />
          <p className="text-base sm:text-lg leading-relaxed max-w-md">{project.summary}</p>
          <Results project={project} />
          <Capabilities project={project} />
          <CaseStudyLink project={project} />
        </div>
        <div className="lg:col-span-7">
          <Gallery items={project.gallery} accent={project.accent} seedPrefix={project.slug} />
          <div className="mt-4">
            <PdfCard documents={project.documents} />
          </div>
        </div>
      </article>
    );
  }

  if (variant === 1) {
    // Osteosarcoma CNN — research-styled, stat callout, reversed columns.
    return (
      <article className={`${card} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start`}>
        <div className="lg:col-span-5 lg:order-2 flex flex-col gap-6">
          <CategoryTag project={project} />
          <h3 className="font-extrabold text-3xl sm:text-4xl leading-[1.02] tracking-tight">
            {project.title}
          </h3>
          <Meta project={project} />
          <p className="text-base sm:text-lg leading-relaxed max-w-md">{project.summary}</p>
          <Capabilities project={project} />
          <CaseStudyLink project={project} />
        </div>
        <div className="lg:col-span-7 lg:order-1 flex flex-col gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface flex flex-wrap gap-8">
            {project.results.map((r) => (
              <div key={r} className="flex flex-col gap-1 max-w-[220px]">
                <span className={`font-extrabold text-3xl sm:text-4xl ${accentText[project.accent]}`}>
                  {r.split(" ")[0]}
                </span>
                <span className="text-sm text-ink-soft">{r.split(" ").slice(1).join(" ")}</span>
              </div>
            ))}
          </div>
          <Gallery items={project.gallery} accent={project.accent} seedPrefix={project.slug} />
          <PdfCard documents={project.documents} />
        </div>
      </article>
    );
  }

  if (variant === 2) {
    // Rookie Robotics — full-width gallery band up top, two-column text below.
    return (
      <article className={`${card} flex flex-col gap-8`}>
        <Gallery items={project.gallery} accent={project.accent} seedPrefix={project.slug} aspect="aspect-[16/9]" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <CategoryTag project={project} />
            <h3 className="font-extrabold text-4xl sm:text-5xl leading-[0.98] tracking-tight">
              {project.title}
            </h3>
            <Meta project={project} />
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="text-base sm:text-lg leading-relaxed max-w-xl">{project.summary}</p>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-4">
              {project.results.map((r) => (
                <div key={r} className="p-4 rounded-2xl bg-surface">
                  <p className="text-sm font-semibold">{r}</p>
                </div>
              ))}
            </div>
            <Capabilities project={project} />
            <CaseStudyLink project={project} />
          </div>
        </div>
      </article>
    );
  }

  // variant === 3 — Phosphody — split diagram/results panel.
  return (
    <article className={`${card} grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start`}>
      <div className="lg:col-span-6 flex flex-col gap-4">
        <Gallery items={project.gallery} accent={project.accent} seedPrefix={project.slug} />
      </div>
      <div className="lg:col-span-6 flex flex-col gap-6">
        <CategoryTag project={project} />
        <h3 className="font-extrabold text-4xl sm:text-5xl leading-[0.98] tracking-tight">
          {project.title}
        </h3>
        <Meta project={project} />
        <p className="text-base sm:text-lg leading-relaxed">{project.summary}</p>
        <div className="p-5 rounded-2xl bg-surface flex flex-col gap-2">
          {project.results.map((r) => (
            <p key={r} className="text-sm font-semibold">
              {r}
            </p>
          ))}
        </div>
        <Capabilities project={project} />
        <PdfCard documents={project.documents} />
        <CaseStudyLink project={project} />
      </div>
    </article>
  );
}
