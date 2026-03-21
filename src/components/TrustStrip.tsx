import { Users, Award, Clock, Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { icon: Users, value: "5,000+", label: "Students Enrolled" },
  { icon: Award, value: "200+", label: "IIM Selections" },
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Star, value: "4.8★", label: "Google Rating" },
];

const TrustStrip = () => {
  const ref = useScrollReveal();

  return (
    <section className="border-b border-gray-100 bg-white py-6 md:py-8">
      <div
        ref={ref}
        className="fade-in-up mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 md:grid-cols-4 md:gap-0 md:px-8"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex items-center gap-3 md:justify-center md:border-r md:border-gray-100 md:last:border-r-0"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F2F3F6]">
              <s.icon className="h-5 w-5 text-[#6936F5]" />
            </div>
            <div>
              <p className="text-[18px] font-bold leading-none text-[#192376] md:text-[20px]">{s.value}</p>
              <p className="mt-0.5 text-[12px] text-[#727586]">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
