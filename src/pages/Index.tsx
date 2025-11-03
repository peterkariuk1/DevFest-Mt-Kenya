import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProgramSection } from "@/components/ProgramSection";
import { WorkshopsSection } from "@/components/WorkshopsSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProgramSection />
        <WorkshopsSection />
        <SpeakersSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
