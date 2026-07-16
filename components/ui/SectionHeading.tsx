import type { Accent } from "@/data/projects";

const accentText: Record<Accent, string> = {
  cobalt: "text-blue",
  red: "text-coral",
  gold: "text-amber",
};

const accentBg: Record<Accent, string> = {
  cobalt: "bg-blue-tint",
  red: "bg-coral-tint",
  gold: "bg-amber-tint",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  accent = "cobalt",
  align = "left",
}: {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  accent?: Accent;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex flex-col gap-5 ${align === "right" ? "items-end text-right" : "items-start text-left"}`}
    >
      <span
        className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide ${accentBg[accent]} ${accentText[accent]}`}
      >
        {eyebrow}
      </span>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.02] tracking-tight max-w-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base sm:text-lg text-ink-soft max-w-xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
