
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
  index: number;
  isVisible: boolean;
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

const TechBadge = ({ tech, color, index, isVisible }: TechBadgeProps) => {
  const Icon = getTechIcon(tech);
  
  return (
    <div
      className={`group/tech relative overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
        isVisible 
          ? `border-${color}/30 bg-gradient-to-r from-${color}/10 to-${color}/5 hover:from-${color}/15 hover:to-${color}/8` 
          : 'border-white/10 bg-white/5'
      } border rounded-full px-4 py-3 backdrop-blur-sm`}
      style={{
        animationDelay: `${index * 100}ms`,
        boxShadow: isVisible ? `0 4px 20px rgba(${
          color === 'electric-blue' ? '0, 217, 255' :
          color === 'plasma-violet' ? '157, 78, 221' :
          color === 'neon-green' ? '57, 255, 20' : '255, 255, 255'
        }, 0.1)` : 'none'
      }}
    >
      {/* Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/tech:translate-x-[100%] transition-transform duration-1000 rounded-full" />
      
      {/* Content */}
      <div className="relative flex items-center gap-3">
        <div className={`p-2 rounded-lg transition-all duration-300 ${
          isVisible 
            ? `bg-${color}/20` 
            : 'bg-white/10 group-hover/tech:bg-white/20'
        }`}>
          <Icon className={`w-4 h-4 transition-all duration-300 ${
            isVisible ? `text-${color}` : 'text-white/60 group-hover/tech:text-white/80'
          }`} />
        </div>
        
        <span className={`font-semibold text-sm transition-colors duration-300 ${
          isVisible ? `text-${color}` : 'text-white/70 group-hover/tech:text-white/90'
        }`}>
          {tech}
        </span>
        
      </div>

      {/* Glow Effect */}
      {isVisible && (
        <div className={`absolute inset-0 rounded-full bg-${color}/20 blur-md opacity-0 group-hover/tech:opacity-50 transition-opacity duration-300 -z-10`} />
      )}
    </div>
  );
};

export default TechBadge;
