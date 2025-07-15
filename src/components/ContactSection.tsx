
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/dennismainhardt", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/dennis-mainhardt-321a90369/", color: "hover:text-blue-400" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/dennismainhardt", color: "hover:text-pink-500" }
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Gradient Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green rounded-2xl blur-lg opacity-75 animate-pulse"></div>

          <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
                Seeking frontend positions using React, TypeScript, and AI. Open to roles with full-stack growth potential.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <a href="mailto:dennis.mainhardt@gmail.com">
                  <Button size="lg" className="bg-white text-black font-semibold hover:bg-white/90">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </Button>
                </a>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/60 transition-colors duration-300 ${social.color}`}
                    title={social.label}
                  >
                    <social.icon className="h-7 w-7" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
