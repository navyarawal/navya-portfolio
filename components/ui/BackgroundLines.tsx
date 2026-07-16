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
    const measure = () => {
      setSize({
        width: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
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
    observer.observe(document.body);

    return () => {
      window.removeEventListener("load", scheduleMeasure);
      window.removeEventListener("resize", scheduleMeasure);
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  if (size.width === 0 || size.height === 0) return null;

  const architectural = buildArchitecturalPath(52, size.height);
  const flowing = buildFlowingPath(92, size.height);
  const orbital = buildOrbitalPath(134, size.height);
  const zigzag = buildZigzagPath(178, size.height);

  return (
    // No z-index: rendering this before the page content in the DOM is
    // what keeps it behind every section's opaque card background — an
    // explicit z-index would pull it out of that natural paint order.
    <svg
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
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
