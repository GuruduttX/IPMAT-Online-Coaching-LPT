import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProgramsSection from "@/components/ProgramsSection";
import WhyLptSection from "@/components/WhyLptSection";
import MotivationalSection from "@/components/MotivationalSection";
import CtaBanner from "@/components/CtaBanner";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import ResultsSection from "@/components/ResultsSection";
import Testimonials from "@/components/Testimonials";
import CentersSection from "@/components/CentersSection";
import FaqSection from "@/components/FaqSection";
import FooterCta from "@/components/FooterCta";
import StickyFormBar from "@/components/StickyFormBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustStrip />
      <ProgramsSection />
      <WhyLptSection />
      <MotivationalSection />
      <CtaBanner />
      <TargetAudienceSection />
      <ResultsSection />
      <Testimonials />
      <CentersSection />
      <FaqSection />
      <FooterCta />
      <StickyFormBar />
    </div>
  );
};

export default Index;
