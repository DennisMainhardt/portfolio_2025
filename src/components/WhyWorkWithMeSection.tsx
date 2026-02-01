"use client";


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
    description: "I actually enjoy making interfaces that feel right to use. When everything clicks and users don't have to think about it",
  },
  {
    icon: <Rocket className="w-8 h-8 text-neon-green" />,
    title: "Full-Stack Curiosity",
    description: "I'm actively exploring backend technologies because understanding the full picture makes me a better developer and teammate.",
  },
  {
    icon: <Bot className="w-8 h-8 text-plasma-violet" />,
    title: "AI Future Vision",
    description: "AI is becoming standard in development today, so I'm building real projects and experiences around that",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
    title: "Growth Mindset",
    description: "I don't pretend to know everything, but I learn fast and embrace feedback. I'd rather admit gaps and figure it out than fake expertise.",
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
            Why Me?
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