const BAR_COLOR = {
  blueprint: "bg-blueprint",
  signal: "bg-signal",
  sage: "bg-sage",
  plum: "bg-plum",
  teal: "bg-teal",
};

const TEXT_COLOR = {
  blueprint: "text-blueprint",
  signal: "text-signal",
  sage: "text-sage",
  plum: "text-plum",
  teal: "text-teal",
};

export default function SkillBar({ label, value, color = "blueprint" }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <p className="text-sm font-medium">{label}</p>
        <p className={`font-mono text-xs ${TEXT_COLOR[color]}`}>{value}%</p>
      </div>
      <div className="h-1.5 w-full bg-line overflow-hidden">
        <div
          className={`h-full ${BAR_COLOR[color]}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
