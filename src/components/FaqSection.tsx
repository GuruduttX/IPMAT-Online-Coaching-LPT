import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  { q: "Do you provide separate classes for Maths and Verbal?", a: "Yes! We have focused sessions for both Quantitative Aptitude and Verbal Ability." },
  { q: "Will I get personal guidance during the program?", a: "Yes, through one-on-one doubt sessions and mentorship meetings." },
  { q: "How do faculty help with exam strategy?", a: "They provide regular feedback, performance analysis, and exam-focused strategy tweaks." },
  { q: "Do your programs include mock tests?", a: "Yes! Full-length mocks, OMET mocks, topic-wise tests, and sectional tests." },
  { q: "Do you provide test analysis?", a: "Yes, we offer detailed video analysis and mentor feedback after major tests." },
  { q: "What is your AI-powered LMS?", a: "Our Learning Management System tracks your progress and provides smart insights for improvement." },
  { q: "Is doubt-solving available?", a: "Absolutely! We hold regular doubt-clearing sessions and provide personal mentor support." },
  { q: "Are there revision sessions before the exam?", a: "Yes, we conduct high-intensity offline marathon sessions for complete revision." },
  { q: "Is there a free demo class?", a: "Yes! We offer a 3-day free demo class so you can experience our teaching." },
];

const FaqSection = () => {
  const ref = useScrollReveal();

  return (
    <section className="bg-[#F7F8FA] py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div ref={ref} className="fade-in-up flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left Heading */}
          <div className="lg:w-[340px] lg:shrink-0">
            <h2 className="text-[26px] font-bold text-[#36344D] md:text-[32px]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-[15px] text-[#727586]">
              Everything you need to know about our IPMAT coaching programs.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="flex-1">
            <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-2.5">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="overflow-hidden rounded-xl border border-gray-150 bg-white px-5 transition-shadow data-[state=open]:shadow-card"
                >
                  <AccordionTrigger className="py-4 text-left text-[14px] font-semibold text-[#36344D] hover:no-underline data-[state=open]:text-[#6936F5] md:text-[15px] [&[data-state=open]>svg]:text-[#6936F5]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-[14px] leading-[1.7] text-[#727586]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
