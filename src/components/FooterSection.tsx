"use client";


import { motion } from "framer-motion";
import { Check } from "lucide-react";

const FooterSection = () => {
  const techTags = [
    "Frontend",
    "Backend",
    "Artificial Intelligence",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  const badgeColors: { [key: string]: { hover: string; border: string } } = {
    Frontend: { hover: "hover:bg-electric-blue/10", border: "hover:border-electric-blue" },
    Backend: { hover: "hover:bg-neon-green/10", border: "hover:border-neon-green" },
    "Artificial Intelligence": { hover: "hover:bg-plasma-violet/10", border: "hover:border-plasma-violet" },
    Agile: { hover: "hover:bg-yellow-400/10", border: "hover:border-yellow-400" },
  };

  return (
    <footer className="py-16 sm:py-20 md:py-24 bg-deep-black text-white">
      <motion.div
        className="container mx-auto px-4 max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="flex flex-col items-center text-center space-y-10">

          {/* Availability */}
          <motion.div className="flex items-center gap-3 sm:gap-4" variants={itemVariants}>
            <Check className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0 text-neon-green animate-subtle-neon-glow" />
            <span className="whitespace-nowrap text-[1.35rem] sm:text-2xl md:text-3xl font-semibold">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Tech Tags */}
          <motion.div
            className="flex cursor-default flex-wrap justify-center gap-3 sm:gap-4"
            variants={itemVariants}
          >
            {techTags.map((tag) => (
              <div
                key={tag}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-white/80 transition-colors duration-300 ${badgeColors[tag]?.hover} ${badgeColors[tag]?.border}`}
              >
                {tag}
              </div>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent"
            variants={itemVariants}
          ></motion.div>

          {/* Quote */}
          <motion.blockquote
            className="text-xl md:text-2xl italic text-white/80 max-w-3xl"
            variants={itemVariants}
          >
            "Always learning, always building, always improving."
          </motion.blockquote>

          {/* Copyright */}
          <motion.div className="pt-8 text-center" variants={itemVariants}>
            <p className="text-sm sm:text-base text-white/60">
              © 2025 Dennis Mainhardt. Built with React, TypeScript & Tailwind CSS.
            </p>
            <p className="text-xs sm:text-sm text-white/40 mt-1">
              Designed & Developed with ❤️
            </p>
          </motion.div>

        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
