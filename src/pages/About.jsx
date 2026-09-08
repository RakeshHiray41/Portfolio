import { FileText } from "lucide-react";
import Button from "../components/ui/Button";
import SectionLabel from "../components/ui/SectionLabel";
import SkillBar from "../components/sections/SkillBar";
import { PROFILE, SKILL_LEVELS } from "../data/profile";
import { EXPERIENCE } from "../data/experience";
import { EDUCATION } from "../data/education";

const TIMELINE_COLOR = ["blueprint", "signal", "sage", "teal", "plum"];
const DOT_BG = {
  blueprint: "bg-blueprint",
  signal: "bg-signal",
  sage: "bg-sage",
  teal: "bg-teal",
  plum: "bg-plum",
};

export default function About() {
  return (
    <div className="flex flex-col gap-24">
      {/* intro - no photo, text only */}
      <section className="animate-rise-1 max-w-[62ch]">
        <SectionLabel>About Me</SectionLabel>
        <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-2">
          {PROFILE.role}
        </h1>
        <p className="text-muted font-mono text-sm mb-6">{PROFILE.location}</p>
        <p className="text-muted leading-relaxed mb-8">{PROFILE.longBio}</p>
        <Button href="/resume.pdf" icon={FileText}>
          View Resume
        </Button>
      </section>

      {/* my skill */}
      <section>
        <SectionLabel>My Skill</SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {SKILL_LEVELS.map((skill) => (
            <SkillBar key={skill.label} {...skill} />
          ))}
        </div>
      </section>

      {/* resume: education + experience side by side */}
      <section>
        <SectionLabel>My Resume</SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-mono text-sm text-muted mb-6">Education</h3>
            <div className="flex flex-col gap-8 border-l border-line pl-6">
              {EDUCATION.map((ed, i) => {
                const color = TIMELINE_COLOR[i % TIMELINE_COLOR.length];
                return (
                  <div key={ed.id} className="relative">
                    <span
                      className={`absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full ${DOT_BG[color]}`}
                    />
                    <h4 className="font-display text-lg mb-1">{ed.degree}</h4>
                    <p className="font-mono text-xs text-muted mb-1">{ed.dates}</p>
                    <p className="text-sm text-muted">
                      {ed.school}
                      {ed.location ? ` · ${ed.location}` : ""}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-sm text-muted mb-6">Experience</h3>
            <div className="flex flex-col gap-8 border-l border-line pl-6">
              {EXPERIENCE.map((exp, i) => {
                const color = TIMELINE_COLOR[i % TIMELINE_COLOR.length];
                return (
                  <div key={exp.id} className="relative">
                    <span
                      className={`absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full ${DOT_BG[color]}`}
                    />
                    <h4 className="font-display text-lg mb-1">{exp.role}</h4>
                    <p className="font-mono text-xs text-muted mb-1">{exp.dates}</p>
                    <p className="text-sm text-muted">{exp.company}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
