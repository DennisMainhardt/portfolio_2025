
import { useState, useEffect, useRef } from "react";
import { Send, Mail, Github, Linkedin, Twitter, Phone, MapPin, Palette, Rocket, Code, BookOpen, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const whyWorkWithMe = [
    {
      icon: Palette,
      title: "Frontend Passion",
      description: "I'm genuinely passionate about creating beautiful, intuitive interfaces. Every pixel matters to me, and I find joy in crafting experiences that make users smile.",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/5",
      borderColor: "border-electric-blue/20"
    },
    {
      icon: Rocket,
      title: "Full-Stack Curiosity",
      description: "I'm actively exploring backend technologies because understanding the full picture makes me a better developer and teammate.",
      color: "text-neon-green",
      bgColor: "bg-neon-green/5",
      borderColor: "border-neon-green/20"
    },
    {
      icon: Code,
      title: "Modern Development",
      description: "I stay current with the latest frontend technologies and best practices. From React and TypeScript to modern CSS and performance optimization, I focus on building scalable, maintainable solutions.",
      color: "text-plasma-violet",
      bgColor: "bg-plasma-violet/5",
      borderColor: "border-plasma-violet/20"
    },
    {
      icon: BookOpen,
      title: "Growth Mindset",
      description: "I embrace feedback and see every challenge as an opportunity to grow. Constructive criticism makes me better at what I do.",
      color: "text-electric-blue",
      bgColor: "bg-electric-blue/5",
      borderColor: "border-electric-blue/20"
    }
  ];

  const contactInfo = [
    { icon: Mail, label: "EMAIL", value: "dennis.mainhardt@gmail.com", href: "mailto:dennis.mainhardt@gmail.com", color: "text-electric-blue" },
    { icon: Phone, label: "PHONE", value: "+49 XXX XXX XXXX", href: "tel:+49XXXXXXXXX", color: "text-neon-green" },
    { icon: MapPin, label: "LOCATION", value: "Germany", href: null, color: "text-plasma-violet" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/dennismainhardt", color: "hover:text-white" },
    { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com/in/dennismainhardt", color: "hover:text-blue-400" },
    { icon: Mail, label: "Email", url: "mailto:dennis.mainhardt@gmail.com", color: "hover:text-electric-blue" },
    { icon: Twitter, label: "Twitter", url: "https://twitter.com/dennismainhardt", color: "hover:text-blue-300" }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-4 md:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-electric-blue/8 via-plasma-violet/4 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-neon-green/6 to-transparent blur-3xl" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-plasma-violet/6 to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h2>
          
          <p className={`text-xl text-white/70 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Ready to talk? Let's connect and explore how I can contribute to your team's goals.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Left Column: 2-Card Layout (Stacked) */}
            <div className="space-y-8 flex flex-col">
              
              {/* TOP CARD: Get In Touch */}
              <div className="relative flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 via-transparent to-plasma-violet/5 rounded-3xl" />
                
                <div className="relative p-8 h-full">
                  {/* Get In Touch Title */}
                  <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-electric-blue to-plasma-violet animate-pulse"></div>
                    Get In Touch
                  </h3>
                  
                  {/* Contact Info */}
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info, index) => (
                      <div key={info.label} className="flex items-center gap-4 group">
                        <div className={`flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 ${info.color} transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10`}>
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-1">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href} 
                              className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span className="text-white/70 font-medium">{info.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />

                  {/* Social Links - Left Aligned */}
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-110 ${social.color}`}
                        title={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM CARD: Send Me a Message Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-plasma-violet/5 via-transparent to-neon-green/5 rounded-3xl" />
                
                <div className="relative p-8 flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-6">Send Me a Message</h4>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                    {/* Name + Email Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 rounded-xl transition-all duration-300"
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 rounded-xl transition-all duration-300"
                      />
                    </div>

                    {/* Subject */}
                    <Input
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="h-12 bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 rounded-xl transition-all duration-300"
                    />

                    {/* Message */}
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 rounded-xl resize-none transition-all duration-300"
                    />
                  </form>

                  {/* Send Message Button - Positioned at bottom */}
                  <div className="mt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                      className="w-full h-14 bg-gradient-to-r from-electric-blue to-plasma-violet hover:from-electric-blue/80 hover:to-plasma-violet/80 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-electric-blue/25 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {isSubmitting ? (
                        <div className="flex items-center justify-center relative z-10">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center relative z-10">
                          <Send className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Why Work With Me */}
            <div className="relative flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-plasma-violet/5 via-transparent to-neon-green/5 rounded-3xl" />
              
              <div className="relative p-8 h-full flex flex-col">
                <h3 className="text-3xl font-bold text-white mb-8">Why Work With Me</h3>
                
                <div className="space-y-6 flex-1">
                  {whyWorkWithMe.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group relative transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${600 + index * 150}ms` }}
                    >
                      <div className={`relative p-6 rounded-2xl ${item.bgColor} border ${item.borderColor} hover:shadow-lg transition-all duration-300 group-hover:scale-[1.02] hover:border-opacity-50`}>
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 p-3 rounded-xl bg-white/10 border border-white/20 group-hover:scale-110 transition-all duration-300`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-white font-bold text-lg mb-3 group-hover:${item.color} transition-colors duration-300`}>
                              {item.title}
                            </h4>
                            <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300 text-sm">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Book a Call Button - Aligned with Send Message Button */}
                <div className="mt-8">
                  <Button
                    onClick={() => window.open('https://calendly.com', '_blank')}
                    className="w-full h-14 bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-white/40 text-white font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 relative overflow-hidden group backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center justify-center relative z-10">
                      <Calendar className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                      Book a Call with Me
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
