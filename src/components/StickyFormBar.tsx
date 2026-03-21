import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const StickyFormBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md lg:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] font-semibold text-[#36344D]">IPMAT 2026 — Limited Seats</p>
          <p className="text-[11px] text-[#727586]">Register for free counselling</p>
        </div>
        <a
          href="#register"
          className="btn-premium shrink-0 rounded-lg bg-[#192376] px-5 py-2.5 text-[13px] font-semibold text-white transition-all active:scale-[0.97]"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default StickyFormBar;
