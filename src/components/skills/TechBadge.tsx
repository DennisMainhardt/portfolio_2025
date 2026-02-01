"use client";


import { LucideIcon } from "lucide-react";
import {
  Code2,
  Zap,
  GitBranch,
  Users,
  Database,
  Palette,
  Brain,
  Rocket,
  Globe,
  Terminal,
  Layers,
  Shield,
  Cloud,
  Smartphone
} from "lucide-react";

interface TechBadgeProps {
  tech: string;
  color: string;
}

const getTechIcon = (tech: string): LucideIcon => {
  const techLower = tech.toLowerCase();

  if (techLower.includes('react') || techLower.includes('next')) return Code2;
  if (techLower.includes('typescript') || techLower.includes('javascript')) return Terminal;
  if (techLower.includes('tailwind') || techLower.includes('css')) return Palette;
  if (techLower.includes('firebase') || techLower.includes('database')) return Database;
  if (techLower.includes('api') || techLower.includes('rest') || techLower.includes('graphql')) return Globe;
  if (techLower.includes('git')) return GitBranch;
  if (techLower.includes('ci/cd') || techLower.includes('testing')) return Shield;
  if (techLower.includes('agile') || techLower.includes('scrum')) return Users;
  if (techLower.includes('serverless') || techLower.includes('cloud')) return Cloud;
  if (techLower.includes('openai') || techLower.includes('claude') || techLower.includes('ai')) return Brain;
  if (techLower.includes('prompt')) return Zap;
  if (techLower.includes('llm') || techLower.includes('integration')) return Layers;
  if (techLower.includes('mobile') || techLower.includes('responsive')) return Smartphone;

  return Rocket; // Default icon
};

const TechBadge = ({ tech, color }: TechBadgeProps) => {
  const Icon = getTechIcon(tech);
  
  const getColorClass = (color: string) => {
    switch (color) {
      case "electric-blue": return "text-electric-blue";
      case "plasma-violet": return "text-plasma-violet";
      case "neon-green": return "text-neon-green";
      case "yellow-400": return "text-yellow-400";
      default: return "text-white";
    }
  };

  return (
    <div
      className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-black/20 border border-white/10 hover:border-white/20 hover:bg-black/30 transition-all"
    >
      <Icon 
        className={`w-4 h-4 ${getColorClass(color)}`} 
        style={{ width: "16px", height: "16px", flexShrink: 0 }}
      />
      <span className="text-white/90 font-medium text-base">{tech}</span>
    </div>
  );
};

export default TechBadge;
