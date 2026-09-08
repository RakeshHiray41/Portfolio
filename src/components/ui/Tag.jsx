const COLORS = {
  blueprint: "text-blueprint border-blueprint",
  signal: "text-signal border-signal",
  sage: "text-sage border-sage",
  plum: "text-plum border-plum",
  teal: "text-teal border-teal",
};

export default function Tag({ children, color = "blueprint" }) {
  return (
    <span className={`font-mono text-xs border px-2 py-1 ${COLORS[color] || COLORS.blueprint}`}>
      {children}
    </span>
  );
}
