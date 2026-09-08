import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-50 bg-transparent">
      <div
        className="h-full bg-signal transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
