
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Innovation",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Lead frontend development for AI-powered enterprise applications serving 100K+ users. Implemented advanced React patterns and integrated multiple ML models.",
      achievements: [
        "Reduced app load time by 60% through code splitting and optimization",
        "Built reusable component library used across 5 product teams",
        "Integrated GPT-4 for intelligent content generation features"
      ],
      technologies: ["React", "TypeScript", "Next.js", "OpenAI", "AWS"],
      companyUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "StartupFlow",
      location: "Remote",
      period: "2021 - 2022",
      type: "Full-time",
      description: "Developed modern web applications for fintech startup. Focused on creating intuitive user experiences and implementing real-time features.",
      achievements: [
        "Built responsive dashboard with real-time data visualization",
        "Implemented secure authentication and payment processing",
        "Collaborated with design team to create cohesive design system"
      ],
      technologies: ["React", "Redux", "D3.js", "Stripe", "Firebase"],
      companyUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Junior Frontend Developer",
      company: "Digital Solutions Co",
      location: "New York, NY",
      period: "2020 - 2021",
      type: "Full-time",
      description: "Started my professional journey building client websites and learning modern frontend frameworks. Gained experience in agile development and client communication.",
      achievements: [
        "Delivered 20+ client websites with 98% satisfaction rate",
        "Learned React and modern JavaScript ecosystem",
        "Contributed to open-source projects and internal tools"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "WordPress"],
      companyUrl: "https://example.com"
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

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Professional Experience
          </h2>
          
          <p className={`text-lg text-white/80 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            My journey in frontend development and AI integration
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-electric-blue via-plasma-violet to-neon-green" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative mb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                style={{
                  transitionDelay: `${400 + index * 200}ms`
                }}
              >
                {/* Timeline Dot */}
                <div className={`absolute w-4 h-4 bg-electric-blue rounded-full border-4 border-deep-black left-6 md:left-1/2 transform md:-translate-x-1/2 ${
                  index === 0 ? 'animate-glow' : ''
                }`} />

                {/* Content Card */}
                <div className={`glass-card p-6 rounded-2xl ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'
                } hover:scale-105 transition-transform duration-300`}>
                  
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <span className="px-2 py-1 bg-electric-blue/20 text-electric-blue rounded-md text-xs">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-white/80 mb-2">
                      <div className="flex items-center gap-1">
                        <ExternalLink className="h-4 w-4" />
                        <span className="font-semibold text-plasma-violet">
                          {exp.company}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 text-neon-green">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
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

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs hover:bg-plasma-violet/20 hover:text-plasma-violet transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-plasma-violet/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ExperienceSection;
