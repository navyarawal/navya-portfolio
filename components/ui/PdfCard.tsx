"use client";

import { useState } from "react";
import { FileText, Download, Eye, EyeOff } from "lucide-react";
import type { ProjectDocument } from "@/data/projects";

export function PdfCard({ documents }: { documents: ProjectDocument[] }) {
  const [openHref, setOpenHref] = useState<string | null>(null);

  if (!documents.length) return null;

  return (
    <div className="flex flex-col gap-4">
      {documents.map((doc) => {
        const isOpen = openHref === doc.href;
        return (
          <div key={doc.href} className="bg-tint rounded-2xl overflow-hidden">
            <div className="flex flex-wrap items-center gap-3 p-5">
              <span className="p-2 rounded-full bg-blue-tint text-blue shrink-0">
                <FileText size={18} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold">{doc.label}</span>
              <div className="flex gap-2 ml-auto">
                <button
                  type="button"
                  onClick={() => setOpenHref(isOpen ? null : doc.href)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-surface hover:bg-ink hover:text-paper transition-colors"
                  aria-expanded={isOpen}
                >
                  {isOpen ? <EyeOff size={14} /> : <Eye size={14} />}
                  {isOpen ? "Hide preview" : "View"}
                </button>
                <a
                  href={doc.href}
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-ink text-paper hover:bg-blue transition-colors"
                >
                  <Download size={14} />
                  Download
                </a>
              </div>
            </div>
            {isOpen ? (
              <div className="border-t border-line">
                {/* Responsive embed; falls back to the buttons above on devices that block inline PDFs. */}
                <object
                  data={doc.href}
                  type="application/pdf"
                  className="w-full h-[70vh] hidden sm:block"
                  aria-label={doc.label}
                >
                  <p className="p-4 text-sm text-ink-soft">
                    Inline preview isn&apos;t supported here. Use Download above.
                  </p>
                </object>
                <p className="p-4 text-sm text-ink-soft sm:hidden">
                  Inline preview isn&apos;t available on this device. Use Download above to
                  view {doc.label}.
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
