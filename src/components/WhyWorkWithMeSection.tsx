
import { motion } from "framer-motion";
import { BookOpen, Bot, Palette, Rocket } from "lucide-react";
import { ReactNode } from "react";

interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Palette className="w-8 h-8 text-electric-blue" />,
    title: "Frontend Passion",
    description: "I'm genuinely passionate about creating beautiful, intuitive interfaces. Every pixel matters to me, and I find joy in crafting experiences that make users smile.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-neon-green" />,
    title: "Full-Stack Curiosity",
    description: "I'm actively exploring backend technologies because understanding the full picture makes me a better developer and teammate.",
  },
  {
    icon: <Bot className="w-8 h-8 text-plasma-violet" />,
    title: "AI Future Vision",
    description: "AI is essential for staying competitive in development today. I see AI integration in web applications becoming standard practice, and I'm actively building experience in this direction.",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "Growth Mindset",
    description: "I embrace feedback and see every challenge as an opportunity to grow. Constructive criticism makes me better at what I do.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const WhyWorkWithMeSection = () => {
  return (
    <section className="py-24 bg-deep-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            variants={itemVariants}
          >
            Why Work With Me?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                variants={itemVariants}
              >
                <div className="mt-1 flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection; 