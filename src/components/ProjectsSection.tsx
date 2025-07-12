
import { useState, useRef, useEffect } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filters = ["All", "Frontend", "AI", "Fullstack"];

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
    <section id="projects" ref={sectionRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Featured Projects
          </h2>
          
          <p className={`text-lg text-white/80 mb-8 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A showcase of my best work in frontend development and AI integration
          </p>

          {/* Filter Buttons */}
          <div className={`flex flex-wrap justify-center gap-4 mb-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`magnetic-button rounded-full px-6 py-2 ${
                  activeFilter === filter
                    ? "bg-electric-blue text-black"
                    : "border-white/20 text-white hover:border-electric-blue hover:text-electric-blue"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <Button
            onClick={() => scroll('left')}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 glass-card border-white/20 text-white hover:border-electric-blue hover:text-electric-blue"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={() => scroll('right')}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 glass-card border-white/20 text-white hover:border-electric-blue hover:text-electric-blue"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Projects Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-12 pb-4"
          >
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`glass-card rounded-2xl overflow-hidden min-w-[350px] md:min-w-[400px] group hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${400 + index * 100}ms`
                }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-electric-blue/20 to-plasma-violet/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-neon-green text-black px-3 py-1 rounded-full text-xs font-semibold">
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
                        className="px-2 py-1 bg-white/10 text-white/80 rounded-md text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="magnetic-button bg-electric-blue hover:bg-electric-blue/80 text-black flex-1"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/20 text-white hover:border-plasma-violet hover:text-plasma-violet"
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
