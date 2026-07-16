import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LinkedinMark } from "@/components/ui/icons";
import { site } from "@/data/site";
import { Photo } from "./Photo";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 min-h-[92vh] flex flex-col justify-center"
    >
      <div className="container-edit w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-coral-tint">
              <span className="h-2 w-2 rounded-full bg-coral" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold text-ink">{site.tagline}</p>
            </div>

            <h1 className="font-extrabold leading-[0.95] tracking-tight text-[15vw] xs:text-[13vw] sm:text-7xl md:text-8xl">
              Navya
              <br />
              Rawal
            </h1>

            <p className="text-xl sm:text-2xl md:text-[1.65rem] leading-snug max-w-2xl font-semibold">
              {site.heroLine}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#work" variant="primary">
                View My Work
              </Button>
              <Button href={site.resumeHref} variant="secondary" external>
                Download Résumé
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-blue transition-colors"
              >
                <LinkedinMark size={16} />
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft hover:text-blue transition-colors"
              >
                <Mail size={16} aria-hidden="true" />
                Email
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
