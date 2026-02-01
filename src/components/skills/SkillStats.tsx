"use client";


import { Target, Zap, Award, Lightbulb } from "lucide-react";

interface SkillStatsProps {
  isVisible: boolean;
}

const SkillStats = ({ isVisible }: SkillStatsProps) => {
  const stats = [
    { 
      label: "Tech Diversity", 
      value: "20+", 
      color: "electric-blue",
      icon: Target,
      description: "Technologies Explored"
    },
    { 
      label: "Learning Velocity", 
      value: "🚀", 
      color: "plasma-violet",
      icon: Zap,
      description: "Rapid Skill Acquisition"
    },
    { 
      label: "Project Variety", 
      value: "15+", 
      color: "neon-green",
      icon: Award,
      description: "Diverse Applications Built"
    },
    { 
      label: "Innovation Focus", 
      value: "💡", 
      color: "yellow-400",
      icon: Lightbulb,
      description: "Creative Problem Solving"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div 
            key={stat.label}
            className="group relative"
            style={{
              animationDelay: `${index * 200}ms`
            }}
          >
            {/* Card Background */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group-hover:scale-105 relative overflow-hidden">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${stat.color}/5 via-transparent to-${stat.color}/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-${stat.color}/10 mb-4 group-hover:bg-${stat.color}/20 transition-all duration-300`}>
                  <IconComponent className={`w-6 h-6 text-${stat.color}`} />
                </div>
                
                {/* Value */}
                <div className={`text-3xl font-bold text-${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                
                {/* Label */}
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-white/60 text-sm">
                  {stat.description}
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>

            {/* Floating Glow */}
            <div className={`absolute inset-0 rounded-2xl bg-${stat.color}/20 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10`} />
          </div>
        );
      })}
    </div>
  );
};

export default SkillStats;
