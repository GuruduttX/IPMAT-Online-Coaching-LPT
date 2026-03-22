import { Phone } from "lucide-react";
import { useEffect, useRef } from "react";

const NpfWidget = ({ height = "750px" }: { height?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const div = document.createElement("div");
    div.className = "npf_wgts";
    div.setAttribute("data-height", height);
    div.setAttribute("data-w", "2813f4ab5a613222cb968f1cee3b6603");
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(div);

    const s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);

    return () => {
      try { document.body.removeChild(s); } catch {}
    };
  }, [height]);

  return <div ref={containerRef} className="npf-styled" />;
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#192376]">
      {/* Urgency Strip */}
      <div className="bg-[#6936F5] py-2.5 text-center">
        <p className="text-[13px] font-medium tracking-wide text-white md:text-[14px]">
          🔥 Limited Seats — IPMAT 2026 Batch Closing Soon.{" "}
          <a href="#register" className="underline underline-offset-2 hover:text-white/90">Register Free →</a>
        </p>
      </div>

      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative mx-auto max-w-[1200px] px-5 md:px-8">
        {/* Logo */}
        <div className="pt-6 pb-4">
          <img
            src="https://live.lptedtech.com/wp-content/uploads/2025/03/Asset-1-1-1-1.svg"
            alt="LPT Edtech"
            className="h-[60px] w-auto md:h-[72px]"
          />
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 pb-10 lg:grid-cols-[1fr_400px] lg:gap-12 lg:pb-14">
          {/* LEFT — Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-[15px] font-medium uppercase tracking-widest text-white/60">
              Your IIM Dream Starts Here
            </p>
            <h1 className="mt-3 text-[32px] font-bold leading-[1.15] text-white md:text-[40px] lg:text-[48px]">
              Join the Best Online
              <br />
              <span className="text-[#A78BFA]">IPMAT Prep!</span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/70 md:text-[16px]">
              Prepare for IPMAT with live interactive classes, IIM alumni mentors,
              full mock series, and AI-powered learning. Turn your IIM dream into
              reality — from anywhere.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold text-white">5000+</span>
                <span className="text-[13px] text-white/50">Students</span>
              </div>
              <div className="h-5 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold text-white">200+</span>
                <span className="text-[13px] text-white/50">IIM Selections</span>
              </div>
              <div className="h-5 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <span className="text-[22px] font-bold text-white">4.8★</span>
                <span className="text-[13px] text-white/50">Google Rating</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-[#192376] transition-all hover:bg-gray-50 active:scale-[0.98]"
              >
                Book Free Counselling
              </a>
              <a
                href="tel:+918750581505"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-[14px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                +91-8750581505
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div id="register" className="scroll-mt-24 lg:-mt-16">
            <div className="rounded-xl bg-white p-5">
              <h3 className="text-[17px] font-bold text-[#36344D]">Limited Slots!</h3>
              <p className="mb-3 text-[12px] text-[#727586]">Fill the form to register or request more details.</p>
              <NpfWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
