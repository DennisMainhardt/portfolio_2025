"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { ExperienceCard } from "./experience/ExperienceCard";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const timelineProgress = useMotionValue(0);
  const markerTop = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);
  const timelineClipPath = useTransform(
    timelineProgress,
    (value) => `inset(0 0 ${100 - value * 100}% 0)`
  );
  const markerColor = useTransform(
    timelineProgress,
    [0, 0.5, 1],
    ["#00D9FF", "#9D4EDD", "#39FF14"]
  );
  const markerGlow = useMotionTemplate`0 0 20px ${markerColor}`;

  const experiences = [
    {
      id: 3,
      title: "Software Engineer",
      company: "SOPTIM AG",
      location: "Remote, Germany",
      period: "Sep. 2025 - Today",
      type: "Full-time",
      description: "Developing and maintaining cloud-based web applications for the energy industry using TypeScript across frontend and backend.",
      achievements: [
        "Built frontend applications with React, Next.js, and TypeScript, focusing on performance and usability",
        "Implementing backend services and APIs on AWS using TypeScript",
        "Collaborating with cross-functional teams to deliver reliable production systems",
      ],
      technologies: ["React", "TypeScript", "Next.js", "REST APIs", "AWS", "Material UI"],
      companyUrl: "https://www.soptim.de/en/"
    },
    {
      id: 1,
      title: "Jr. Front-End Developer",
      company: "publicplan GmbH",
      location: "Remote, Germany",
      period: "Jul. 2022 - Mar. 2025",
      type: "Full-time",
      description: "Developed web applications for German government digital transformation projects using React, TypeScript, and Next.js. Focused on accessibility compliance and responsive design in regulated environments.",
      achievements: [
        "Implemented responsive interfaces using React, TypeScript, Next.js, and modern CSS frameworks",
        "Contributed to digital transformation initiatives serving German citizens",
        "Collaborated with cross-functional teams including designers and government stakeholders",
      ],
      technologies: ["React", "TypeScript", "Next.js", "REST APIs", "GraphQL"],
      companyUrl: "https://www.publicplan.de/"
    },
    {
      id: 2,
      title: "Apprenticeship: Web Development",
      company: "publicplan GmbH",
      location: "Remote, Germany",
      period: "Oct. 2020 - Jun.2022",
      type: "Full-time",
      description: "Started professional development journey specializing in government digital transformation projects. Learned React, TypeScript, and modern web development while working on citizen-facing applications.",
      achievements: [
        "Completed Fachinformatiker Anwendungsentwicklung certification through IHK Düsseldorf",
        "Learned React ecosystem and TypeScript",
        "Worked on accessibility-compliant web applications following WCAG standards",
      ],
      technologies: ["React", "JavaScript", "TypeScript", "Next.js", "HTML", "CSS", "GraphQL", "REST APIs", "CI/CD"],
      companyUrl: "https://www.publicplan.de/"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      timelineProgress.set(0);
      return;
    }

    let frame: number | null = null;
    const updateTimelineProgress = () => {
      const timelineElement = timelineRef.current;
      if (!timelineElement) return;

      const rect = timelineElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const startOffset = viewportHeight * 0.75;
      const endOffset = viewportHeight * 0.3;
      const totalDistance = rect.height + startOffset - endOffset;
      const rawProgress = totalDistance <= 0 ? 0 : (startOffset - rect.top) / totalDistance;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      timelineProgress.set(clamped);
    };

    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateTimelineProgress();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    const resizeObserver = new ResizeObserver(scheduleUpdate);
    if (timelineRef.current) {
      resizeObserver.observe(timelineRef.current);
    }

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      resizeObserver.disconnect();
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [isMobile, timelineProgress]);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Professional Experience
          </h2>

          <p className={`text-lg text-white/80 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            My journey in Front-End Development
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div ref={timelineRef} className="relative">
            {/* Timeline Line */}
            {!isMobile && (
              <>
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-white/10 pointer-events-none" />
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-electric-blue via-plasma-violet to-neon-green pointer-events-none"
                  style={{ clipPath: timelineClipPath }}
                />
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border border-deep-black pointer-events-none z-20"
                  style={{
                    top: markerTop,
                    x: "-50%",
                    y: "-50%",
                    backgroundColor: markerColor,
                    boxShadow: markerGlow,
                  }}
                />
              </>
            )}

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={index}
                isVisible={isVisible}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
