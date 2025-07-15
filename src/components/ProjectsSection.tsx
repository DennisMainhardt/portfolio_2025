
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const filters = ["All", "Frontend", "AI", "Fullstack"];

  const filterStyles: { [key: string]: string } = {
    "All": "border-white text-white font-semibold bg-white/20 hover:bg-white/30",
    "Frontend": "border-electric-blue text-electric-blue font-semibold bg-electric-blue/10 hover:bg-electric-blue/20",
    "AI": "border-plasma-violet text-plasma-violet font-semibold bg-plasma-violet/10 hover:bg-plasma-violet/20",
    "Fullstack": "border-neon-green text-neon-green font-semibold bg-neon-green/10 hover:bg-neon-green/20",
  };

  const projects = [
    {
      id: 1,
      title: "Bestii",
      description: "AI-powered chat platform that feels like texting your most emotionally intelligent best friend.",
      image: "bestii.webp",
      tags: ["React", "TypeScript", "Firebase", "OpenAI", "Anthropic Claude", "Vite"],
      category: ["Fullstack", "AI", "Frontend"],
      liveUrl: "https://bestii.me",
      githubUrl: "https://github.com/DennisMainhardt/bestii",
      featured: true
    },
    {
      id: 2,
      title: "LCN Beauty Center",
      description: "Modern, responsive website for a professional local beauty salon located in Germany.",
      image: "lcn.webp",
      tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite"],
      category: ["Frontend"],
      liveUrl: "https://lcn-elegance-portal.vercel.app/",
      githubUrl: "https://github.com/DennisMainhardt/lcn-elegance-portal",
      featured: false
    },
    {
      id: 3,
      title: "Haarstudio Hilden",
      description: "Modern, responsive website for a professional local hair salon located in Germany.",
      image: "haarstudio.webp",
      tags: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Vite"],
      category: ["Frontend"],
      liveUrl: "https://haarstudio-hilden.vercel.app/",
      githubUrl: "https://github.com/DennisMainhardt/haarstudio-hilden",
      featured: false
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  const checkScrollability = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const hasOverflow = el.scrollWidth > el.clientWidth;
      const canScrollRight = el.scrollWidth - el.clientWidth - el.scrollLeft > 1;
      setIsScrollable(hasOverflow && canScrollRight);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const scrollEl = scrollContainerRef.current;

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    if (scrollEl) {
      checkScrollability();
      scrollEl.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (scrollEl) {
        scrollEl.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      }
    };
  }, [filteredProjects]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Featured Projects
          </h2>

          <p className={`max-w-2xl mx-auto text-base md:text-lg text-white/70 mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Real projects demonstrating React, TypeScript, and AI implementation
          </p>

          {/* Filter Buttons */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="md:flex md:justify-center">
              <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    variant="outline"
                    className={`rounded-full px-6 py-2 text-sm transition-all duration-300 flex-shrink-0 ${activeFilter === filter
                      ? filterStyles[filter]
                      : `border-white/10 text-white/60 hover:text-white ${filter === 'Frontend' ? 'hover:border-electric-blue hover:bg-electric-blue/10' :
                        filter === 'AI' ? 'hover:border-plasma-violet hover:bg-plasma-violet/10' :
                          filter === 'Fullstack' ? 'hover:border-neon-green hover:bg-neon-green/10' :
                            'hover:border-white/40 hover:bg-white/10'
                      }`
                      }`}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Scroll Fade Indicator */}

          {/* Scroll Buttons */}
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/20 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 scale-100 hover:scale-110 hidden md:flex"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-black/20 backdrop-blur-sm border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 scale-100 hover:scale-110 hidden md:flex"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Projects Scroll Container */}
          <div
            ref={scrollContainerRef}
            className={`flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide py-6 -mx-4 px-6 md:mx-0 md:px-12 ${filteredProjects.length === 1 ? "justify-center md:justify-start" : ""
              }`}
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden w-[80vw] max-w-[380px] md:w-auto md:min-w-[400px] flex-shrink-0 group md:hover:scale-105 transition-all duration-300 md:hover:duration-150 delay-[${400 + index * 100}ms] md:hover:delay-0 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400/90 text-black px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/70 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-white/70 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-yellow-400/80 text-yellow-400/90 hover:bg-yellow-400 hover:text-black"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white/70 hover:border-white/40 hover:text-white hover:bg-transparent"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
