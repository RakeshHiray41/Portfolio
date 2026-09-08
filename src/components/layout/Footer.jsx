import { Github, Linkedin, Instagram, Code2 } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import { PROFILE, CONTACT } from "../../data/profile";

const SOCIALS = [
  { icon: Github, href: `https://${CONTACT.github}`, label: "GitHub" },
  { icon: Linkedin, href: `https://${CONTACT.linkedin}`, label: "LinkedIn" },
  { icon: Instagram, href: `https://${CONTACT.instagram}`, label: "Instagram" },
  { icon: Code2, href: `https://${CONTACT.leetcode}`, label: "LeetCode" },
];

export default function Footer() {
  return (
    <footer className="mt-16">
      {/* dark top section */}
      <div className="pt-8 pb-5 px-6 text-center" style={{ background: "#111827" }}>
        <p className="font-display text-2xl" style={{ color: "#F3F1EA" }}>
          {PROFILE.name}
        </p>
       
      </div>

      {/* wave separator */}
      <div style={{ background: "#111827" }}>
        <svg
          viewBox="0 0 1440 100"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "50px" }}
        >
          <path
            d="M0,40 C240,100 480,0 720,30 C960,60 1200,110 1440,50 L1440,100 L0,100 Z"
            fill="#1F2937"
          />
        </svg>
      </div>

      {/* blue bottom section */}
      <div className="px-6 pb-5 pt-1" style={{ background: "#1F2937" }}>
        <div className="flex justify-center gap-4 mb-4">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.12)", color: "#FFFFFF" }}
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        <nav className="flex flex-wrap justify-center gap-5 mb-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="text-sm transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
          © 2026 {PROFILE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}