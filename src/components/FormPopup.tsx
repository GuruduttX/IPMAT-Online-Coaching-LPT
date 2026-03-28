import { useEffect, useState } from "react";
import { X } from "lucide-react";

const NPF_WIDGET_KEY = "1b77a6fea5e0e0e10b6d10b8d9637367";

const FormPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("lpt_popup_dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
      document.body.style.overflow = "hidden";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("lpt_popup_dismissed", "true");
    document.body.style.overflow = "";
  };

  if (!show) return null;

  const iframeSrc = `https://widgets.in6.nopaperforms.com/register?w=${NPF_WIDGET_KEY}&cu=${encodeURIComponent(window.location.href)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-[440px]">
        <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
          {/* Close button - inside the card, always visible on mobile */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition-all hover:bg-gray-200 active:scale-95"
            aria-label="Close popup"
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>

          <div className="px-6 pt-6 pr-14">
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

          <div className="px-4 py-3">
            <iframe
              src={iframeSrc}
              width="100%"
              height="420px"
              frameBorder={0}
              sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-forms allow-popups"
              style={{ border: "none" }}
              title="Registration Form"
            />
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
