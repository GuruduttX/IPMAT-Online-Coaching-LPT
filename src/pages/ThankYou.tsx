import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#192376] px-5 text-center">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative z-10 mx-auto max-w-[520px]">
        {/* Logo */}
        <img
          src="https://live.lptedtech.com/wp-content/uploads/2025/03/Asset-1-1-1-1.svg"
          alt="LPT Edtech"
          className="mx-auto mb-10 h-[60px] w-auto md:h-[72px]"
        />

        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/20">
          <CheckCircle className="h-10 w-10 text-[#25D366]" />
        </div>

        <h1 className="text-[28px] font-bold text-white md:text-[36px]">
          Thank You! 🎉
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-white/70 md:text-[17px]">
          Your registration has been received successfully. Our counselling team
          will reach out to you within <strong className="text-white">24 hours</strong>.
        </p>

        {/* Quick info card */}
        <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-[14px] font-semibold text-white/90">
            What happens next?
          </p>
          <ul className="mt-3 space-y-2 text-left text-[13px] text-white/60">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#A78BFA]">✓</span>
              Our expert counsellor will call you to understand your goals
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#A78BFA]">✓</span>
              You'll receive a personalised IPMAT preparation plan
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-[#A78BFA]">✓</span>
              Get access to a free demo class with IIM alumni mentors
            </li>
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-[14px] font-semibold text-[#192376] transition-all hover:bg-gray-50 active:scale-[0.98]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <a
            href="tel:+919217577446"
            className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-[14px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
          >
            <Phone className="h-4 w-4" />
            Call Us Now
          </a>
        </div>

        <p className="mt-8 text-[12px] text-white/40">
          🔒 Your information is 100% secure | Trusted by 5,000+ students
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
