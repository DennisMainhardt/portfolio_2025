
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
  onCollapse: () => void;
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

const SkillDetail = ({ skill, isVisible, onCollapse }: SkillDetailProps) => {
  const Icon = skill.icon;
  const content = getSkillSpecificContent(skill.title);

  const getColorClasses = (color: string) => {
    switch (color) {
      case "electric-blue":
        return {
          text: "text-electric-blue",
          bg: "bg-electric-blue/10",
          separator: "from-electric-blue/30 via-electric-blue/10 to-transparent"
        };
      case "plasma-violet":
        return {
          text: "text-plasma-violet",
          bg: "bg-plasma-violet/10",
          separator: "from-plasma-violet/30 via-plasma-violet/10 to-transparent"
        };
      case "neon-green":
        return {
          text: "text-neon-green",
          bg: "bg-neon-green/10",
          separator: "from-neon-green/30 via-neon-green/10 to-transparent"
        };
      case "yellow-400":
        return {
          text: "text-yellow-400",
          bg: "bg-yellow-400/10",
          separator: "from-yellow-400/30 via-yellow-400/10 to-transparent"
        };
      default:
        return {
          text: "text-white",
          bg: "bg-white/10",
          separator: "from-white/10 via-white/5 to-transparent"
        };
    }
  };

  const colorClasses = getColorClasses(skill.color);

  return (
    <div
      className="pt-2 pb-6 cursor-pointer"
      onClick={onCollapse}
      title="Click to collapse"
      style={{ contain: "layout" }}
    >
      <div className="pt-2 pb-6 px-4 sm:px-6">
        <div className={`h-px mx-0 sm:mx-6 mb-6 bg-gradient-to-r ${colorClasses.separator}`} />
        <div className="space-y-6">
          {/* Focus Areas */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Target
                className={`w-4 h-4 ${colorClasses.text}`}
                style={{ width: "16px", height: "16px", flexShrink: 0 }}
              />
              <h4 className="text-white font-bold text-base">Focus Areas</h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {content.focusAreas.map((area, index) => {
                const IconComponent = content.icons[index] || Target;
                return (
                  <div
                    key={area}
                    className="flex items-center gap-3 p-2 sm:p-3 rounded-lg bg-black/20 border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all"
                  >
                    <div
                      className={`flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full ${colorClasses.bg}`}
                      style={{ minWidth: "28px", minHeight: "28px" }}
                    >
                      <IconComponent
                        className={`w-4 h-4 ${colorClasses.text}`}
                        style={{ width: "16px", height: "16px" }}
                      />
                    </div>
                    <span className="text-white/90 font-medium text-sm sm:text-base">
                      {area}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Core Technologies */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <TrendingUp
                className={`w-4 h-4 ${colorClasses.text}`}
                style={{ width: "16px", height: "16px", flexShrink: 0 }}
              />
              <h4 className="text-white font-bold text-base">Core Technologies</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.keyTech.slice(0, 6).map((tech) => (
                <TechBadge key={tech} tech={tech} color={skill.color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
