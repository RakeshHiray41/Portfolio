import { Github } from "lucide-react";
import Tag from "../ui/Tag";

const ACCENT_BORDER = ["border-l-blueprint", "border-l-signal", "border-l-sage", "border-l-teal"];
const ACCENT_TAG = ["blueprint", "signal", "sage", "teal"];

export default function ProjectCard({ title, subtitle, year, stackList, bullets, repo, index = 0 }) {
  const borderClass = ACCENT_BORDER[index % ACCENT_BORDER.length];
  const tagColor = ACCENT_TAG[index % ACCENT_TAG.length];

  return (
    <div
      className={`bg-card border border-line border-l-4 ${borderClass} p-6 lg:p-8 flex flex-col gap-5`}
    >
      <div>
        <div className="flex items-baseline justify-between mb-1 flex-wrap gap-2">
          <h3 className="font-display text-2xl">{title}</h3>
          <span className="font-mono text-xs text-muted">{year}</span>
        </div>
        <p className="text-muted">{subtitle}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {stackList.map((tech) => (
          <Tag key={tech} color={tagColor}>
            {tech}
          </Tag>
        ))}
      </div>

      <ul className="flex flex-col gap-2">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-sm leading-relaxed max-w-[60ch]">
            {bullet}
          </li>
        ))}
      </ul>

      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-signal transition-colors self-start"
        >
          <Github size={14} /> View Code
        </a>
      )}
    </div>
  );
}
