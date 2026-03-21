import { useState, useRef, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", school: "", classLevel: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({ title: "Thank you!", description: "Our counselor will contact you within 2 hours." });
      setForm({ name: "", email: "", phone: "", school: "", classLevel: "" });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#192376]">
      {/* Urgency Strip */}
      <div className="bg-[#6936F5] py-2.5 text-center">
        <p className="text-[13px] font-medium tracking-wide text-white md:text-[14px]">
          🔥 Limited Seats — IPMAT 2026 Batch Closing Soon.{" "}
          <a href="#register" className="underline underline-offset-2 hover:text-white/90">Register Free →</a>
        </p>
      </div>

      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-16 lg:py-20">
        {/* Logo */}
        <div className="mb-10">
          <img
            src="https://live.lptedtech.com/wp-content/uploads/2025/03/Asset-1-1-1-1.svg"
            alt="LPT Edtech"
            className="h-[60px] w-auto md:h-[72px]"
          />
        </div>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12">
          {/* Left Content — 55% */}
          <div className="flex-1 lg:max-w-[55%]">
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

            {/* Stats bar */}
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
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-[14px] font-medium text-white transition-all hover:border-white/40 hover:bg-white/5"
              >
                <Phone className="h-4 w-4" />
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right Form — 45% */}
          <div id="register" className="w-full scroll-mt-24 lg:w-[400px] lg:shrink-0">
            <div className="rounded-xl bg-white p-6 shadow-form md:p-8">
              <h3 className="text-[18px] font-bold text-[#36344D]">
                Start Your IIM Journey
              </h3>
              <p className="mt-1 text-[13px] text-[#727586]">
                Register for free counselling — limited seats available
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your Full Name"
                  className="w-full rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#36344D] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6936F5] focus:bg-white focus:ring-2 focus:ring-[#6936F5]/10"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#36344D] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6936F5] focus:bg-white focus:ring-2 focus:ring-[#6936F5]/10"
                />
                <div>
                  <input
                    required
                    type="tel"
                    maxLength={10}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    placeholder="Phone Number (without +91)"
                    className="w-full rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#36344D] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6936F5] focus:bg-white focus:ring-2 focus:ring-[#6936F5]/10"
                  />
                  <p className="mt-1 text-[11px] text-[#9CA3AF]">{form.phone.length} of 10 max characters</p>
                </div>
                <input
                  required
                  value={form.school}
                  onChange={(e) => setForm({ ...form, school: e.target.value })}
                  placeholder="School Name"
                  className="w-full rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#36344D] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#6936F5] focus:bg-white focus:ring-2 focus:ring-[#6936F5]/10"
                />
                <select
                  required
                  value={form.classLevel}
                  onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
                  className="w-full rounded-lg border border-gray-200 bg-[#F9FAFB] px-4 py-3 text-[14px] text-[#9CA3AF] outline-none transition focus:border-[#6936F5] focus:bg-white focus:ring-2 focus:ring-[#6936F5]/10"
                >
                  <option value="" disabled>Which class are you in?</option>
                  <option value="Class 10th" className="text-[#36344D]">Class 10th</option>
                  <option value="Class 11th" className="text-[#36344D]">Class 11th</option>
                  <option value="Class 12th" className="text-[#36344D]">Class 12th</option>
                  <option value="12th Passed" className="text-[#36344D]">12th Passed</option>
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-premium w-full rounded-lg bg-[#192376] py-3.5 text-[15px] font-semibold text-white transition-all hover:bg-[#0f1a5c] active:scale-[0.98] disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Register Now — It's Free"}
                </button>
              </form>

              <p className="mt-3 text-center text-[11px] text-[#9CA3AF]">
                🔒 Your information is 100% secure with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
