import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, FileText } from "lucide-react";
import { NAV_LINKS } from "../../data/navigation";
import { PROFILE } from "../../data/profile";
import ThemeToggle from "../ui/ThemeToggle";

const linkClass = ({ isActive }) =>
  `font-mono text-sm transition-colors ${isActive ? "text-signal" : "text-muted hover:text-ink"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <NavLink to="/" className="font-display text-lg" onClick={() => setOpen(false)}>
          {PROFILE.initials}
          <span className="text-muted">.</span>
        </NavLink>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass} end={link.path === "/"}>
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-sm border border-line px-4 py-2 hover:border-signal hover:text-signal transition-colors"
          >
            <FileText size={14} /> Resume
          </a>
          <ThemeToggle />
        </nav>

        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-sm text-muted"
          >
            <FileText size={14} /> View Resume
          </a>
        </nav>
      )}
    </header>
  );
}
