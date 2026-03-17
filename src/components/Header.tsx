"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark backdrop-blur-2xl border-b border-borderLight shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow group-hover:glow-lg transition-all duration-300"
            >
              <span className="text-background font-bold text-sm">DT</span>
            </motion.div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-xl text-white">
                Daily Tech{" "}
              </span>
              <span className="gradient-text font-display font-bold text-xl">
                News
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <Link
              href="#news"
              className="text-sm text-textMuted hover:text-primary transition-colors underline-animated font-mono"
            >
              News
            </Link>
            <Link
              href="#insights"
              className="text-sm text-textMuted hover:text-secondary transition-colors underline-animated font-mono"
            >
              Insights
            </Link>
            <Link
              href="#about"
              className="text-sm text-textMuted hover:text-accent transition-colors underline-animated font-mono"
            >
              About
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Live clock - enhanced */}
            <div className="hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full glass-dark border border-borderLight">
              <div className="relative">
                <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              </div>
              <span className="text-xs font-mono text-primary tracking-wider">
                {currentTime.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  hour12: true
                })}
              </span>
            </div>
            
            {/* GitHub button */}
            <a
              href="https://github.com/Xenonesis/Daily-tech-news"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-2.5 rounded-xl glass-dark border border-borderLight hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub Repository"
            >
              <svg
                className="w-5 h-5 text-textMuted group-hover:text-primary transition-colors"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.028 1.029-2.716-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.688 1.028 1.623 1.028 2.716 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
