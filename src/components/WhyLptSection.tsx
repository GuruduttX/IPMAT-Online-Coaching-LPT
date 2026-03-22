import { GraduationCap, FileText, Monitor, BarChart3, BookOpen, CheckCircle, Users, PenLine } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: GraduationCap, title: "Industry's Most Experienced Teachers", desc: "Learn proven strategies from those who've successfully walked the IIM path." },
  { icon: FileText, title: "Complete Study Material", desc: "Access expertly designed books and e-books for comprehensive preparation." },
  { icon: Monitor, title: "AI-Powered LMS", desc: "Track performance, analyze mistakes, and study smarter with advanced tools." },
  { icon: BarChart3, title: "Performance Feedback & Strategy Tweaks", desc: "Continuous support to refine your preparation and maximize scores." },
  { icon: BookOpen, title: "Board + IPMAT Balanced Preparation", desc: "Stay ahead without sacrificing board exam success alongside IPMAT readiness." },
  { icon: CheckCircle, title: "Personalized Doubt-Solving Sessions", desc: "Clear your toughest doubts directly with mentors for deeper understanding." },
  { icon: Users, title: "Exclusive Offline Marathon Sessions", desc: "Revise key topics intensively before the exam with expert guidance." },
  { icon: PenLine, title: "Regular Topic & Sectional Tests", desc: "Strengthen individual areas through targeted practice and focused assessments." },
];

const WhyLptSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
            Key Features That Power Your IPMAT Preparation
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[15px] text-[#727586]">
            Everything you need to crack IPMAT, under one roof.
          </p>
        </div>

        <div ref={ref} className="fade-in-up grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-[#6936F5]/20 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#F4F3FF] transition-colors group-hover:bg-[#6936F5]">
                <f.icon className="h-5 w-5 text-[#6936F5] transition-colors group-hover:text-white" />
              </div>
              <h3 className="text-[15px] font-semibold leading-snug text-[#36344D]">{f.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#727586]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#register"
            className="btn-premium inline-flex items-center gap-2 rounded-lg bg-[#192376] px-8 py-3.5 text-[15px] font-bold text-white shadow-lg transition-all hover:bg-[#0f1a5c] hover:shadow-xl active:scale-[0.98]"
          >
            Start Free IPMAT Prep →
          </a>
          <p className="mt-3 text-[13px] text-[#9CA3AF]">Join 5,000+ students already preparing with LPT</p>
        </div>
      </div>
    </section>
  );
};

export default WhyLptSection;
