"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surfaceHighlight border border-border mb-8">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-textMuted">
              Updated daily at 10:00 AM
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          Daily Tech
          <br />
          <span className="gradient-text">News & Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-textMuted max-w-3xl mx-auto mb-10"
        >
          AI-powered aggregation of the latest technology news, breakthroughs, 
          and industry insights. Stay ahead with curated updates delivered daily.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#news"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-primaryDark text-background font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            Explore Today&apos;s News
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
          
          <a
            href="https://github.com/Xenonesis/Daily-tech-news"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-surfaceHighlight border border-border text-text font-semibold hover:border-primary/50 transition-all duration-300"
          >
            View on GitHub
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-border"
        >
          {[
            { value: "10+", label: "Sources" },
            { value: "50+", label: "Articles Daily" },
            { value: "6", label: "Categories" },
            { value: "24/7", label: "Updates" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-textMuted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
