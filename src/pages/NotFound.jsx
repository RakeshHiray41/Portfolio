import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 animate-rise-1">
      <p className="font-mono text-xs text-muted mb-4">404</p>
      <h1 className="font-display text-3xl sm:text-4xl mb-6 max-w-[20ch]">
        This page doesn't exist.
      </h1>
      <Link
        to="/"
        className="inline-flex items-center gap-2 font-mono text-sm text-blueprint hover:text-signal transition-colors"
      >
        <ArrowLeft size={15} /> Back to home
      </Link>
    </div>
  );
}
