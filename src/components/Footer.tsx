"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-borderLight overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/50 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center glow"
              >
                <span className="text-background font-bold text-sm">DT</span>
              </motion.div>
              <div>
                <span className="font-display font-bold text-xl text-white">
                  Daily Tech{" "}
                </span>
                <span className="gradient-text font-display font-bold text-xl">
                  News
                </span>
              </div>
            </Link>
            <p className="text-textMuted text-sm leading-relaxed max-w-md mb-6">
              AI-powered daily technology news aggregation. Stay informed with
              curated insights from the world of tech, delivered every day at 10 AM.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://github.com/Xenonesis/Daily-tech-news"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-xl glass-dark border border-borderLight hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 text-textMuted group-hover:text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-2.028 1.029-2.716-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.688 1.028 1.623 1.028 2.716 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-primary to-secondary rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#news" className="text-textMuted hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-borderLight group-hover:bg-primary transition-colors" />
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="#insights" className="text-textMuted hover:text-secondary transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-borderLight group-hover:bg-secondary transition-colors" />
                  Insights
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-textMuted hover:text-accent transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-borderLight group-hover:bg-accent transition-colors" />
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gradient-to-b from-secondary to-accent rounded-full" />
              Information
            </h4>
            <ul className="space-y-3 text-sm text-textMuted">
              <li className="flex items-center gap-2">
                <span className="text-primary">⏰</span>
                Updated daily at 10 AM
              </li>
              <li className="flex items-center gap-2">
                <span className="text-secondary">🤖</span>
                AI-Powered Curation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">📧</span>
                50+ Articles Daily
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400">🌐</span>
                10+ Sources
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-borderLight flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-textMuted text-sm">
            © {currentYear} Daily Tech News. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-textDim text-xs font-mono">
              Built with Next.js & Tailwind CSS
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <p className="text-textDim text-xs font-mono">
                Auto-updated
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
