"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useScrollSpy(ids: string[], offset = 160) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handler = () => {
      // Only default to the first id once we've confirmed at least one of
      // the target sections actually exists on this page — otherwise (e.g.
      // on a case study route, which has none of these ids) nothing should
      // read as "active" in the nav.
      let current = "";
      let anyFound = false;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        anyFound = true;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) current = id;
      }
      if (anyFound && !current) current = ids[0] ?? "";
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ids, offset]);

  return active;
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, scrollTop / height) : 0);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return progress;
}
