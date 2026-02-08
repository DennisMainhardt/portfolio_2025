"use client";

import { useState, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import {
  ChevronDown,
  ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  Building,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "../../lib/utils";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  companyUrl: string;
}

interface ExperienceCardProps {
  exp: Experience;
  index: number;
  isVisible: boolean;
  isMobile: boolean;
}

type TiltMoveEvent = {
  tiltAngleX: number;
  tiltAngleY: number;
  tiltAngleXPercentage: number;
  tiltAngleYPercentage: number;
  glareAngle: number;
  glareOpacity: number;
  event: MouseEvent;
}

export const ExperienceCard = ({ exp, index, isVisible, isMobile }: ExperienceCardProps) => {
  const [isExpanded, setExpanded] = useState(index === 0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: -100, y: -100 });

  const handleMove = (e: TiltMoveEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.event.clientX - rect.left;
    const y = e.event.clientY - rect.top;
    cardRef.current.style.setProperty('--mx', `${x}px`);
    cardRef.current.style.setProperty('--my', `${y}px`);
  };

  if (isMobile) {
    return (
      <motion.div
        className="relative mb-4 last:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
      >
        <div
          className={cn(
            "cursor-pointer overflow-hidden rounded-xl border transition-all duration-300",
            isExpanded
              ? "border-plasma-violet/50 shadow-[0_0_20px_rgba(157,78,221,0.2)]"
              : "border-white/10"
          )}
          onClick={() => setExpanded(!isExpanded)}
        >
          <div className="p-6">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl font-bold text-white leading-tight">
                {exp.title}
              </h3>
              <div className="flex-shrink-0 flex items-center pt-1">
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-white/70 transition-colors",
                      isExpanded && "text-plasma-violet"
                    )}
                  />
                </motion.div>
              </div>
            </div>
            <div className="space-y-3 text-sm mt-4">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-plasma-violet hover:text-electric-blue transition-colors w-fit"
                onClick={(e) => e.stopPropagation()}
              >
                <Building size={16} />
                <span>{exp.company}</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
              <p className="flex items-center gap-2 text-yellow-400">
                <MapPin size={16} />
                <span>{exp.location}</span>
              </p>
              <p className="flex items-center gap-2 text-neon-green">
                <Calendar size={16} />
                <span>{exp.period}</span>
              </p>
              <div className="flex items-center gap-2">
                <Briefcase
                  size={16}
                  className={cn(
                    "transition-colors",
                    isExpanded ? "text-electric-blue" : "text-white/70"
                  )}
                />
                <Badge
                  className={cn(
                    "shrink-0 border-none text-xs transition-colors",
                    isExpanded
                      ? "bg-electric-blue/20 text-electric-blue"
                      : "bg-white/10 text-white/70"
                  )}
                >
                  {exp.type}
                </Badge>
              </div>
            </div>
          </div>
          <div className="px-6 pb-2">
            <motion.div
              className="h-0.5 bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green"
              initial={{ width: 0 }}
              animate={{ width: isExpanded ? "100%" : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-white/10 p-6">
                  <p className="text-white/80 mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon-green mt-1 shrink-0">
                          ▹
                        </span>
                        <span className="text-white/70">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-white/5 border border-white/10 text-white/70"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }

  const containerClasses = `relative mb-12 transition-all duration-700 ease-out ${isVisible
    ? 'opacity-100 translate-x-0 scale-100 rotate-0'
    : 'opacity-0 translate-x-10 scale-95 -rotate-1'
    } ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`;

  const contentContainerClasses = `glass-card-interactive glass-card p-6 rounded-2xl transition-all duration-300 w-full`;

  return (
    <div
      className={containerClasses}
      style={{ transitionDelay: `${400 + index * 150}ms` }}
    >
      <Tilt
        onMove={handleMove}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        transitionSpeed={400}
        className="relative cursor-default z-10 group block md:inline-block text-left ml-12 md:ml-0 md:w-[calc(50%-2rem)]"
      >
        <div ref={cardRef} className={contentContainerClasses}>
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-plasma-violet/50 rounded-2xl transition-all duration-300 pointer-events-none" />
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-white">{exp.title}</h3>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-white/80 mb-2">
              <div className="flex items-center gap-1">
                <ExternalLink className="h-4 w-4" />
                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-plasma-violet hover:underline">
                  {exp.company}
                </a>
              </div>
              <div className="flex items-center gap-1 text-yellow-400">
                <MapPin className="h-4 w-4" />
                <span>{exp.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-neon-green">
              <Calendar className="h-4 w-4" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Briefcase size={16} className="text-electric-blue" />
              <Badge className="bg-electric-blue/20 text-electric-blue border-none text-xs">
                {exp.type}
              </Badge>
            </div>
          </div>

          <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <p className="text-white/70 mb-4 leading-relaxed pt-4">{exp.description}</p>
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white/70 text-sm flex items-start">
                      <span className="text-electric-blue mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs hover:bg-plasma-violet/20 hover:text-plasma-violet transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!isExpanded)}
            className="mt-4 text-sm font-semibold text-electric-blue hover:text-white hover:bg-electric-blue/20 border-2 border-electric-blue/50 hover:border-electric-blue rounded-lg px-4 py-2 transition-all duration-300"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </Tilt>
    </div>
  );
};
