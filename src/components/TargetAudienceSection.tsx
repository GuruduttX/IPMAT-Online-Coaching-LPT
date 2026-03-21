import { useScrollReveal } from "@/hooks/useScrollReveal";

const checklist = [
  "You dream of studying at IIM Indore, Rohtak, Ranchi etc.",
  "You want structured guidance with a clear, proven roadmap.",
  "You prefer learning from IIM graduates and experienced mentors.",
  "You believe consistent practice and strategy lead to success.",
  "You're aiming for top scores across all IPMAT sections.",
  "You don't just want preparation — you want results.",
  "You're serious about building your career from Day 1.",
  "You value smart, focused, and personalized preparation.",
];

const TargetAudienceSection = () => {
  const ref = useScrollReveal();

  return (
    <>
      {/* Target Audience */}
      <section className="bg-white py-16 md:py-24">
        <div
          ref={ref}
          className="fade-in-up mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 md:px-8 lg:flex-row lg:gap-16"
        >
          {/* Left Text */}
          <div className="flex-1">
            <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
              Our Coaching Program is for You, Only If:
            </h2>
            <div className="mt-8 space-y-3">
              {checklist.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border border-gray-100 bg-[#FAFBFC] px-5 py-3 transition-all hover:border-[#6936F5]/15 hover:bg-white hover:shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6936F5] text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-[14px] text-[#36344D] md:text-[15px]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <img
              src="https://live.lptedtech.com/wp-content/uploads/2025/07/Untitled-design-11.webp"
              alt="IPMAT Coaching"
              className="h-auto w-[300px] rounded-xl object-cover shadow-lg md:w-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Winners CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#6936F5] to-[#192376]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px"
        }} />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-8 md:py-14">
          <div className="text-center md:text-left">
            <h2 className="text-[22px] font-bold text-white md:text-[26px]">
              Winners don't wait for the perfect time — they start now.
            </h2>
            <p className="mt-2 text-[14px] text-white/70 md:text-[16px]">
              Join our 3-day free demo class and see exactly how we prepare students for IIM success.
            </p>
          </div>
          <a
            href="#register"
            className="shrink-0 rounded-lg bg-white px-8 py-3.5 text-[14px] font-bold text-[#192376] shadow-lg transition-all hover:bg-gray-50 hover:shadow-xl active:scale-[0.98]"
          >
            Book Free Demo Class
          </a>
        </div>
      </section>
    </>
  );
};

export default TargetAudienceSection;
