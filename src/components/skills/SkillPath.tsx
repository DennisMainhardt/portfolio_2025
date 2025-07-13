
import { ChevronDown, LucideIcon } from "lucide-react";

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
      return "text-white/30 group-hover:text-white/60";
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
        return "text-white/30";
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

  const getActiveColorWithOpacity = (inactiveClass: string, activeClass: string) => {
    if (isActive) {
      return activeClass.replace('{color}', path.color);
    }
    return inactiveClass;
  };

  return (
    <div className="group cursor-pointer p-6" onClick={onClick}>
      <div className="flex items-start gap-5">
        <div
          className={`relative p-3 rounded-xl transition-all duration-300
            ${isActive ? `shadow-lg shadow-${path.color}/25` : ""}
            bg-black/20`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-70 rounded-xl" />
          <Icon
            className={`relative w-7 h-7 transition-colors duration-300
              ${getActiveColorWithOpacity(
              "text-white/60 group-hover:text-white",
              "text-{color}"
            )}`}
          />
        </div>

        <div className="flex-1 min-w-0 pt-1">
          <h3
            className={`text-xl font-bold transition-colors duration-300 ${getActiveColorWithOpacity(
              "text-white group-hover:text-white",
              "text-{color}"
            )}`}
          >
            {path.title}
          </h3>
          <p
            className={`text-base font-medium transition-all duration-300 mt-1.5 ${getSubtitleColor()}`}
          >
            {path.subtitle}
          </p>
        </div>

        <div
          className={`transition-transform duration-300 pt-1 ${isActive ? "rotate-180" : ""
            }`}
        >
          <ChevronDown
            className={`w-6 h-6 transition-colors duration-300 ${getActiveColorWithOpacity(
              "text-white/30 group-hover:text-white/60",
              "text-{color}"
            )}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillPath;


