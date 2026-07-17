"use client";

import { useEffect, useRef, useState } from "react";

interface Size {
  width: number;
  height: number;
}

const BLUE = "#3d6bf6";
const CORAL = "#ff6452";
const AMBER = "#ffab1f";
const GREEN = "#2fae66";

// Sharp, right-angled trace with occasional small square "grid" detours —
// the architectural line.
function buildArchitecturalPath(x: number, height: number) {
  let d = `M${x},0`;
  let curY = 0;
  let curX = x;
  let i = 0;
  while (curY < height) {
    const segLen = 150 + (i % 3) * 45;
    curY = Math.min(curY + segLen, height);
    d += ` L${curX},${curY}`;
    if (i % 3 === 1 && curY < height) {
      const jog = i % 6 === 1 ? 26 : -26;
      curX += jog;
      d += ` L${curX},${curY}`;
    }
    if (i % 7 === 3 && curY < height - 90) {
      const s = 22;
      d += ` L${curX + s},${curY} L${curX + s},${curY + s} L${curX},${curY + s}`;
      curY += s;
    }
    i++;
  }
  return d;
}

// A single continuous, gently swaying curve — the flowing line.
function buildFlowingPath(baseX: number, height: number) {
  const wavelength = 340;
  const amplitude = 30;
  let d = `M${baseX},0`;
  let curY = 0;
  let curX = baseX;
  let dir = 1;
  while (curY < height) {
    const nextY = Math.min(curY + wavelength / 2, height);
    const nextX = baseX + dir * amplitude;
    const cY = (curY + nextY) / 2;
    d += ` C${curX},${cY} ${nextX},${cY} ${nextX},${nextY}`;
    curY = nextY;
    curX = nextX;
    dir *= -1;
  }
  return d;
}

// Mostly straight, punctuated by small circular loops — the orbital line.
function buildOrbitalPath(x: number, height: number) {
  let d = `M${x},0`;
  let curY = 0;
  const loops: { cx: number; cy: number; r: number }[] = [];
  let i = 0;
  while (curY < height) {
    const segLen = 210;
    const nextY = Math.min(curY + segLen, height);
    d += ` L${x},${nextY}`;
    curY = nextY;
    if (i % 2 === 1 && curY < height - 70) {
      loops.push({ cx: x, cy: curY + 18, r: 13 });
      curY += 36;
      d += ` L${x},${curY}`;
    }
    i++;
  }
  return { d, loops };
}

// A tight, continuous zigzag — the fourth line's distinct sharp-turn
// character, denser and narrower than the architectural line's jogs.
function buildZigzagPath(x: number, height: number) {
  let d = `M${x},0`;
  let curY = 0;
  let curX = x;
  let dir = 1;
  let i = 0;
  while (curY < height) {
    curY = Math.min(curY + 85, height);
    curX = x + dir * 17;
    d += ` L${curX},${curY}`;
    dir *= -1;
    if (i % 5 === 4 && curY < height - 60) {
      curY = Math.min(curY + 55, height);
      d += ` L${curX},${curY}`;
    }
    i++;
  }
  return d;
}

// Ambient background graphic: a small set of thin geometric lines that
// travel the full height of the page, mostly hidden behind each section's
// opaque card background and visible in the gaps/margins between them — a
// quiet architectural thread tying the whole scroll together. Purely
// decorative (aria-hidden), no interaction, no animation.
export function BackgroundLines() {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    // Measure the page's own content wrapper (#page-content in page.tsx),
    // never document.documentElement/body. This SVG is an absolutely
    // positioned sibling of that wrapper, so its rendered height still
    // counts toward document.documentElement.scrollHeight — measuring the
    // document would mean measuring a height that partly includes this
    // component's own last render, a feedback loop that can latch onto an
    // inflated value across a resize sequence and leave dead space below
    // the page's last section.
    const content = document.getElementById("page-content");
    if (!content) return;

    const measure = () => {
      setSize({
        width: content.scrollWidth,
        height: content.scrollHeight,
      });
    };

    const scheduleMeasure = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(measure);
    };

    scheduleMeasure();
    window.addEventListener("load", scheduleMeasure);
    window.addEventListener("resize", scheduleMeasure);

    const observer = new ResizeObserver(scheduleMeasure);
    observer.observe(content);

    return () => {
      window.removeEventListener("load", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  if (size.width === 0 || size.height === 0) return null;

  const architectural = buildArchitecturalPath(size.width - 52, size.height);
  const flowing = buildFlowingPath(size.width - 92, size.height);
  const orbital = buildOrbitalPath(size.width - 134, size.height);
  const zigzag = buildZigzagPath(size.width - 178, size.height);

  return (
    // -z-10 (inside the page root's `isolate` stacking context) is required,
    // not optional: a plain position:absolute element with no z-index still
    // paints *after* normal-flow, non-positioned siblings, regardless of DOM
    // order — so without this, the lines show through any card that isn't
    // itself positioned (e.g. plain bg-tint divs), like the Capabilities
    // cards. A genuine negative z-index is what keeps it behind everything.
    <svg
      aria-hidden="true"
      // Hidden below lg: at narrow widths the lanes (x ≈ 50-195px) run
      // straight through the hero text instead of sitting in the margins.
      className="absolute inset-0 -z-10 pointer-events-none hidden lg:block"
      width={size.width}
      height={size.height}
      viewBox={`0 0 ${size.width} ${size.height}`}
      preserveAspectRatio="none"
    >
      <path d={architectural} fill="none" stroke={BLUE} strokeOpacity={0.2} strokeWidth={1.75} />
      <path
        d={flowing}
        fill="none"
        stroke={CORAL}
        strokeOpacity={0.18}
        strokeWidth={1.75}
        strokeLinecap="round"
      />
      <path d={orbital.d} fill="none" stroke={AMBER} strokeOpacity={0.22} strokeWidth={1.75} />
      {orbital.loops.map((loop, i) => (
        <circle
          key={i}
          cx={loop.cx}
          cy={loop.cy}
          r={loop.r}
          fill="none"
          stroke={AMBER}
          strokeOpacity={0.22}
          strokeWidth={1.75}
        />
      ))}
      <path
        d={zigzag}
        fill="none"
        stroke={GREEN}
        strokeOpacity={0.2}
        strokeWidth={1.75}
        strokeLinecap="round"
      />
    </svg>
  );
}
