
import {
  LucideIcon, Star, TrendingUp, Target, Zap, Code, Database, Palette, Users,
  Component, Settings, Eye, Smartphone, Brain, MessageSquare, Sparkles,
  FolderOpen, Server, Shield, Lock, GitBranch, TestTube, FileCheck, UserCheck
} from "lucide-react";
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
    "Frontend Mastery": {
      specialization: "React + TypeScript applications",
      focusAreas: ["React Components", "State Management", "UI/UX", "Responsive Design"],
      icons: [Component, Settings, Eye, Smartphone]
    },
    "AI Integration": {
      specialization: "Intelligent User Experiences",
      focusAreas: ["LLM Integration", "Prompt Engineering", "AI-Powered Features", "Context Management"],
      icons: [Brain, MessageSquare, Sparkles, FolderOpen]
    },
    "Full-Stack Vision": {
      specialization: "Building complete applications",
      focusAreas: ["API Development", "Database Integration", "Authentication", "Backend Logic"],
      icons: [Server, Database, Shield, Code]
    },
    "Professional Workflow": {
      specialization: "Professional development standards",
      focusAreas: ["Code Review", "Version Control", "Testing Practices", "Team Collaboration"],
      icons: [FileCheck, GitBranch, TestTube, UserCheck]
    }
  };

  return skillContent[title as keyof typeof skillContent] || skillContent["Frontend Mastery"];
};

const SkillDetail = ({ skill, isVisible }: SkillDetailProps) => {
  const Icon = skill.icon;
  const content = getSkillSpecificContent(skill.title);

  const getBackgroundClasses = () => {
    switch (skill.color) {
      case 'electric-blue':
        return 'bg-gradient-to-br from-electric-blue/10 via-electric-blue/5 to-transparent border-electric-blue/30';
      case 'plasma-violet':
        return 'bg-gradient-to-br from-plasma-violet/10 via-plasma-violet/5 to-transparent border-plasma-violet/30';
      case 'neon-green':
        return 'bg-gradient-to-br from-neon-green/10 via-neon-green/5 to-transparent border-neon-green/30';
      case 'yellow-400':
        return 'bg-gradient-to-br from-yellow-400/10 via-yellow-400/5 to-transparent border-yellow-400/30';
      default:
        return 'bg-gradient-to-br from-white/5 via-white/2 to-transparent border-white/10';
    }
  };

  const getShadowClasses = () => {
    switch (skill.color) {
      case 'electric-blue':
        return 'shadow-lg shadow-electric-blue/20';
      case 'plasma-violet':
        return 'shadow-lg shadow-plasma-violet/20';
      case 'neon-green':
        return 'shadow-lg shadow-neon-green/20';
      case 'yellow-400':
        return 'shadow-lg shadow-yellow-400/20';
      default:
        return 'shadow-none';
    }
  };

  const getBorderClasses = () => {
    switch (skill.color) {
      case 'electric-blue':
        return 'border-electric-blue/50';
      case 'plasma-violet':
        return 'border-plasma-violet/50';
      case 'neon-green':
        return 'border-neon-green/50';
      case 'yellow-400':
        return 'border-yellow-400/50';
      default:
        return 'border-white/10';
    }
  };

  const getAnimatedBorderClasses = () => {
    switch (skill.color) {
      case 'electric-blue':
        return 'border-electric-blue animate-pulse';
      case 'plasma-violet':
        return 'border-plasma-violet animate-pulse';
      case 'neon-green':
        return 'border-neon-green animate-pulse';
      case 'yellow-400':
        return 'border-yellow-400 animate-pulse';
      default:
        return 'border-white animate-pulse';
    }
  };

  return (
    <div className="relative overflow-hidden group h-full flex flex-col transition-all duration-500 hover:scale-[1.02]">
      {/* Enhanced Background matching SkillPath style */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${getBackgroundClasses()} border backdrop-blur-sm`} />

      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${getShadowClasses()}`} />

      {/* Particle Field Background */}
      <ParticleField isVisible={isVisible} color={skill.color} />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Header Section */}
        <div className="mb-6">
          <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br from-${skill.color}/20 to-${skill.color}/10 shadow-2xl shadow-${skill.color}/20 mb-6 relative group-hover:scale-105 transition-transform duration-300`}>
            <Icon className={`w-12 h-12 text-${skill.color}`} />
            <div className={`absolute inset-0 rounded-2xl bg-${skill.color}/10 blur-xl group-hover:bg-${skill.color}/20 transition-all duration-300`} />
          </div>

          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
            {skill.title}
          </h3>

          <p className={`text-${skill.color} font-semibold text-lg mb-2 leading-relaxed`}>
            {content.specialization}
          </p>
        </div>

        {/* Current Focus Areas */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Target className={`w-5 h-5 text-${skill.color}`} />
            <h4 className="text-white font-bold text-lg">Focus Areas</h4>
            <div className={`h-px flex-1 bg-gradient-to-r from-${skill.color}/50 to-transparent`} />
          </div>

          <div className="grid grid-cols-2 gap-3 mb-3">
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
        <div className="flex-1">
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

      {/* Animated Border matching SkillPath style */}
      <div className={`absolute inset-0 rounded-2xl border-2 ${getBorderClasses()}`}>
        <div className={`absolute inset-0 rounded-2xl border ${getAnimatedBorderClasses()}`} />
      </div>
    </div>
  );
};

export default SkillDetail;
