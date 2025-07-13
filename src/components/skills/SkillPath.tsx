
import { LucideIcon } from "lucide-react";

interface SkillPathProps {
  path: {
    icon: LucideIcon;
    title: string;
    subtitle: string;
    description: string;
    color: string;
  };
  index: number;
  isActive: boolean;
  onClick: () => void;
}

const SkillPath = ({ path, index, isActive, onClick }: SkillPathProps) => {
  const Icon = path.icon;
  
  // Helper function to get background classes based on color and active state
  const getBackgroundClasses = () => {
    if (!isActive) {
      return 'bg-gradient-to-br from-white/5 via-white/2 to-transparent border-white/10 hover:border-white/20';
    }
    
    switch (path.color) {
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
    if (!isActive) {
      return 'shadow-none group-hover:shadow-lg group-hover:shadow-white/10';
    }
    
    switch (path.color) {
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

  const getIconContainerClasses = () => {
    if (!isActive) {
      return 'bg-white/5 group-hover:bg-white/10';
    }
    
    switch (path.color) {
      case 'electric-blue':
        return 'bg-electric-blue/20 shadow-lg shadow-electric-blue/20';
      case 'plasma-violet':
        return 'bg-plasma-violet/20 shadow-lg shadow-plasma-violet/20';
      case 'neon-green':
        return 'bg-neon-green/20 shadow-lg shadow-neon-green/20';
      case 'yellow-400':
        return 'bg-yellow-400/20 shadow-lg shadow-yellow-400/20';
      default:
        return 'bg-white/5';
    }
  };

  const getTextColor = () => {
    if (!isActive) {
      return 'text-white group-hover:text-white';
    }
    
    switch (path.color) {
      case 'electric-blue':
        return 'text-electric-blue';
      case 'plasma-violet':
        return 'text-plasma-violet';
      case 'neon-green':
        return 'text-neon-green';
      case 'yellow-400':
        return 'text-yellow-400';
      default:
        return 'text-white';
    }
  };

  const getSubtitleColor = () => {
    if (!isActive) {
      return 'text-white/50 group-hover:text-white/70';
    }
    
    switch (path.color) {
      case 'electric-blue':
        return 'text-electric-blue/80';
      case 'plasma-violet':
        return 'text-plasma-violet/80';
      case 'neon-green':
        return 'text-neon-green/80';
      case 'yellow-400':
        return 'text-yellow-400/80';
      default:
        return 'text-white/50';
    }
  };

  const getIconColor = () => {
    if (!isActive) {
      return 'text-white/60 group-hover:text-white/80';
    }
    
    switch (path.color) {
      case 'electric-blue':
        return 'text-electric-blue';
      case 'plasma-violet':
        return 'text-plasma-violet';
      case 'neon-green':
        return 'text-neon-green';
      case 'yellow-400':
        return 'text-yellow-400';
      default:
        return 'text-white/60';
    }
  };

  const getArrowColor = () => {
    if (!isActive) {
      return 'text-white/30 group-hover:text-white/60 group-hover:translate-x-1';
    }
    
    switch (path.color) {
      case 'electric-blue':
        return 'text-electric-blue translate-x-0';
      case 'plasma-violet':
        return 'text-plasma-violet translate-x-0';
      case 'neon-green':
        return 'text-neon-green translate-x-0';
      case 'yellow-400':
        return 'text-yellow-400 translate-x-0';
      default:
        return 'text-white/30 translate-x-0';
    }
  };

  const getBorderClasses = () => {
    if (!isActive) return '';
    
    switch (path.color) {
      case 'electric-blue':
        return 'border-electric-blue/50';
      case 'plasma-violet':
        return 'border-plasma-violet/50';
      case 'neon-green':
        return 'border-neon-green/50';
      case 'yellow-400':
        return 'border-yellow-400/50';
      default:
        return '';
    }
  };

  const getAnimatedBorderClasses = () => {
    if (!isActive) return '';
    
    switch (path.color) {
      case 'electric-blue':
        return 'border-electric-blue animate-pulse';
      case 'plasma-violet':
        return 'border-plasma-violet animate-pulse';
      case 'neon-green':
        return 'border-neon-green animate-pulse';
      case 'yellow-400':
        return 'border-yellow-400 animate-pulse';
      default:
        return '';
    }
  };
  
  return (
    <div
      className={`group cursor-pointer relative overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
        isActive ? 'z-10' : 'hover:z-10'
      }`}
      onClick={onClick}
      style={{
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Enhanced Background with Gradient */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${getBackgroundClasses()} border backdrop-blur-sm`} />
      
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${getShadowClasses()}`} />
      
      {/* Content */}
      <div className="relative p-10">
        <div className="flex items-start gap-6">
          {/* Enhanced Icon Container */}
          <div className={`relative p-4 rounded-xl transition-all duration-300 ${getIconContainerClasses()}`}>
            <Icon className={`w-7 h-7 transition-all duration-300 ${getIconColor()}`} />
            
            {/* Icon Glow */}
            {isActive && (
              <div className={`absolute inset-0 rounded-xl ${getIconContainerClasses()} blur-md`} />
            )}
          </div>
          
          {/* Text Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <h3 className={`text-xl font-bold transition-all duration-300 ${getTextColor()}`}>
                {path.title}
              </h3>
              
              {/* Active Indicator */}
              {isActive && !['Frontend Mastery', 'Full-Stack Vision'].includes(path.title) && (
                <div className={`w-2 h-2 ${getTextColor().replace('text-', 'bg-')} rounded-full animate-pulse`} />
              )}
            </div>
            
            <p className={`text-sm font-medium mb-4 transition-all duration-300 ${getSubtitleColor()}`}>
              {path.subtitle}
            </p>
            
            <p className={`text-sm leading-relaxed transition-all duration-300 ${
              isActive ? 'text-white/90' : 'text-white/70 group-hover:text-white/90'
            }`}>
              {path.description}
            </p>
          </div>

          {/* Arrow Indicator */}
          <div className={`transition-all duration-300 ${getArrowColor()}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      {isActive && (
        <div className={`absolute inset-0 rounded-2xl border-2 ${getBorderClasses()}`}>
          <div className={`absolute inset-0 rounded-2xl border ${getAnimatedBorderClasses()}`} />
        </div>
      )}
    </div>
  );
};

export default SkillPath;
