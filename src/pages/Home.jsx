import { FileText, Mail, ArrowRight, Github, Linkedin, Code2, Instagram } from "lucide-react";
import SectionLabel from "../components/ui/SectionLabel";
import ExperienceItem from "../components/sections/ExperienceItem";
import ProjectCard from "../components/sections/ProjectCard";
import { PROFILE, CONTACT, QUICK_STATS } from "../data/profile";
import { EXPERIENCE } from "../data/experience";
import { PROJECTS } from "../data/projects";

const STAT_COLORS = ["text-signal", "text-signal", "text-signal", "text-signal"];

export default function Home() {
  const latestExperience = EXPERIENCE[0];
  const featured = PROJECTS.slice(0, 2);

  return (
    <div className="flex flex-col gap-24">
      {/* ===== HERO — dark card, matches reference design ===== */}
      <section
        className="rounded-3xl overflow-hidden px-6 sm:px-10 lg:px-16 py-14 lg:py-20"
        style={{
          background:
            "radial-gradient(circle at 75% 40%, #2a2a2a 0%, #1a1a1a 55%, #141414 100%)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* left: text */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <p className="text-sm mb-3" style={{ color: "#9CA3AF" }}>
              {PROFILE.greeting}
            </p>
            <h1 className="text-2xl sm:text-3xl font-medium mb-2" style={{ color: "#F3F1EA" }}>
              {PROFILE.name}
            </h1>
            <h2
              className="font-display font-semibold text-4xl sm:text-5xl leading-tight mb-6"
              style={{ color: "#E67E22" }}
            >
              {PROFILE.role}
            </h2>

            {/* small circular social icons */}
            <div className="flex gap-3 mb-8">
              {[
                { icon: Instagram, href: `https://${CONTACT.instagram}`, label: "Instagram" },
                { icon: Linkedin, href: `https://${CONTACT.linkedin}`, label: "LinkedIn" },
                { icon: Code2, href: `https://${CONTACT.leetcode}`, label: "LeetCode" },
                { icon: Github, href: `https://${CONTACT.github}`, label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: "#2A2A2A", color: "#D1D5DB" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/contact"
                className="rounded-full px-8 py-3 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "#E67E22", color: "#141414" }}
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-8 py-3 text-sm font-medium border transition-colors"
                style={{ borderColor: "#4B5563", color: "#F3F1EA" }}
              >
                Download CV
              </a>
            </div>

            {/* stats row */}
            <div
              className="inline-flex flex-wrap rounded-xl overflow-hidden"
              style={{ background: "#1F1F1F", border: "1px solid #2E2E2E" }}
            >
              {QUICK_STATS.slice(0, 3).map((stat, i) => (
                <div
                  key={stat.label}
                  className="px-6 py-5"
                  style={i > 0 ? { borderLeft: "1px solid #2E2E2E" } : undefined}
                >
                  <p className="font-display text-xl font-semibold mb-1" style={{ color: "#E67E22" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right: photo on circular backdrop */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] flex items-end justify-center">
              <div
                className="absolute rounded-full"
                style={{
                  width: "88%",
                  height: "88%",
                  bottom: 0,
                  background: "#242424",
                }}
              />
              <img
                src="/profile.jpg"
                alt={PROFILE.name}
                className="relative object-cover object-top"
                style={{ width: "100%", height: "100%" }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-24 px-6 md:px-0">
        {/* tagline */}
        <section className="animate-rise-2">
          <SectionLabel>What I do</SectionLabel>
          <p className="text-xl lg:text-2xl leading-relaxed font-display max-w-[52ch]">
            {PROFILE.tagline}
          </p>
        </section>

        {/* current role preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <SectionLabel>Currently</SectionLabel>
            <a href="/experience" className="flex items-center gap-1 font-mono text-xs text-muted hover:text-signal transition-colors">
              Full history <ArrowRight size={13} />
            </a>
          </div>
          <ExperienceItem {...latestExperience} />
        </section>

        {/* featured projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <SectionLabel>Featured Projects</SectionLabel>
            <a href="/projects" className="flex items-center gap-1 font-mono text-xs text-muted hover:text-signal transition-colors">
              All projects <ArrowRight size={13} />
            </a>
          </div>
          <div className="flex flex-col gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </div>
        </section>

        {/* closing cta */}
        <section className="border-t border-line pt-14 pb-4 text-center">
          <h2 className="font-display text-2xl sm:text-3xl mb-6 max-w-[26ch] mx-auto">
            {PROFILE.ctaHeadline}
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 font-mono text-sm px-5 py-3 bg-blueprint text-paper border border-blueprint hover:bg-signal hover:border-signal transition-colors"
          >
            Get in touch <Mail size={15} />
          </a>
        </section>
      </div>
    </div>
  );
}
