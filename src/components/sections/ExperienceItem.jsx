export default function ExperienceItem({ role, company, dates, location, current, bullets }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6">
      <div className="sm:col-span-1">
        <p className="font-mono text-sm text-muted">{dates}</p>
        <p className="font-mono text-xs text-muted mt-1">{location}</p>
        {current && (
          <p className="flex items-center gap-2 mt-2 font-mono text-xs text-signal">
            <span className="rh-dot" /> current
          </p>
        )}
      </div>
      <div className="sm:col-span-3 border-t border-line pt-4 sm:pt-0 sm:border-t-0 sm:border-l sm:pl-6">
        <h3 className="font-display text-xl mb-1">{role}</h3>
        <p className="text-blueprint font-medium mb-3">{company}</p>
        <ul className="flex flex-col gap-2">
          {bullets.map((bullet, i) => (
            <li key={i} className="text-muted leading-relaxed text-sm max-w-[58ch]">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
