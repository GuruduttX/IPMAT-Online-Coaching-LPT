import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";

const StickyFormBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* Desktop floating buttons — right side */}
      <div className="fixed right-5 bottom-6 z-50 hidden flex-col gap-3 lg:flex">
        <a
          href="https://wa.me/919217577446?text=Hi%2C%20I%20want%20to%20know%20about%20IPMAT%20coaching"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="tel:+919217577446"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#192376] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-3 py-2.5 shadow-lg backdrop-blur-md lg:hidden">
        <div className="flex items-center gap-2">
          <a
            href="#register"
            className="btn-premium flex-1 rounded-lg bg-[#192376] py-3 text-center text-[13px] font-bold text-white transition-all active:scale-[0.97]"
          >
            Register Now — Free
          </a>
          <a
            href="https://wa.me/919217577446?text=Hi%2C%20I%20want%20to%20know%20about%20IPMAT%20coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white transition-all active:scale-95"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href="tel:+919217577446"
            className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-lg bg-[#6936F5] text-white transition-all active:scale-95"
            aria-label="Call"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyFormBar;
