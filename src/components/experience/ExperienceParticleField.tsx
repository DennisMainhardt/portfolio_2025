"use client";


import { useRef, useEffect, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';

interface ExperienceParticleFieldProps {
  className?: string;
}

const ExperienceParticleField = ({ className }: ExperienceParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const particleCount = isMobile ? 30 : 50;

  const colors = ["#FFFFFF", "#CCCCCC", "#999999"];

  class Particle {
    x: number;
    y: number;
    size: number;
    baseX: number;
    baseY: number;
    density: number;
    color: string;

    constructor(x: number, y: number, canvasWidth: number, canvasHeight: number) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 1.5 + 0.5;
      this.baseX = this.x;
      this.baseY = this.y;
      this.density = (Math.random() * 30) + 1;
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    draw(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }

    update(mouseX: number, mouseY: number) {
      const dx = mouseX - this.x;
      const dy = mouseY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = 50; // Reduced from 100 to 50
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density * 0.1;
      const directionY = forceDirectionY * force * this.density * 0.1;

      if (distance < maxDistance) {
        this.x -= directionX;
        this.y -= directionY;
      } else {
        if (this.x !== this.baseX) {
          const dx = this.x - this.baseX;
          this.x -= dx / 20;
        }
        if (this.y !== this.baseY) {
          const dy = this.y - this.baseY;
          this.y -= dy / 20;
        }
      }
    }
  }

  const init = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const container = containerRef.current;
    if (!container) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = container.offsetWidth * dpr;
    canvas.height = container.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(
        Math.random() * canvas.width / dpr,
        Math.random() * canvas.height / dpr,
        canvas.width / dpr,
        canvas.height / dpr
      ));
    }
  }, [particleCount]);

  const animate = useCallback((ctx: CanvasRenderingContext2D, mouse: { x: number; y: number; }, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesRef.current.length; i++) {
      particlesRef.current[i].update(mouse.x, mouse.y);
      particlesRef.current[i].draw(ctx);
    }
    animationFrameId.current = requestAnimationFrame(() => animate(ctx, mouse, canvas));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    init(canvas, ctx);
    animate(ctx, mouse, canvas);

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const resizeObserver = new ResizeObserver(() => {
      init(canvas, ctx);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [init, animate, isMobile]);

  return (
    <div ref={containerRef} className={`absolute inset-0 -z-10 ${className}`}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default ExperienceParticleField;
