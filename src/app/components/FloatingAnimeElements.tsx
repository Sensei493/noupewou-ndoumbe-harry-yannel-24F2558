import { motion } from 'motion/react';
import { Star, Heart, Sparkles, Zap } from 'lucide-react';

export function FloatingAnimeElements() {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const sparkleVariants = {
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating Stars */}
      <motion.div
        className="absolute top-20 left-10 text-yellow-400/30"
        variants={floatingVariants}
        animate="animate"
      >
        <Star className="w-12 h-12" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute top-40 right-20 text-pink-400/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
      >
        <Heart className="w-16 h-16" fill="currentColor" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-1/4 text-purple-400/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0.5s' }}
      >
        <Sparkles className="w-14 h-14" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-1/3 text-blue-400/30"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      >
        <Zap className="w-10 h-10" fill="currentColor" />
      </motion.div>

      {/* Sparkle Effects */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-br from-yellow-300 to-pink-400 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          variants={sparkleVariants}
          animate="animate"
          transition={{
            delay: i * 0.3,
            duration: 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut" as const,
          delay: 1,
        }}
      />
    </div>
  );
}
