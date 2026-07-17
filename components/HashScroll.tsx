"use client";

import { useEffect } from "react";

// `scroll-behavior: smooth` on <html> (used for in-page nav clicks) is
// known to suppress the browser's native "jump to #hash on page load"
// behavior in Chromium — so a link from a case study page back to e.g.
// "/#leadership" lands at the top instead of the section. This runs once
// on mount and does that scroll manually as a fallback.
//
// Images below the fold (hero photo, gallery thumbnails) load in after
// mount and reflow the page, which can throw off a single scroll
// attempt — so this keeps re-snapping to the target while the page's
// height is still settling, then stops. `behavior: "instant"` is
// required here: the global smooth-scroll CSS turns a default-behavior
// scrollIntoView into an animation, and repeated corrective calls while
// one is still animating cancel each other out.
export function HashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;
    const id = window.location.hash.slice(1);
    const el = document.getElementById(id);
    if (!el) return;

    const snap = () => el.scrollIntoView({ block: "start", behavior: "instant" });
    snap();

    const observer = new ResizeObserver(snap);
    observer.observe(document.body);
    const stop = setTimeout(() => observer.disconnect(), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(stop);
    };
  }, []);

  return null;
}
