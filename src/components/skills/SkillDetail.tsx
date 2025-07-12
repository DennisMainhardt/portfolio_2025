
import { LucideIcon, Star, TrendingUp, Target, Zap, Code, Database, Palette, Users } from "lucide-react";
import TechBadge from "./TechBadge";
import AnimatedProgressBar from "./AnimatedProgressBar";
import ParticleField from "./ParticleField";

interface SkillDetailProps {
  skill: {
    icon: LucideIcon;
    title: string;
    keyTech: string[];
    highlight: string;
    color: string;
  };
  isVisible: boolean;
}

const getSkillSpecificContent = (title: string) => {
  const skillContent = {
    "Frontend Development": {
      specialization: "Modern Web Applications",
      focusAreas: ["Component Architecture", "State Management", "Performance Optimization", "User Experience"],
      icons: [Code, Palette, Zap, Target]
    },
    "AI Integration": {
      specialization: "Intelligent User Experiences", 
      focusAreas: ["LLM Integration", "Prompt Engineering", "AI-Powered Features", "Context Management"],
      icons: [Star, Zap, Target, Code]
    },
    "Full-Stack Solutions": {
      specialization: "End-to-End Development",
      focusAreas: ["API Design", "Database Architecture", "Authentication", "Cloud Deployment"],
      icons: [Database, Code, Target, Users]
    }
  };

  return skillContent[title as keyof typeof skillContent] || skillContent["Frontend Development"];
};

const SkillDetail = ({ skill, isVisible }: SkillDetailProps) => {
  const Icon = skill.icon;
  const content = getSkillSpecificContent(skill.title);
  
  return (
    <div className="glass-card p-8 rounded-3xl relative overflow-hidden group h-full flex flex-col">
      {/* Particle Field Background */}
      <ParticleField isVisible={isVisible} color={skill.color} />
      
      {/* Enhanced Background Gradient with Pulse */}
      <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/8 via-transparent to-${skill.color}/4 transition-all duration-1000`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-${skill.color}/3 to-transparent animate-pulse`} />
      </div>
      
      {/* Lighting Effect */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-radial from-${skill.color}/10 via-transparent to-transparent blur-2xl transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header Section */}
        <div className="mb-6">
          <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br from-${skill.color}/20 to-${skill.color}/10 shadow-2xl shadow-${skill.color}/20 mb-6 relative group-hover:scale-105 transition-transform duration-300`}>
            <Icon className={`w-12 h-12 text-${skill.color}`} />
            <div className={`absolute inset-0 rounded-2xl bg-${skill.color}/10 blur-xl group-hover:bg-${skill.color}/20 transition-all duration-300`} />
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
            {skill.title}
          </h3>
          
          <p className={`text-${skill.color} font-semibold text-lg mb-4 leading-relaxed`}>
            {content.specialization}
          </p>
        </div>

        {/* Current Focus Areas */}
        <div className="mb-6 flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Target className={`w-5 h-5 text-${skill.color}`} />
            <h4 className="text-white font-bold text-lg">Focus Areas</h4>
            <div className={`h-px flex-1 bg-gradient-to-r from-${skill.color}/50 to-transparent`} />
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-6">
            {content.focusAreas.map((area, index) => {
              const IconComponent = content.icons[index] || Target;
              return (
                <div 
                  key={area}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl bg-${skill.color}/10 border border-${skill.color}/20 transition-all duration-300 hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <IconComponent className={`w-4 h-4 text-${skill.color} flex-shrink-0`} />
                  <span className={`text-${skill.color} text-sm font-medium`}>
                    {area}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className={`w-5 h-5 text-${skill.color}`} />
            <h4 className="text-white font-bold text-lg">Core Technologies</h4>
            <div className={`h-px flex-1 bg-gradient-to-r from-${skill.color}/50 to-transparent`} />
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            {skill.keyTech.slice(0, 6).map((tech, index) => (
              <TechBadge
                key={tech}
                tech={tech}
                color={skill.color}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Hover Effect Border */}
      <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${skill.color}/30 transition-all duration-500`}>
        <div className={`absolute inset-0 rounded-3xl border border-${skill.color}/20 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </div>
    </div>
  );
};

export default SkillDetail;
