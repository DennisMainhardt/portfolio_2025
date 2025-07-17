import { useEffect, useRef, useState } from 'react';
import { Fireworks } from '@fireworks-js/react';
import { motion } from 'framer-motion';

// Mobile detection utility
const isMobile = () => {
  return typeof window !== 'undefined' && (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
    window.innerWidth <= 768
  );
};

interface PortfolioFireworksProps {
  isActive: boolean;
  onComplete?: () => void;
}

const PortfolioFireworks: React.FC<PortfolioFireworksProps> = ({ isActive, onComplete }) => {
  const fireworksRef = useRef<{ start: () => void; stop: () => void } | null>(null);
  const [opacity, setOpacity] = useState(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    setMobile(isMobile());
  }, []);

  useEffect(() => {
    const fireworksInstance = fireworksRef.current;

    if (isActive && fireworksInstance) {
      // Smooth fade-in sequence
      setBackgroundOpacity(1); // Background fades in immediately

      // Start fireworks slightly after background appears
      setTimeout(() => {
        setOpacity(1);
        fireworksInstance.start();
      }, 200);

      // Start fade out after 4 seconds
      const fadeTimer = setTimeout(() => {
        setOpacity(0);
        setBackgroundOpacity(0);
      }, 4000);

      // Stop fireworks after 5.5 seconds (allowing fade out time)
      const stopTimer = setTimeout(() => {
        fireworksInstance.stop();
        if (onComplete) {
          onComplete();
        }
      }, 5500);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(stopTimer);
        if (fireworksInstance) {
          fireworksInstance.stop();
        }
      };
    } else if (!isActive) {
      // Reset opacity when not active
      setOpacity(0);
      setBackgroundOpacity(0);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Dark overlay with smooth fade-in */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto cursor-default"
        animate={{
          opacity: backgroundOpacity,
          transition: {
            duration: backgroundOpacity === 0 ? 1.5 : 0.4,
            ease: "easeInOut"
          }
        }}
      />

      {/* Fireworks layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 10 }}
        animate={{
          opacity: opacity,
          transition: {
            duration: opacity === 0 ? 1.5 : 0.2,
            ease: "easeOut"
          }
        }}
      >
        <Fireworks
          ref={fireworksRef}
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            },
            hue: {
              min: 90,
              max: 300
            },
            delay: {
              min: 15,
              max: 30
            },
            acceleration: 1.009,
            friction: 0.98,
            gravity: 1.5,
            particles: mobile ? 60 : 150, // Reduced particles for mobile
            trace: mobile ? 2 : 4,         // Shorter traces for mobile
            explosion: mobile ? 4 : 8,     // Smaller explosions for mobile
            intensity: mobile ? 20 : 50,   // Lower intensity for mobile
            flickering: 25,
            lineStyle: 'round',
            lineWidth: {
              explosion: {
                min: 1,
                max: 2
              },
              trace: {
                min: 1,
                max: 1.5
              }
            },
            brightness: {
              min: 50,
              max: 80
            },
            saturation: {
              min: 80,
              max: 100
            },
            decay: {
              min: 0.015,
              max: 0.03
            },
            mouse: {
              click: false,
              move: false,
              max: 1
            }
          }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute',
            background: 'transparent'
          }}
        />
      </motion.div>
    </div>
  );
};

export default PortfolioFireworks;