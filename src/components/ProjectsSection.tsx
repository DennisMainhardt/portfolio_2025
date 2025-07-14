
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
    "All": "bg-white text-black font-semibold border-transparent hover:bg-white/90",
    "Frontend": "bg-electric-blue text-black font-semibold border-transparent hover:bg-electric-blue/90",
    "AI": "bg-plasma-violet text-white font-semibold border-transparent hover:bg-plasma-violet/90",
    "Fullstack": "bg-neon-green text-black font-semibold border-transparent hover:bg-neon-green/90",
  };

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      description: "A React-based content generation platform using OpenAI's GPT-4, featuring real-time collaboration and advanced prompt engineering.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TypeScript", "OpenAI", "Node.js"],
      category: "AI",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      description: "Modern admin dashboard with advanced analytics, inventory management, and AI-powered sales predictions.",
      image: "/api/placeholder/600/400",
      tags: ["Next.js", "Tailwind", "Chart.js", "PostgreSQL"],
      category: "Fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Design System Library",
      description: "Comprehensive component library with 50+ reusable components, built with Storybook and automated testing.",
      image: "/api/placeholder/600/400",
      tags: ["React", "Storybook", "Jest", "Chromatic"],
      category: "Frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false
    },
    {
      id: 4,
      title: "Smart Finance Tracker",
      description: "Personal finance app with AI categorization, predictive budgeting, and beautiful data visualizations.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Python", "TensorFlow", "Firebase"],
      category: "AI",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true
    }
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
            A showcase of my best work in frontend development and AI integration
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
                      : 'border-white/10 text-white/60 hover:border-white/40 hover:text-white hover:bg-transparent'
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 glass-card border-white/20 text-white hover:border-electric-blue hover:text-electric-blue hidden md:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 glass-card border-white/20 text-white hover:border-electric-blue hover:text-electric-blue hidden md:flex"
          >
            <ChevronRight className="h-4 w-4" />
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
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-electric-blue/20 to-plasma-violet/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400/90 text-black px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-yellow-400/80 text-yellow-400/90 hover:bg-yellow-400 hover:text-black"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white/70 hover:border-white/40 hover:text-white hover:bg-transparent"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
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
