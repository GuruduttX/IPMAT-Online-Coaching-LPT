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

    // Move the statically-loaded NPF popup form into this component
    const npfForm = document.getElementById("npf-popup-form");
    if (npfForm) {
      npfForm.style.display = "block";
      containerRef.current.appendChild(npfForm);
    }

    document.body.style.overflow = "hidden";

    return () => {
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
        <button
          onClick={handleClose}
          className="absolute -right-2 -top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-100 active:scale-95"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="overflow-hidden rounded-xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="px-6 pt-6">
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

          <div className="npf-styled px-6 py-4">
            <div ref={containerRef} />
          </div>

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
