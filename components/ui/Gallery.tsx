"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Expand, FileText } from "lucide-react";
import { PlaceholderArt } from "./PlaceholderArt";
import type { GalleryItem, Accent } from "@/lib/types";

export function Gallery({
  items,
  accent = "cobalt",
  seedPrefix,
  aspect = "aspect-[4/3]",
}: {
  items: GalleryItem[];
  accent?: Accent;
  seedPrefix: string;
  aspect?: string;
}) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  if (!items.length) return null;

  const goTo = (i: number) => {
    const next = (i + items.length) % items.length;
    setIndex(next);
    const track = trackRef.current;
    if (track) {
      const child = track.children[next] as HTMLElement | undefined;
      child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) =>
          item.documentHref ? (
            <a
              key={item.src + i}
              href={item.documentHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative shrink-0 w-[78%] xs:w-[64%] sm:w-[48%] md:w-[38%] snap-start ${aspect} rounded-2xl overflow-hidden group focus-visible:outline-offset-4 shadow-soft`}
              aria-label={`Open PDF: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
              <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors" />
              <span className="absolute top-2.5 right-2.5 flex items-center gap-1 bg-ink/80 text-paper px-2.5 py-1.5 rounded-full text-xs font-semibold">
                <FileText size={14} aria-hidden="true" />
                PDF
              </span>
            </a>
          ) : (
            <button
              key={item.src + i}
              type="button"
              ref={i === index ? triggerRef : undefined}
              onClick={() => {
                setIndex(i);
                setLightboxOpen(true);
              }}
              className={`relative shrink-0 w-[78%] xs:w-[64%] sm:w-[48%] md:w-[38%] snap-start ${aspect} rounded-2xl overflow-hidden group focus-visible:outline-offset-4 shadow-soft`}
              aria-label={`Open image ${i + 1} of ${items.length}: ${item.alt}`}
            >
              {item.isPlaceholder ? (
                <PlaceholderArt seed={`${seedPrefix}-${i}`} accent={accent} label={item.alt} />
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 40vw"
                />
              )}
              <span className="absolute top-2.5 right-2.5 bg-ink/80 text-paper p-1.5 rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <Expand size={14} aria-hidden="true" />
              </span>
            </button>
          )
        )}
      </div>

      {items.length > 1 ? (
        <div className="flex items-center gap-3 mt-4">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="p-2.5 rounded-full bg-tint hover:bg-ink hover:text-paper transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="p-2.5 rounded-full bg-tint hover:bg-ink hover:text-paper transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={16} />
          </button>
          <div className="flex gap-1.5 ml-1" role="tablist" aria-label="Gallery position">
            {items.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-ink" : "bg-line"}`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-ink-soft ml-auto">
            {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>
      ) : null}

      {lightboxOpen ? (
        <Lightbox
          items={items}
          index={index}
          accent={accent}
          seedPrefix={seedPrefix}
          onClose={() => {
            setLightboxOpen(false);
            triggerRef.current?.focus();
          }}
          onNavigate={setIndex}
        />
      ) : null}
    </div>
  );
}

function Lightbox({
  items,
  index,
  accent,
  seedPrefix,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number;
  accent: Accent;
  seedPrefix: string;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const item = items[index];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    closeRef.current?.focus();
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = original;
    };
  }, [handleKey]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-[200] bg-ink/90 flex items-center justify-center p-4 sm:p-10"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-paper text-ink hover:bg-amber transition-colors"
        aria-label="Close image viewer"
      >
        <X size={20} />
      </button>

      {items.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + items.length) % items.length);
            }}
            className="absolute left-2 sm:left-6 p-2.5 rounded-full bg-paper text-ink hover:bg-blue hover:text-paper transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % items.length);
            }}
            className="absolute right-2 sm:right-6 p-2.5 rounded-full bg-paper text-ink hover:bg-blue hover:text-paper transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>
        </>
      ) : null}

      <div
        className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {item.isPlaceholder ? (
          <PlaceholderArt seed={`${seedPrefix}-${index}`} accent={accent} label={item.alt} />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain"
            sizes="90vw"
          />
        )}
      </div>
      {item.caption ? (
        <p className="absolute bottom-4 left-0 right-0 text-center text-paper/80 text-sm">
          {item.caption}
        </p>
      ) : null}
    </div>
  );
}
