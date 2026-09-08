import { Github } from "lucide-react";
import SectionLabel from "../components/ui/SectionLabel";
import Button from "../components/ui/Button";
import ProjectCard from "../components/sections/ProjectCard";
import { PROJECTS } from "../data/projects";
import { CONTACT } from "../data/profile";

export default function Projects() {
  return (
    <div className="animate-rise-1">
      <SectionLabel>Projects</SectionLabel>
      <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-12 max-w-[20ch]">
        Things I've built end to end.
      </h1>
      <div className="flex flex-col gap-8 mb-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} {...project} index={i} />
        ))}
      </div>
      <Button href={`https://${CONTACT.github}`} variant="secondary" icon={Github}>
        More on GitHub
      </Button>
    </div>
  );
}
