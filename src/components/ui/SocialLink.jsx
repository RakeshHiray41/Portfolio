export default function SocialLink({ href, icon: Icon, label, size = 18 }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="text-ink hover:text-signal transition-colors"
    >
      <Icon size={size} />
    </a>
  );
}
