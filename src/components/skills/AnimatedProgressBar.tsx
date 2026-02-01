"use client";


import { useEffect, useState } from 'react';

interface AnimatedProgressBarProps {
  isVisible: boolean;
  color: string;
  targetValue: number;
  duration?: number;
}

const AnimatedProgressBar = ({ 
  isVisible, 
  color, 
  targetValue, 
  duration = 2000 
}: AnimatedProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      return;
    }

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progressPercent, 3);
      const currentValue = easeOutCubic * targetValue;
      
      setProgress(currentValue);
      
      if (progressPercent < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    // Small delay for better visual effect
    const timeout = setTimeout(animate, 300);
    
    return () => clearTimeout(timeout);
  }, [isVisible, targetValue, duration]);

  return (
    <div className="relative">
      <div className="h-4 bg-white/10 rounded-full overflow-hidden relative">
        {/* Background pulse */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />
        
        {/* Progress fill */}
        <div 
          className={`h-full bg-gradient-to-r from-${color} via-${color}/90 to-${color}/70 rounded-full transition-all duration-300 ease-out relative overflow-hidden`}
          style={{ width: `${progress}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          
          {/* Moving highlight */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"
            style={{ animationDelay: '1s' }}
          />
        </div>
        
        {/* Glow effect */}
        <div 
          className={`absolute inset-0 rounded-full bg-${color}/30 blur-sm opacity-50 transition-opacity duration-500`}
          style={{ 
            width: `${progress}%`,
            opacity: isVisible ? 0.3 : 0 
          }}
        />
      </div>
      
      {/* Growth Journey milestones */}
      <div className="flex justify-between mt-3 text-xs">
        {['Curious', 'Building', 'Shipping', 'Innovating'].map((milestone, index) => (
          <div
            key={milestone}
            className={`transition-all duration-500 ${
              progress >= (index + 1) * 20 
                ? `text-${color} font-semibold` 
                : 'text-white/50'
            }`}
            style={{ animationDelay: `${index * 200 + 800}ms` }}
          >
            {milestone}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedProgressBar;
