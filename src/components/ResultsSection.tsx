import { useScrollReveal } from "@/hooks/useScrollReveal";

const ResultsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
            Our Results Speak for Themselves
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[15px] text-[#727586]">
            Year after year, LPT students secure top ranks in IPMAT and make it to premier IIMs.
          </p>
        </div>

        <div ref={ref} className="fade-in-up overflow-hidden rounded-xl shadow-card">
          {/* Desktop Image */}
          <div className="hidden md:block">
            <img
              src="https://live.lptedtech.com/wp-content/uploads/2025/07/1201x453.webp"
              alt="IPMAT Results and Statistics"
              className="w-full"
              loading="lazy"
            />
          </div>
          {/* Mobile Image */}
          <div className="block md:hidden">
            <img
              src="https://live.lptedtech.com/wp-content/uploads/2025/07/1081x1351.webp"
              alt="IPMAT Results and Statistics"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
