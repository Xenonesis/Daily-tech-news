"use client";

import NewsCard from "./NewsCard";

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

interface NewsGridProps {
  news: NewsItem[];
}

export default function NewsGrid({ news }: NewsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((item, index) => (
        <NewsCard key={item.id} news={item} index={index} />
      ))}
    </div>
  );
}
