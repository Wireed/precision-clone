import TopBar from "@/components/TopBar";
import HeroSection from "@/components/HeroSection";
import HighlightBox from "@/components/HighlightBox";
import ProblemsSection from "@/components/ProblemsSection";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import WhatsAppSupportSection from "@/components/WhatsAppSupportSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <HighlightBox />
      <ProblemsSection />
      <TechnologySection />
      <TestimonialsSection />
      <WhatsAppSupportSection />
      <OfferSection />
      <FaqSection />
      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
