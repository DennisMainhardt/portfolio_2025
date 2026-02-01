"use client";

import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { ExperienceCard } from "./experience/ExperienceCard";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isTimelineVisible, setTimelineVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const experiences = [
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
          setTimelineVisible(true);
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
          <div className="relative">
            {/* Timeline Line */}
            {!isMobile && (
              <div
                className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-electric-blue via-plasma-violet to-neon-green transition-all duration-1000 ease-in-out"
                style={{ height: isTimelineVisible ? '100%' : '0%' }}
              />
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
