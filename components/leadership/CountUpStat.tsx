"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import type { ImpactStat } from "@/data/leadership";

const TINTS = ["bg-blue-tint", "bg-coral-tint", "bg-amber-tint"];
const TEXTS = ["text-blue", "text-coral", "text-amber"];

function parseValue(value: string) {
  const match = value.match(/([\d.]+)/);
  const num = match ? parseFloat(match[1]) : null;
  const prefix = num !== null ? value.slice(0, match!.index) : "";
  const suffix = num !== null ? value.slice((match!.index ?? 0) + match![1].length) : "";
  return { num, prefix, suffix };
}

export function CountUpStat({ stat, index }: { stat: ImpactStat; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState<string>(stat.value);
  const { num, prefix, suffix } = parseValue(stat.value);
  const tint = TINTS[index % TINTS.length];
  const text = TEXTS[index % TEXTS.length];

  useEffect(() => {
    if (!inView || reduced || num === null) {
      return;
    }
    const duration = 900;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(num * eased);
      setDisplay(`${prefix}${current}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, num, prefix, suffix, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={reduced ? undefined : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, delay: reduced ? 0 : index * 0.05 }}
      className={`flex flex-col gap-1 p-6 rounded-3xl ${tint}`}
    >
      <span className={`font-extrabold text-4xl sm:text-5xl tracking-tight tabular-nums ${text}`}>
        {display}
      </span>
      <span className="text-sm text-ink-soft font-medium">{stat.label}</span>
    </motion.div>
  );
}
