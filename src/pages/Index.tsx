
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingOrbs from "@/components/FloatingOrbs";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-deep-black text-white overflow-x-hidden relative">
        <FloatingOrbs />

        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WhyWorkWithMeSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
