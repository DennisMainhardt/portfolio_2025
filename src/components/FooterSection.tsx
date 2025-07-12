
import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const FooterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const techTags = [
    "Remote Work",
    "AI Integration", 
    "React/TypeScript",
    "Full Stack"
  ];

  return (
    <footer ref={sectionRef} className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-electric-blue/4 via-plasma-violet/2 to-transparent blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-neon-green/3 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-plasma-violet/3 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        {/* Availability Banner */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative">
              <Check className="w-6 h-6 text-neon-green animate-pulse" />
              <div className="absolute inset-0 bg-neon-green/30 rounded-full blur-md animate-pulse" />
            </div>
            <span className="text-xl md:text-2xl font-semibold text-white">
              Available for new projects
            </span>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {techTags.map((tag, index) => (
              <div
                key={tag}
                className={`group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-electric-blue/30 hover:bg-white/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-white/90 font-medium text-sm md:text-base">
                  {tag}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue/10 to-plasma-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Divider */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}>
          <Separator className="h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
        </div>

        {/* Signature Quote */}
        <div className={`text-center mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-xl md:text-2xl lg:text-3xl italic text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            "Let's create beautiful, performant web experiences — built with precision, purpose, and personality."
          </p>
        </div>

        {/* Final Line */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-white/60 text-sm md:text-base mb-2">
            © 2025 Dennis Mainhardt. Built with React, TypeScript & Tailwind CSS.
          </p>
          <p className="text-white/40 text-xs md:text-sm">
            Designed & Developed by me
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
};

export default FooterSection;
