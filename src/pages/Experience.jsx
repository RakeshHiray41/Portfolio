import SectionLabel from "../components/ui/SectionLabel";
import ExperienceItem from "../components/sections/ExperienceItem";
import { EXPERIENCE } from "../data/experience";

export default function Experience() {
  return (
    <div className="animate-rise-1">
      <SectionLabel>Experience</SectionLabel>
      <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-12 max-w-[20ch]">
        Where I gained hands-on experience and built real-world solutions.
      </h1>
      <div className="flex flex-col gap-14">
        {EXPERIENCE.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </div>
  );
}
