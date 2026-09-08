import { useState } from "react";
import { PROFILE } from "../../data/profile";

/**
 * Drop a photo at `public/profile.jpg` and it will be used automatically.
 * Until then, this renders a monogram placeholder in the site's palette.
 */
export default function Avatar({ size = 176, rounded = true }) {
  const [imageFailed, setImageFailed] = useState(false);
  const shapeClass = rounded ? "rounded-full" : "";

  if (imageFailed) {
    return (
      <div
        className={`flex items-center justify-center border border-line bg-card select-none ${shapeClass}`}
        style={{ width: size, height: size }}
      >
        <span className="font-display text-5xl text-blueprint">{PROFILE.initials}</span>
      </div>
    );
  }

  return (
    <img
      src="/profile.jpg"
      alt={PROFILE.name}
      onError={() => setImageFailed(true)}
      className={`object-cover border border-line ${shapeClass}`}
      style={{ width: size, height: size }}
    />
  );
}
