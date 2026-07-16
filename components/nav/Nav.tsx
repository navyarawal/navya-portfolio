"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { useScrollSpy, useScrollProgress } from "@/lib/hooks";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function Nav() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);
  const progress = useScrollProgress();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className="h-[3px] bg-blue origin-left transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <div className="container-edit pt-4">
        <nav
          className="bg-surface/90 backdrop-blur rounded-full shadow-soft"
          aria-label="Primary"
        >
          <div className="flex items-center justify-between h-16 px-3 sm:px-5">
            <Link
              href="#home"
              className="font-extrabold text-lg tracking-tight flex items-center gap-2 pl-2"
            >
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue text-paper text-[11px] font-bold"
                aria-hidden="true"
              >
                NR
              </span>
              <span className="hidden xs:inline">Navya Rawal</span>
            </Link>

            <ul className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = active === id;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative px-3.5 py-2 rounded-full text-sm font-semibold transition-colors ${
                        isActive ? "bg-blue-tint text-blue" : "text-ink hover:text-blue"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={site.resumeHref}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-ink text-paper text-sm font-semibold hover:bg-blue transition-colors"
              >
                Résumé
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-full hover:bg-tint"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {open ? (
          <div
            id="mobile-menu"
            className="lg:hidden mt-2 bg-surface rounded-3xl shadow-soft overflow-hidden"
          >
            <ul className="flex flex-col p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-lg font-semibold hover:bg-tint"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 px-1">
                <a
                  href={site.resumeHref}
                  download
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-ink text-paper text-sm font-semibold"
                >
                  Download Résumé
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
