import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyWorkWithMeSection from "@/components/WhyWorkWithMeSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import FloatingOrbs from "@/components/FloatingOrbs";

const siteUrl = "https://dennismainhardt.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dennis Mainhardt",
  url: siteUrl,
  image: `${siteUrl}/dennismainhardt.jpg`,
  jobTitle: "Frontend Developer",
  description: "Frontend Developer specializing in React, TypeScript, and modern web experiences.",
  sameAs: [
    "https://www.linkedin.com/in/dennis-mainhardt-321a90369/",
    "https://github.com/DennisMainhardt",
  ],
  knowsAbout: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "UI/UX"],
  email: "mailto:hello@dennismainhardt.com",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-deep-black text-white overflow-x-hidden relative">
        <FloatingOrbs />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <WhyWorkWithMeSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}
