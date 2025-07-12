
import { useEffect, useState, useMemo } from "react";
import { ArrowDown, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const words = useMemo(() => ["design", "build", "craft", "create"], []);

  // Start the animation after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    if (!started) return;

    const currentWord = words[currentWordIndex];

    // More natural typing speeds with slight randomness
    const baseTypeSpeed = isDeleting ? 40 : 120;
    const typeSpeed = baseTypeSpeed + Math.random() * 40;
    const pauseTime = isDeleting ? 800 : 2500;

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        if (isDeleting) {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setIsDeleting(false);
        } else {
          setIsDeleting(true);
        }
      }, pauseTime);

      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentText === currentWord) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && currentText === "") {
      setIsPaused(true);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1);
        } else {
          return currentWord.substring(0, prev.length + 1);
        }
      });
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [started, currentText, isDeleting, isPaused, currentWordIndex, words]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Simulate CV download
    console.log("Downloading CV...");
  };

  return (
    <section className="relative h-screen px-4 md:px-8">
      <div className="container mx-auto text-center z-20 flex flex-col justify-center h-full relative">
        <div className="space-y-8 animate-slide-up">
          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-center">
              <div className="flex items-center justify-center">
                <span className="inline-block relative">
                  {/* Invisible placeholder to maintain consistent layout */}
                  <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
                    <span className="text-white">I </span>
                    <span className="text-gradient">innovate</span>
                  </span>
                  {/* Actual typewriter text positioned absolutely over placeholder */}
                  <span
                    className={`absolute inset-0 transition-all duration-200 pointer-events-auto`}
                    style={{
                      filter: currentText ? 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.3))' : 'none'
                    }}
                  >
                    <span className="text-white">I </span>
                    <span className={currentText ? 'text-gradient' : 'text-electric-blue'}>
                      {currentText}
                    </span>
                    <span className="animate-typewriter-cursor text-electric-blue ml-1 font-thin opacity-100">|</span>
                  </span>
                </span>
              </div>
              <span className="text-white">digital experiences</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              Frontend Developer specializing in{" "}
              <span className="text-electric-blue font-semibold">React</span>,{" "}
              <span className="text-electric-blue font-semibold">TypeScript</span>, and exploring the possibilities of{" "}
              <span className="text-plasma-violet font-semibold">AI</span> tools and integrations.
            </p>
          </div>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button
              onClick={scrollToProjects}
              variant="outline"
              className="magnetic-button-green border-neon-green text-neon-green hover:bg-neon-green hover:text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Eye className="mr-2 h-5 w-5" />
              View My Work
            </Button>

            <Button
              onClick={downloadCV}
              variant="outline"
              className="magnetic-button-yellow border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6 text-white/40 hover:text-white/80 transition-colors" />
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-transparent to-plasma-violet/10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;
