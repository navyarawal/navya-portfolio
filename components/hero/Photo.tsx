import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/data/site";

// Server component: checks whether a real photo has been dropped in at
// public/images/navya-photo.jpg. Until then it shows an intentional
// placeholder instead of a stock photo or a broken image.
export function Photo() {
  const filePath = path.join(process.cwd(), "public", site.photoHref);
  const hasPhoto = fs.existsSync(filePath);

  return (
    <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto rounded-[2.5rem] overflow-hidden bg-tint">
      <span
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-amber-tint -z-10"
        aria-hidden="true"
      />
      <span
        className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-coral-tint -z-10"
        aria-hidden="true"
      />
      {hasPhoto ? (
        <Image
          src={site.photoHref}
          alt={`${site.name} portrait`}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 440px"
        />
      ) : (
        <div className="flex flex-col items-center justify-center gap-3 h-full text-center px-8">
          <span className="h-16 w-16 rounded-full bg-blue-tint flex items-center justify-center text-blue font-extrabold text-xl">
            NR
          </span>
          <p className="text-sm font-medium text-ink-soft">
            {/* EDIT: add a photo at public/images/navya-photo.jpg — it will replace this placeholder automatically. */}
            Add a photo at <code className="font-mono text-xs">public/images/navya-photo.jpg</code>
          </p>
        </div>
      )}
    </div>
  );
}
