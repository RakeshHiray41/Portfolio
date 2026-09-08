import { Link } from "react-router-dom";

const BASE =
  "inline-flex items-center gap-2 font-mono text-sm px-5 py-3 transition-colors border";

const VARIANTS = {
  primary: "bg-blueprint text-paper border-blueprint hover:bg-signal hover:border-signal",
  secondary: "bg-transparent text-ink border-line hover:border-signal hover:text-signal",
};

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  icon: Icon,
  ...rest
}) {
  const className = `${BASE} ${VARIANTS[variant]}`;

  if (to) {
    return (
      <Link to={to} className={className} {...rest}>
        {children}
        {Icon && <Icon size={15} />}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} {...rest}>
      {children}
      {Icon && <Icon size={15} />}
    </a>
  );
}
