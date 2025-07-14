
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillPath from "./skills/SkillPath";
import SkillDetail from "./skills/SkillDetail";
import ParticleField from "./skills/ParticleField";
import { skillPaths } from "./skills/skillsData";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openSkillPaths, setOpenSkillPaths] = useState<number[]>([0]);
  const [contentHeights, setContentHeights] = useState<Record<number, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Measure all content heights after mount
  useEffect(() => {
    const timer = setTimeout(() => {
      skillPaths.forEach((_, index) => {
        measureContentHeight(index);
      });
    }, 100); // Small delay to ensure content is rendered

    return () => clearTimeout(timer);
  }, []);

  const measureContentHeight = (index: number) => {
    const contentElement = contentRefs.current[index];
    if (contentElement) {
      const height = contentElement.scrollHeight;
      setContentHeights(prev => ({ ...prev, [index]: height }));
      return height;
    }
    return 0;
  };

  const handleSkillClick = (index: number) => {
    const isCurrentlyOpen = openSkillPaths.includes(index);

    if (!isCurrentlyOpen) {
      // Ensure height is measured before opening
      if (!contentHeights[index]) {
        measureContentHeight(index);
      }

      // Open after a brief delay to ensure height is calculated
      setTimeout(() => {
        setOpenSkillPaths((prev) => [...prev, index]);
      }, 10);
    } else {
      // Close immediately
      setOpenSkillPaths((prev) => prev.filter((i) => i !== index));
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <ParticleField isVisible={isVisible} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/8 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-plasma-violet/6 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl animate-pulse delay-2000 pointer-events-none" />
      </div>

      <div className="container mx-auto relative z-10 max-w-4xl pointer-events-none">
        {/* Header */}
        <div className="text-center mb-16 relative pointer-events-auto">
          <h2 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-8 transition-all duration-1000 delay-200 relative ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            <span className="text-gradient bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className={`text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
            Building things with <span className="text-electric-blue font-bold">React</span> and <span className="text-electric-blue font-bold">TypeScript</span>{' '}
            that people actually want to use, plus experimenting with <span className="text-plasma-violet font-bold">AI</span> to make them even better.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="space-y-4 pointer-events-auto">
          {skillPaths.map((path, index) => {
            const isActive = openSkillPaths.includes(index);
            return (
              <motion.div
                key={path.title}
                className="relative"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 border ${isActive
                    ? getActiveBorderColorClass(path.color) +
                    " " +
                    getActiveShadowClass(path.color)
                    : "border-white/10 hover:border-white/20"
                    } bg-black/30 backdrop-blur-sm`}
                >
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${isActive
                      ? getActiveBgClass(path.color)
                      : "bg-white/5 opacity-0 group-hover:opacity-100"
                      }`}
                  />
                  <div className="relative">
                    <SkillPath
                      path={path}
                      index={index}
                      isActive={isActive}
                      onClick={() => handleSkillClick(index)}
                    />
                    {/* Hidden content for measurement */}
                    <div
                      ref={(el) => {
                        contentRefs.current[index] = el;
                      }}
                      style={{
                        position: "absolute",
                        visibility: "hidden",
                        height: "auto",
                        width: "100%",
                        pointerEvents: "none"
                      }}
                    >
                      <SkillDetail
                        skill={path}
                        isVisible={isVisible}
                        onCollapse={() => { }}
                      />
                    </div>

                    <AnimatePresence>
                      {isActive && contentHeights[index] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: contentHeights[index],
                            opacity: 1
                          }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <SkillDetail
                            skill={path}
                            isVisible={isVisible}
                            onCollapse={() => handleSkillClick(index)}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const getBorderColorClass = (color: string) => {
  switch (color) {
    case "electric-blue":
      return "border-electric-blue/30";
    case "plasma-violet":
      return "border-plasma-violet/30";
    case "neon-green":
      return "border-neon-green/30";
    case "yellow-400":
      return "border-yellow-400/30";
    default:
      return "border-white/10";
  }
};

const getActiveBorderColorClass = (color: string) => {
  switch (color) {
    case "electric-blue": return "border-electric-blue/50";
    case "plasma-violet": return "border-plasma-violet/50";
    case "neon-green": return "border-neon-green/50";
    case "yellow-400": return "border-yellow-400/50";
    default: return "border-white/20";
  }
};

const getActiveShadowClass = (color: string) => {
  switch (color) {
    case "electric-blue":
      return "shadow-[0_0_25px_rgba(0,217,255,0.25)]";
    case "plasma-violet":
      return "shadow-[0_0_25px_rgba(157,78,221,0.25)]";
    case "neon-green":
      return "shadow-[0_0_25px_rgba(57,255,20,0.25)]";
    case "yellow-400":
      return "shadow-[0_0_25px_rgba(250,204,21,0.25)]";
    default:
      return "shadow-none";
  }
};

const getActiveBgClass = (_color: string) => {
  return "bg-transparent";
};

export default SkillsSection;
