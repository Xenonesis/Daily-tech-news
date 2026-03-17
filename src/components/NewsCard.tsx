"use client";

import { motion } from "framer-motion";
import { format } from "date-fns";

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: string;
  publishedAt: string;
  imageUrl?: string;
}

interface NewsCardProps {
  news: NewsItem;
  index: number;
}

export default function NewsCard({ news, index }: NewsCardProps) {
  const categoryStyles: Record<string, { bg: string; text: string; border: string; glow: string }> = {
    AI: { 
      bg: "bg-primary/10", 
      text: "text-primary", 
      border: "border-primary/30",
      glow: "group-hover:shadow-primary/20"
    },
    "Machine Learning": { 
      bg: "bg-secondary/10", 
      text: "text-secondary", 
      border: "border-secondary/30",
      glow: "group-hover:shadow-secondary/20"
    },
    Industry: { 
      bg: "bg-accent/10", 
      text: "text-accent", 
      border: "border-accent/30",
      glow: "group-hover:shadow-accent/20"
    },
    Research: { 
      bg: "bg-blue-500/10", 
      text: "text-blue-400", 
      border: "border-blue-500/30",
      glow: "group-hover:shadow-blue-500/20"
    },
    Product: { 
      bg: "bg-pink-500/10", 
      text: "text-pink-400", 
      border: "border-pink-500/30",
      glow: "group-hover:shadow-pink-500/20"
    },
    Technology: { 
      bg: "bg-emerald-500/10", 
      text: "text-emerald-400", 
      border: "border-emerald-500/30",
      glow: "group-hover:shadow-emerald-500/20"
    },
  };

  const style = categoryStyles[news.category] || categoryStyles.AI;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative bg-surface rounded-2xl border border-border overflow-hidden card-hover ${style.glow}`}
    >
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className={`absolute inset-0 ${style.bg} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/50" />
      </div>

      {/* Top gradient line */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-${style.text.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      {/* Content */}
      <div className="relative p-6">
        {/* Category badge - enhanced */}
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold border ${style.bg} ${style.text} ${style.border} backdrop-blur-sm`}>
            {news.category}
          </span>
          
          {/* Source indicator */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span className="text-textDim">{news.source}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-white transition-colors leading-tight">
          {news.title}
        </h3>

        {/* Summary */}
        <p className="text-textMuted text-sm mb-5 line-clamp-3 leading-relaxed">
          {news.summary}
        </p>

        {/* Footer with link and date */}
        <div className="flex items-center justify-between pt-4 border-t border-borderLight">
          <a
            href={news.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold group/link"
          >
            <span className={`${style.text} group-hover/link:underline`}>
              Read More
            </span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5 }}
              className={style.text}
            >
              →
            </motion.span>
          </a>

          <time className="text-xs text-textDim font-mono">
            {format(new Date(news.publishedAt), "MMM d")}
          </time>
        </div>
      </div>

      {/* Corner accent */}
      <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-${style.text.split('-')[1]}-500/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.article>
  );
}
