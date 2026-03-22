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
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#register"
              className="btn-premium inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-[15px] font-bold text-[#192376] shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/918750581505?text=Hi%2C%20I%20want%20to%20know%20about%20IPMAT%20coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/25 px-8 py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-white/10"
            >
              💬 WhatsApp Us
            </a>
          </div>
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

        {/* Social Media */}
        <div className="mt-6 flex items-center justify-center gap-4 md:justify-start">
          <span className="text-[13px] text-white/50">Follow Us:</span>
          <a
            href="https://www.instagram.com/lptdelhi_ncr?igsh=MXM3OTh5NnR3bG9mOA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#E1306C] hover:scale-110"
            aria-label="Instagram"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a
            href="https://www.youtube.com/@LPTdelhi_ncr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FF0000] hover:scale-110"
            aria-label="YouTube"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a
            href="https://wa.me/918750581505?text=Hi%2C%20I%20want%20to%20know%20about%20IPMAT%20coaching"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#25D366] hover:scale-110"
            aria-label="WhatsApp"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FooterCta;
