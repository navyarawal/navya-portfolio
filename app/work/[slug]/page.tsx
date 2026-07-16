import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav/Nav";
import { Contact } from "@/components/contact/Contact";
import { Gallery } from "@/components/ui/Gallery";
import { PdfCard } from "@/components/ui/PdfCard";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { projects, getProjectBySlug, type Accent } from "@/data/projects";
import { site } from "@/data/site";

const accentText: Record<Accent, string> = {
  cobalt: "text-blue",
  red: "text-coral",
  gold: "text-amber",
  green: "text-green",
};

const accentTint: Record<Accent, string> = {
  cobalt: "bg-blue-tint",
  red: "bg-coral-tint",
  gold: "bg-amber-tint",
  green: "bg-green-tint",
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentPos = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentPos + 1) % projects.length];

  return (
    <>
      <Nav />
      <main id="main">
        <article className="pt-32 sm:pt-40 pb-20">
          <div className="container-edit">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-ink mb-10"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Back to Selected Work
            </Link>

            <header className="flex flex-col gap-6 max-w-4xl">
              <span
                className={`inline-flex self-start px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${accentTint[project.accent]} ${accentText[project.accent]}`}
              >
                {project.category}
              </span>
              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg sm:text-xl text-ink-soft max-w-2xl leading-relaxed">
                {project.summary}
              </p>
              <dl className="flex flex-wrap gap-x-10 gap-y-4 p-6 rounded-3xl bg-tint">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    Role
                  </dt>
                  <dd className="font-semibold">{project.role}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    Dates
                  </dt>
                  <dd className="font-semibold">{project.dates}</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    Capabilities
                  </dt>
                  <dd className="font-semibold">{project.capabilities.join(" · ")}</dd>
                </div>
              </dl>
            </header>

            <div className="mt-12">
              <Gallery
                items={project.gallery}
                accent={project.accent}
                seedPrefix={project.slug}
                aspect="aspect-[16/9]"
              />
            </div>

            <div className="mt-4 divide-y divide-line">
              <CaseStudySection label="01" title="Problem / Opportunity">
                <p>{project.caseStudy.problem}</p>
              </CaseStudySection>

              <CaseStudySection label="02" title="Role & Team">
                <p>{project.caseStudy.role}</p>
                <p className="mt-2">{project.caseStudy.team}</p>
              </CaseStudySection>

              <CaseStudySection label="03" title="Process & Timeline">
                <p>{project.caseStudy.process}</p>
              </CaseStudySection>

              <CaseStudySection label="04" title="Technical Approach">
                <p>{project.caseStudy.technicalApproach}</p>
              </CaseStudySection>

              <CaseStudySection label="05" title="Key Decisions">
                <p>{project.caseStudy.decisions}</p>
              </CaseStudySection>

              <CaseStudySection label="06" title="Challenges & Iteration">
                <p>{project.caseStudy.challenges}</p>
              </CaseStudySection>

              <CaseStudySection label="07" title="Results & Outcomes">
                <div className="p-5 sm:p-6 rounded-2xl bg-tint flex flex-col gap-3 mb-4">
                  {project.results.map((r) => (
                    <p key={r} className={`font-bold text-lg ${accentText[project.accent]}`}>
                      {r}
                    </p>
                  ))}
                </div>
                <p>{project.caseStudy.results}</p>
              </CaseStudySection>

              <CaseStudySection label="08" title="Reflection">
                <p>{project.caseStudy.reflection}</p>
              </CaseStudySection>

              {project.documents.length ? (
                <CaseStudySection label="09" title="Documents">
                  <PdfCard documents={project.documents} />
                </CaseStudySection>
              ) : null}

              {project.links.length ? (
                <CaseStudySection label="10" title="Links">
                  <ul className="flex flex-col gap-2">
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accentText[project.accent]}`}
                        >
                          {link.label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              ) : null}
            </div>

            <div className="mt-16 pt-10 border-t border-line flex items-center justify-between">
              <Link href="/#work" className="text-sm font-semibold text-ink-soft hover:text-ink">
                All Work
              </Link>
              <Link
                href={`/work/${next.slug}`}
                className="group inline-flex items-center gap-2 text-sm font-semibold"
              >
                Next: {next.title}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Contact />
    </>
  );
}
