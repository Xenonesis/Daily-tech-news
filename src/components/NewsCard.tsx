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
  const categoryColors: Record<string, string> = {
    AI: "bg-primary/10 text-primary border-primary/20",
    "Machine Learning": "bg-secondary/10 text-secondary border-secondary/20",
    "Industry": "bg-accent/10 text-accent border-accent/20",
    Research: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    Product: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  };

  const cardColor = categoryColors[news.category] || "bg-surfaceHighlight border-border";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden card-hover"
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${cardColor}`}>
          {news.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-textMuted mb-4">
          <span className="font-mono">{news.source}</span>
          <span>•</span>
          <span>{format(new Date(news.publishedAt), "MMM d, yyyy")}</span>
        </div>

        <h3 className="text-xl font-display font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>

        <p className="text-textMuted text-sm mb-4 line-clamp-3">
          {news.summary}
        </p>

        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primaryDark transition-colors"
        >
          Read More
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>

      {/* Hover Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10" />
      </div>
    </motion.article>
  );
}
