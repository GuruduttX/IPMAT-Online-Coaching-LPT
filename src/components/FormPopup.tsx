import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

const FormPopup = () => {
  const [show, setShow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("lpt_popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!show || !containerRef.current) return;

    const div = document.createElement("div");
    div.className = "npf_wgts";
    div.setAttribute("data-height", "750px");
    div.setAttribute("data-w", "2813f4ab5a613222cb968f1cee3b6603");
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(div);

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);

    document.body.style.overflow = "hidden";

    return () => {
      try { document.body.removeChild(s); } catch {}
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("lpt_popup_dismissed", "true");
    document.body.style.overflow = "";
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-[440px]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-100 active:scale-95"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
          {/* Header matching the hero form */}
          <div className="px-6 pt-6 md:px-8 md:pt-8">
            <p className="text-[12px] font-semibold uppercase tracking-widest text-[#6936F5]">
              Limited Time Offer
            </p>
            <h3 className="mt-1 text-[18px] font-bold text-[#36344D]">
              Get Free IPMAT Counselling
            </h3>
            <p className="mt-1 text-[13px] text-[#727586]">
              Book your slot now — only few seats left for 2026 batch
            </p>
          </div>

          {/* Form */}
          <div className="npf-styled px-6 py-4 md:px-8">
            <div ref={containerRef} />
          </div>

          {/* Trust text */}
          <div className="border-t border-gray-100 bg-gray-50 px-5 py-3 text-center">
            <p className="text-[11px] text-[#9CA3AF]">
              🔒 Your information is 100% secure | Trusted by 5,000+ students
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
