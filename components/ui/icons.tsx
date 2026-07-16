// Small geometric monogram mark used in place of third-party brand logos,
// consistent with the site's own rounded "NR" mark.
export function LinkedinMark({
  size = 16,
  light = false,
}: {
  size?: number;
  light?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.6), borderRadius: size * 0.3 }}
      className={`inline-flex items-center justify-center font-bold leading-none shrink-0 ${
        light ? "bg-paper text-ink" : "bg-ink text-paper"
      }`}
    >
      in
    </span>
  );
}
