
import { useEffect, useRef, useState } from "react";
import { Coffee, Lightbulb, Gamepad2, Music, Code } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const funFacts = [
    {
      icon: Coffee,
      label: "Coffee Cups",
      value: "34",
      color: "electric-blue",
      description: "Spilled"
    },
    {
      icon: Lightbulb,
      label: '"Aha!"',
      value: "127",
      color: "yellow-400",
      description: "Moments"
    },
    {
      icon: Gamepad2,
      label: '"One More Game"',
      value: "∞",
      color: "plasma-violet",
      description: "Sessions"
    },
    {
      icon: Music,
      label: "Concerts",
      value: "6",
      color: "neon-green",
      description: "planned"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            About Me
          </h2>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            {/* About Text */}
            <div className="space-y-8">
              <p className="text-lg md:text-xl text-white/90" style={{ lineHeight: '1.8' }}>
                There's something satisfying about those small wins, you know, when you finally fix that one thing that's been nagging at you for days. I love building things with <span className="text-electric-blue font-semibold">React</span> and <span className="text-electric-blue font-semibold">TypeScript</span>, and I'm currently obsessing over <span className="text-plasma-violet font-semibold">AI</span> possibilities in real-world projects
              </p>

              <p className="text-lg md:text-xl text-white/85" style={{ lineHeight: '1.8' }}>
                I don't pretend to have everything figured out, but I genuinely love learning something new every day and getting better at what I do. I'm exploring <span className="text-neon-green font-semibold">full-stack development</span> because I'm curious about how everything works together, and I love working with teams using <span className="text-yellow-400 font-semibold">modern workflows</span> to build things that actually matter.
              </p>

              {/* Personal Statement */}
              <p className="text-lg md:text-xl text-white/85 border-l-4 border-electric-blue/40 pl-6 py-4 bg-gradient-to-r from-electric-blue/5 to-transparent rounded-r-lg mt-10" style={{ lineHeight: '1.8' }}>
                When I'm not coding, you'll find me smashing balls around a padel court, getting lost in concerts, or spilling coffee on my table more often than I'd like to admit.
              </p>
            </div>

          </div>

          {/* Right Column - Professional Portrait */}
          <div className={`flex flex-col items-center lg:items-end transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="relative group" style={{ cursor: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewport=\'0 0 100 100\' style=\'fill:black;font-size:24px;\'><text y=\'50%\'>❤️</text></svg>") 16 0, auto' }}>
              {/* Portrait Container */}
              <div className="relative w-80 h-[420px] md:w-96 md:h-[520px]">
                {/* Clean Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue via-plasma-violet to-neon-green rounded-3xl p-[2px]">
                  <div className="w-full h-full bg-deep-black rounded-3xl overflow-hidden">
                    {/* Professional Photo */}
                    <img
                      src="/dennismainhardt.jpg"
                      alt="Dennis Mainhardt - Frontend Developer"
                      className="w-full h-full object-cover object-center scale-105 transition-transform duration-500 ease-out group-hover:scale-110"
                      style={{
                        imageRendering: 'crisp-edges',
                        backfaceVisibility: 'hidden'
                      }}
                    />
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 rounded-3xl transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-electric-blue/20" />
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-neon-green/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-plasma-violet/15 rounded-full blur-2xl animate-pulse delay-1000" />
            </div>

            {/* Caption */}
            <div className="w-80 md:w-96 text-center mt-6">
              <p className="text-sm" style={{ color: '#a1a1aa' }}>
                Nice to meet you 👋 — I'm Dennis.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Facts - Sleek Badge Design */}
        <div className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          {funFacts.map((fact, index) => (
            <div
              key={fact.label}
              className={`group relative transition-all duration-300 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{
                transitionDelay: `${700 + index * 100}ms`
              }}
            >
              {/* Sleek Badge */}
              <div className="relative bg-gradient-to-r from-white/8 to-white/5 backdrop-blur-md border border-white/15 rounded-full px-6 py-4 hover:border-white/30 transition-all duration-300 group-hover:from-white/12 group-hover:to-white/8 shadow-lg hover:shadow-xl overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${fact.color}/5 via-transparent to-${fact.color}/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-3">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <fact.icon className={`w-5 h-5 text-${fact.color} group-hover:animate-pulse transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Text Content - Horizontal Layout */}
                  <div className="flex items-center gap-3">
                    {/* Stat Number */}
                    <span className={`${fact.value === '∞' ? 'text-2xl' : fact.value === '6' ? 'text-lg' : 'text-xl'} font-medium text-${fact.color} group-hover:scale-105 transition-transform duration-300`}>
                      {fact.value}
                    </span>

                    {/* Label */}
                    <span className="text-white/95 text-base font-medium">
                      {fact.label}
                    </span>

                    {/* Description */}
                    {fact.description && (
                      <span className="text-zinc-400 text-sm font-medium">
                        {fact.description}
                      </span>
                    )}
                  </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-full bg-${fact.color}/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                {/* Floating Glow */}
                <div className={`absolute inset-0 rounded-full bg-${fact.color}/20 blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500 -z-10`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue/3 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-plasma-violet/4 rounded-full blur-3xl pointer-events-none animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-green/2 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default AboutSection;
