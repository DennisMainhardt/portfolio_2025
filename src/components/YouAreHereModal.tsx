"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface YouAreHereModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const YouAreHereModal: React.FC<YouAreHereModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      // Handle ESC key
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscape);

      return () => {
        clearTimeout(timer);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
              }
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 20,
              transition: { duration: 0.2 }
            }}
            className="fixed inset-0 z-40 flex items-center justify-center p-4"
          >
            <div className="bg-gradient-to-br from-deep-black to-dark-gray border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-md text-center relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 via-plasma-violet/10 to-neon-green/10 rounded-2xl" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors p-1"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{
                    scale: 1,
                    transition: { delay: 0.2, type: "spring", stiffness: 400 }
                  }}
                  className="text-4xl sm:text-6xl mb-4"
                >
                  🎉
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.3 }
                  }}
                  className="text-xl sm:text-2xl font-bold text-white mb-3"
                >
                  Surprise!
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4 }
                  }}
                  className="text-2xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-1 sm:gap-2"
                >
                  <span className="bg-gradient-to-r from-electric-blue via-plasma-violet to-neon-green bg-clip-text text-transparent">
                    You Are Here
                  </span>
                  <span className="text-2xl sm:text-4xl">🙂</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.5 }
                  }}
                  className="text-white/80 leading-relaxed text-sm sm:text-base"
                >
                  This portfolio <strong className="text-yellow-400">IS</strong> the live demo!
                  <br />
                  Thanks for exploring my work, I hope you like it!
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.6, type: "spring", stiffness: 400 }
                  }}
                  className="text-2xl mt-4"
                >
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default YouAreHereModal;