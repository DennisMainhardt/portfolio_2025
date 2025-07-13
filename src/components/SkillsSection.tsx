
import { useEffect, useRef, useState } from "react";
import SkillPath from "./skills/SkillPath";
import SkillDetail from "./skills/SkillDetail";
import ParticleField from "./skills/ParticleField";
import { skillPaths } from "./skills/skillsData";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillPath, setActiveSkillPath] = useState(0); // Pre-select first element (Frontend Mastery)
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Enhanced Background Effects with Animated Aura */}
      <div className="absolute inset-0">
        {/* Animated Background Particles */}
        <ParticleField isVisible={isVisible} color="electric-blue" />
        
        {/* Enhanced Gradient Orbs with Pulse Animation */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-plasma-violet/6 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Background Lighting Pulses */}
        <div className={`absolute top-1/4 right-0 w-64 h-64 bg-gradient-radial from-electric-blue/10 to-transparent rounded-full transition-opacity duration-2000 ${isVisible ? 'animate-glow-pulse' : 'opacity-0'}`} />
        <div className={`absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-radial from-plasma-violet/8 to-transparent rounded-full transition-opacity duration-2000 delay-1000 ${isVisible ? 'animate-glow-pulse' : 'opacity-0'}`} />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 217, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 217, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'drift 25s ease-in-out infinite'
          }} />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Enhanced Header with Aura Effect */}
        <div className="text-center mb-24 relative">
          {/* Title Aura */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-32 bg-gradient-radial from-electric-blue/15 via-plasma-violet/8 to-transparent blur-3xl transition-opacity duration-2000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
          
          <h2 className={`text-6xl md:text-8xl font-bold mb-10 transition-all duration-1000 delay-200 relative ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-gradient bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green bg-clip-text text-transparent">
              Technical Expertise
            </span>
            {/* Text glow effect */}
            <div className="absolute inset-0 text-gradient bg-gradient-to-r from-electric-blue/50 via-plasma-violet/50 to-neon-green/50 bg-clip-text text-transparent blur-sm" />
          </h2>
          
          <p className={`text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Where <span className="text-electric-blue font-bold">frontend mastery</span> meets{' '}
            <span className="text-plasma-violet font-bold">AI innovation</span> —{' '}
            delivering cutting-edge solutions that drive business growth
          </p>
        </div>

        {/* Enhanced Main Content with Exact Height Matching */}
        <div className="grid lg:grid-cols-12 gap-16" style={{ gridTemplateRows: '1fr' }}>
          {/* Skill Paths - Enhanced Layout */}
          <div className={`lg:col-span-7 flex flex-col h-full transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Skill Pathways</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Interactive overview of my technical competencies and specializations
              </p>
            </div>
            
            <div className="space-y-10 flex-1">
              {skillPaths.map((path, index) => (
                <SkillPath
                  key={path.title}
                  path={path}
                  index={index}
                  isActive={activeSkillPath === index}
                  onClick={() => setActiveSkillPath(index)}
                />
              ))}
            </div>
          </div>

          {/* Active Skill Detail - Enhanced with Particle Background and Height Matching */}
          <div className={`lg:col-span-5 flex flex-col h-full transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Deep Dive</h3>
              <p className="text-white/70 text-base leading-relaxed">
                Detailed breakdown of selected expertise area
              </p>
            </div>
            
            <div className="flex-1">
              <SkillDetail
                skill={skillPaths[activeSkillPath]}
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>

        {/* Removed Professional Metrics section */}
      </div>
    </section>
  );
};

export default SkillsSection;
