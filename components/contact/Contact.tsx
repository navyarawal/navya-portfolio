import { Mail, ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";
import { LinkedinMark } from "@/components/ui/icons";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pb-10">
      <div className="container-edit">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] bg-blue-tint px-6 py-16 sm:px-14 sm:py-20">
          <div
            className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amber-tint"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-24 w-16 h-16 rounded-full bg-coral hidden sm:block"
            aria-hidden="true"
          />
          <div
            className="absolute top-10 right-52 w-10 h-10 rounded-full bg-blue hidden sm:block"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="inline-flex self-start px-4 py-1.5 rounded-full bg-surface text-xs font-semibold uppercase tracking-wide">
                Contact
              </span>
              <h2 className="font-extrabold text-5xl sm:text-6xl md:text-7xl leading-[0.98] tracking-tight">
                Building something
                <br />
                ambitious?
              </h2>
              <p className="text-lg text-ink-soft max-w-xl leading-relaxed">
                I&apos;m always interested in thoughtful people, difficult
                problems, and ideas worth building.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-ink text-paper font-semibold text-sm hover:bg-blue transition-colors"
                >
                  <Mail size={16} aria-hidden="true" />
                  {site.email}
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-surface font-semibold text-sm hover:-translate-y-0.5 transition-transform"
                >
                  <LinkedinMark size={16} />
                  LinkedIn
                </a>
                <a
                  href={site.resumeHref}
                  download
                  className="inline-flex items-center gap-2 font-semibold text-sm underline decoration-2 underline-offset-4 decoration-amber hover:decoration-coral"
                >
                  Download Résumé
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>

            </div>

            <div className="lg:col-span-5 lg:pt-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft mb-4">
                Or send a message directly
              </p>
              <ContactForm />
            </div>
          </div>

          <div className="relative mt-16 pt-8 border-t border-ink/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink-soft">
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
            <span>{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
