import { ArrowRight, Shield } from "lucide-react";

const FooterCta = () => {
  return (
    <section className="relative overflow-hidden bg-[#192376]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-[24px] font-bold text-white md:text-[28px]">
              Have Questions? Let's Clear Them Now!
            </h2>
            <p className="mt-2 max-w-[500px] text-[15px] text-white/65">
              Our team is ready to guide you with all the answers you need. Whether it's about batches, fees, or schedules — get clarity today.
            </p>
          </div>
          <a
            href="#register"
            className="btn-premium inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[#192376] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
          >
            Enquire Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Trust strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-8 md:justify-start">
          <div className="flex items-center gap-2 text-[13px] text-white/50">
            <Shield className="h-4 w-4" />
            Trusted by 5,000+ students
          </div>
          <span className="text-[13px] text-white/50">•</span>
          <span className="text-[13px] text-white/50">15+ years of teaching excellence</span>
          <span className="text-[13px] text-white/50">•</span>
          <span className="text-[13px] text-white/50">4 centers across Delhi NCR</span>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
