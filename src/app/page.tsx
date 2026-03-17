import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsGrid from "@/components/NewsGrid";
import InsightsSection from "@/components/InsightsSection";
import Footer from "@/components/Footer";
import NewsSkeleton from "@/components/NewsSkeleton";
import { getLatestNews, getInsights } from "@/lib/news-data";

export default function Home() {
  const newsData = getLatestNews();
  const insights = getInsights();

  return (
    <main className="min-h-screen">
      <Header />
      
      <Hero />
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-primary rounded-full" />
            <h2 className="text-2xl sm:text-3xl font-display font-bold">Latest News</h2>
            <span className="ml-auto text-sm text-textMuted font-mono">
              Updated: {new Date().toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          
          <Suspense fallback={<NewsSkeleton />}>
            <NewsGrid news={newsData} />
          </Suspense>
        </div>
      </section>

      <InsightsSection insights={insights} />
      
      <Footer />
    </main>
  );
}
