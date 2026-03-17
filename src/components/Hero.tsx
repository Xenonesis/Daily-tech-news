"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Sources", icon: "📰" },
  { value: "50+", label: "Articles Daily", icon: "📝" },
  { value: "6", label: "Categories", icon: "🏷️" },
  { value: "24/7", label: "Updates", icon: "⚡" },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2], rotate: [360, 180, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-secondary/20 to-accent/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [-30, 30, -30], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-br from-accent/15 to-transparent rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{ y: [30, -30, 30], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-2xl"
      />

      <motion.div
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-dark border border-primary/30 mb-10"
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-primary pulse-dot" />
          </div>
          <span className="text-sm font-mono text-primary tracking-wide">UPDATED DAILY AT 10:00 AM</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold mb-8 leading-none"
        >
          <span className="block text-white">Daily Tech</span>
          <span className="block gradient-text mt-2">News &amp; Insights</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-textMuted max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          AI-powered aggregation of the latest technology news, breakthroughs, and industry insights. <span className="text-text">Stay ahead</span> with curated updates delivered daily.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#news" className="group btn-primary px-10 py-4.5 rounded-2xl text-background font-semibold text-base flex items-center gap-3">
            Explore Today&apos;s News
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>→</motion.span>
          </a>
          
          <a href="https://github.com/Xenonesis/Daily-tech-news" target="_blank" rel="noopener noreferrer" className="group px-10 py-4.5 rounded-2xl glass-dark border border-borderLight text-white font-semibold text-base hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 flex items-center gap-3">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.028 1.029-2.716-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.688 1.028 1.623 1.028 2.716 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 pt-12 border-t border-borderLight"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center group">
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-4xl sm:text-5xl font-display font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-textMuted font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-7 h-12 rounded-full border-2 border-borderLight flex items-start justify-center p-2.5 glass-dark"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-primary glow"
          />
        </motion.div>
        <div className="text-xs text-textMuted mt-3 font-mono text-center">SCROLL TO EXPLORE</div>
      </motion.div>
    </div>
  );
}
