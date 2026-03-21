const CtaBanner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#192376] to-[#6936F5]">
      {/* Subtle pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      }} />

      <div className="relative mx-auto max-w-[1200px] px-5 py-12 text-center md:px-8 md:py-16">
        <p className="mx-auto max-w-[640px] text-[15px] leading-relaxed text-white/85 md:text-[17px]">
          At LPT, we build fearless achievers. With top mentors and intense prep, you won't just attempt IPMAT — you'll <strong className="text-white">dominate it.</strong>
        </p>
        <p className="mt-2 text-[13px] font-medium text-white/50">
          Only 50 seats remaining for IPMAT 2026 batch
        </p>
        <a
          href="#register"
          className="btn-premium mt-6 inline-block animate-pulse-gentle rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[#192376] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
        >
          Register Now — It's Free
        </a>
      </div>
    </section>
  );
};

export default CtaBanner;
