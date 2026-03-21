import { useScrollReveal } from "@/hooks/useScrollReveal";

const MotivationalSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#F7F8FA] py-16 md:py-24">
      <div
        ref={ref}
        className="fade-in-up mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 md:px-8 lg:flex-row lg:gap-16"
      >
        {/* Left Text */}
        <div className="flex-1">
          <div className="border-l-4 border-[#6936F5] pl-6">
            <h2 className="text-[24px] font-bold leading-snug text-[#36344D] md:text-[30px]">
              "Great futures don't happen by chance. They happen by preparation."
            </h2>
          </div>
          <p className="mt-6 text-[16px] leading-relaxed text-[#727586]">
            Everyone wants an IIM seat. Few are willing to fight for it.
          </p>
          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 rounded-lg bg-red-50/80 px-4 py-2.5">
              <span className="text-[14px]">❌</span>
              <span className="text-[14px] text-[#36344D] md:text-[15px]">Playing it safe? That won't get you into IIM.</span>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-red-50/80 px-4 py-2.5">
              <span className="text-[14px]">❌</span>
              <span className="text-[14px] text-[#36344D] md:text-[15px]">Half-hearted prep? You'll stay stuck in the crowd.</span>
            </div>
          </div>
          <a
            href="#register"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#192376] px-6 py-3 text-[14px] font-semibold text-white transition-all hover:bg-[#0f1a5c] active:scale-[0.98]"
          >
            Start Preparing Now →
          </a>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0">
          <img
            src="https://live.lptedtech.com/wp-content/uploads/2025/07/Untitled-design-10.webp"
            alt="IPMAT Preparation"
            className="h-auto w-[300px] rounded-xl object-cover shadow-lg md:w-[420px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MotivationalSection;
