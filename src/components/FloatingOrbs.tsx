"use client";


import { useEffect, useState } from "react";

const FloatingOrbs = () => {
  const [orbs, setOrbs] = useState<Array<{ id: number; x: number; y: number; size: number; color: string; duration: number }>>([]);

  useEffect(() => {
    const createOrbs = () => {
      const colors = ['#00D9FF', '#9D4EDD', '#39FF14'];
      const newOrbs = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 200 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 10 + 8,
      }));
      setOrbs(newOrbs);
    };

    createOrbs();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="floating-orb opacity-20"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, ${orb.color}40 0%, transparent 70%)`,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.id * 1.5}s`,
          }}
        />
      ))}
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-plasma-violet/5" />
    </div>
  );
};

export default FloatingOrbs;
