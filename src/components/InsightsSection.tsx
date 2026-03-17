"use client";

import { motion } from "framer-motion";

interface Insight {
  title: string;
  description: string;
  icon: string;
  trend?: "up" | "down" | "neutral";
  value?: string;
}

interface InsightsSectionProps {
  insights: Insight[];
}

export default function InsightsSection({ insights }: InsightsSectionProps) {
  return (
    <section id="insights" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-3xl"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary glow">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Key <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-textMuted text-sm mt-1">
              Data-driven statistics shaping the AI landscape
            </p>
          </div>
        </motion.div>

        {/* Insights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group stat-card relative p-7 rounded-2xl bg-surfaceHighlight border border-borderLight card-hover overflow-hidden"
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-transparent" />
              </div>

              {/* Icon and trend */}
              <div className="relative flex items-start justify-between mb-5">
                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/10 flex items-center justify-center text-3xl border border-borderLight group-hover:border-primary/30 transition-colors"
                >
                  {insight.icon}
                </motion.div>
                
                {insight.trend && (
                  <div
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold font-mono ${
                      insight.trend === "up"
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : insight.trend === "down"
                        ? "bg-red-500/10 text-red-400 border border-red-500/20"
                        : "bg-textMuted/10 text-textMuted border border-textMuted/20"
                    }`}
                  >
                    {insight.trend === "up" && (
                      <motion.span
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ↑
                      </motion.span>
                    )}
                    {insight.trend === "down" && "↓"}
                    {insight.trend === "neutral" && "→"}
                    <span className="text-xs">{insight.trend === "up" ? "Growing" : insight.trend === "down" ? "Declining" : "Stable"}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-lg font-display font-bold mb-2 text-white group-hover:text-primary transition-colors">
                  {insight.title}
                </h3>

                <p className="text-textMuted text-sm leading-relaxed">
                  {insight.description}
                </p>

                {/* Value display */}
                {insight.value && (
                  <div className="mt-5 pt-5 border-t border-borderLight">
                    <div className="text-4xl font-display font-bold gradient-text tracking-tight">
                      {insight.value}
                    </div>
                    <div className="text-xs text-textDim font-mono mt-1">
                      Current metric
                    </div>
                  </div>
                )}
              </div>

              {/* Corner decoration */}
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-secondary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-textMuted text-sm font-mono">
            Updated daily at 10:00 AM • Data sourced from industry reports
          </p>
        </motion.div>
      </div>
    </section>
  );
}
