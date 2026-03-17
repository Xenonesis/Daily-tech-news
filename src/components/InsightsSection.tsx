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
    <section id="insights" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-surface/50">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-1 h-8 bg-secondary rounded-full" />
          <h2 className="text-2xl sm:text-3xl font-display font-bold">
            Key <span className="gradient-text">Insights</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-surfaceHighlight border border-border card-hover"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-2xl">
                  {insight.icon}
                </div>
                {insight.trend && (
                  <div
                    className={`flex items-center gap-1 text-sm font-medium ${
                      insight.trend === "up"
                        ? "text-primary"
                        : insight.trend === "down"
                        ? "text-red-400"
                        : "text-textMuted"
                    }`}
                  >
                    {insight.trend === "up" && "↑"}
                    {insight.trend === "down" && "↓"}
                    {insight.trend === "neutral" && "→"}
                  </div>
                )}
              </div>

              <h3 className="text-lg font-display font-bold mb-2">
                {insight.title}
              </h3>

              <p className="text-textMuted text-sm">{insight.description}</p>

              {insight.value && (
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="text-2xl font-display font-bold gradient-text">
                    {insight.value}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
