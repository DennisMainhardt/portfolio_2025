
import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  initial_vx: number;
  initial_vy: number;
  size: number;
  opacity: number;
  color: string;
}

interface ParticleFieldProps {
  isVisible: boolean;
  interactive?: boolean;
}

const ParticleField = ({ isVisible, interactive = true }: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleInteractionMove = (x: number, y: number) => {
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        mouseRef.current.x = x - rect.left;
        mouseRef.current.y = y - rect.top;
      }
    };

    const handleInteractionEnd = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleMouseMove = (event: MouseEvent) => {
      handleInteractionMove(event.clientX, event.clientY);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        handleInteractionMove(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }

      const requiredParticleCount = window.innerWidth < 768 ? 100 : 200;
      if (particlesRef.current.length !== requiredParticleCount) {
        particlesRef.current = createParticles(requiredParticleCount);
      }
    };

    const createParticles = (count: number) => {
      const particles: Particle[] = [];
      const colors = [
        "0, 217, 255",   // electric-blue
        "157, 78, 221",  // plasma-violet
        "57, 255, 20",   // neon-green
        "250, 204, 21",  // yellow-400
      ];

      for (let i = 0; i < count; i++) {
        const initial_vx = (Math.random() - 0.5) * 0.5;
        const initial_vy = (Math.random() - 0.5) * 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: initial_vx,
          vy: initial_vy,
          initial_vx,
          initial_vy,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
      return particles;
    };

    const animate = () => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Mouse interaction
        if (interactive && mouseRef.current.x !== null && mouseRef.current.y !== null) {
          const dx = particle.x - mouseRef.current.x;
          const dy = particle.y - mouseRef.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = 100;
          const force = (maxDistance - distance) / maxDistance;

          if (distance < maxDistance) {
            particle.vx += forceDirectionX * force * 0.1;
            particle.vy += forceDirectionY * force * 0.1;
          }
        }

        // Return to base velocity instead of applying friction
        particle.vx += (particle.initial_vx - particle.vx) * 0.01;
        particle.vy += (particle.initial_vy - particle.vy) * 0.01;

        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color}, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particlesRef.current.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const opacity = (100 - distance) / 100 * 0.1;
            ctx.strokeStyle = `rgba(${particle.color}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('touchmove', handleTouchMove);
      canvas.addEventListener('mouseleave', handleInteractionEnd);
      canvas.addEventListener('touchend', handleInteractionEnd);
    }
    window.addEventListener('resize', resizeCanvas);

    return () => {
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('touchmove', handleTouchMove);
        canvas.removeEventListener('mouseleave', handleInteractionEnd);
        canvas.removeEventListener('touchend', handleInteractionEnd);
      }
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
    />
  );
};

export default ParticleField;
