import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const programs = [
  {
    image: "https://live.lptedtech.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-31-at-1.00.31-PM.jpeg",
    title: "IPM Accelerator Batch",
    badge: "For IPMAT 2026 Aspirants",
    desc: "Balance your boards & IPMAT prep with LPT.",
    points: ["For 12th appearing students", "Ideal for managing board exams with IPMAT"],
    ribbon: "POPULAR",
  },
  {
    image: "https://live.lptedtech.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-31-at-12.45.52-PM.jpeg",
    title: "IPM Target / Finisher Batch",
    badge: "For IPMAT 2027 Aspirants",
    desc: "Balance Your Boards and IPMAT Prep with a Focused 1-Year Plan.",
    points: ["For 12th appearing students", "Ideal for managing board exams with IPMAT"],
    ribbon: null,
  },
  {
    image: "https://live.lptedtech.com/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-31-at-12.46.19-PM.jpeg",
    title: "IPM Foundation Batch",
    badge: "For IPMAT 2028 Aspirants",
    desc: "Start Early. Build Strong. Prepare for IPMAT with 2 Years of Expert Guidance.",
    points: ["For 10th pass-out / 11th appearing students", "Concept clarity from the ground up"],
    ribbon: null,
  },
];

const ProgramsSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#F7F8FA] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
            Top Coaching Programs
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] text-[#727586]">
            Choose the batch that fits your timeline. Every program is designed by IIM alumni for maximum results.
          </p>
        </div>

        <div ref={ref} className="fade-in-up grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <div
              key={i}
              className="card-hover relative flex flex-col overflow-hidden rounded-xl bg-white shadow-card"
            >
              {/* Ribbon */}
              {p.ribbon && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-[#6936F5] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                  {p.ribbon}
                </div>
              )}

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-[200px] w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-[17px] font-bold text-[#36344D]">{p.title}</h3>
                <span className="mt-1.5 inline-flex w-fit rounded-full bg-[#F4F3FF] px-3 py-0.5 text-[12px] font-semibold text-[#6936F5]">
                  {p.badge}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-[#727586]">{p.desc}</p>

                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[14px] text-[#36344D]">
                      <div className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-green-50">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#register"
                  className="btn-premium mt-6 block w-full rounded-lg bg-[#192376] py-3 text-center text-[14px] font-semibold text-white transition-all hover:bg-[#0f1a5c] active:scale-[0.98]"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
