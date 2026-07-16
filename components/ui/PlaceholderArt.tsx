import type { Accent } from "@/data/projects";

const ACCENT_HEX: Record<Accent, string> = {
  cobalt: "#3d6bf6",
  red: "#ff6452",
  gold: "#ffab1f",
  green: "#2fae66",
};

const ACCENT_TINT: Record<Accent, string> = {
  cobalt: "#e8edff",
  red: "#ffe9e4",
  gold: "#fff1d9",
  green: "#e3f5ea",
};

function hashSeed(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Deterministic, rounded placeholder composition used wherever a real
// photo/screenshot hasn't been supplied yet — flat shapes, no blur/gradient.
export function PlaceholderArt({
  seed,
  accent = "cobalt",
  label,
  className,
}: {
  seed: string;
  accent?: Accent;
  label?: string;
  className?: string;
}) {
  const hash = hashSeed(seed);
  const hex = ACCENT_HEX[accent];
  const tint = ACCENT_TINT[accent];
  const variant = hash % 4;

  const shapes = [];
  if (variant === 0) {
    shapes.push(
      <circle key="c1" cx="72%" cy="34%" r="78" fill={hex} />,
      <circle key="c2" cx="26%" cy="72%" r="46" fill={tint} />,
      <path
        key="l"
        d="M40,260 Q200,180 360,80"
        stroke={hex}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
    );
  } else if (variant === 1) {
    shapes.push(
      <rect key="r1" x="12%" y="18%" width="46%" height="24" rx="12" fill={hex} />,
      <rect key="r2" x="12%" y="46%" width="28%" height="24" rx="12" fill={tint} />,
      <circle key="c1" cx="76%" cy="68%" r="58" fill={hex} opacity="0.85" />
    );
  } else if (variant === 2) {
    shapes.push(
      <circle key="c1" cx="34%" cy="55%" r="86" fill={tint} />,
      <circle key="c2" cx="68%" cy="45%" r="50" fill={hex} />
    );
  } else {
    shapes.push(
      <rect key="r1" x="0" y="0" width="42%" height="100%" rx="0" fill={tint} />,
      <circle key="c1" cx="28%" cy="62%" r="44" fill={hex} />,
      <circle key="c2" cx="74%" cy="38%" r="30" fill={hex} opacity="0.4" />,
      <rect key="r2" x="58%" y="58%" width="90" height="90" rx="24" fill={tint} />
    );
  }

  return (
    <div
      className={`relative w-full h-full overflow-hidden bg-tint rounded-[inherit] ${className ?? ""}`}
      role="img"
      aria-label={label ?? "Placeholder composition — image coming soon"}
    >
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill="#fdfcf9" />
        {shapes}
      </svg>
      {label ? (
        <div className="absolute inset-x-0 bottom-0 px-3 py-2 bg-surface/90">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-soft truncate">
            {label}
          </p>
        </div>
      ) : null}
    </div>
  );
}
