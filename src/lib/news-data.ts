// News data utility - reads from generated JSON files

import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'content');

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  category: string;
  publishedAt: string;
  imageUrl?: string;
}

export interface Insight {
  title: string;
  description: string;
  icon: string;
  trend?: 'up' | 'down' | 'neutral';
  value?: string;
}

export function getLatestNews(): NewsItem[] {
  try {
    const newsPath = path.join(dataDir, 'news.json');
    if (!fs.existsSync(newsPath)) {
      return getSampleNews();
    }
    const fileContents = fs.readFileSync(newsPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading news data:', error);
    return getSampleNews();
  }
}

export function getInsights(): Insight[] {
  try {
    const insightsPath = path.join(dataDir, 'insights.json');
    if (!fs.existsSync(insightsPath)) {
      return getSampleInsights();
    }
    const fileContents = fs.readFileSync(insightsPath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error reading insights data:', error);
    return getSampleInsights();
  }
}

function getSampleNews(): NewsItem[] {
  return [
    {
      id: '1',
      title: 'Open-Source Models Breaking Tech Giants\' Hold',
      summary: 'Post-training phase breakthroughs enable customizable, fine-tuned models. Startups and researchers can now build powerful AI on shared open foundations.',
      source: 'AI Learner Tech',
      url: 'https://ailearner.tech/top-ai-breakthroughs-2026-technology-trends/',
      category: 'AI',
      publishedAt: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'Agentic AI with Enhanced Context & Memory',
      summary: 'Persistent memory enables agents to learn from past actions. Moving beyond single interactions to continuous, autonomous support.',
      source: 'InfoWorld',
      url: 'https://www.infoworld.com/article/4108092/6-ai-breakthroughs-that-will-define-2026.html',
      category: 'Machine Learning',
      publishedAt: new Date().toISOString(),
    },
    {
      id: '3',
      title: '71% of Organizations Now Use Generative AI Regularly',
      summary: 'New statistics show widespread AI adoption, but 80%+ report no measurable enterprise-level EBIT impact yet.',
      source: 'AmplifAI',
      url: 'https://www.amplifai.com/blog/generative-ai-statistics',
      category: 'Industry',
      publishedAt: new Date().toISOString(),
    },
    {
      id: '4',
      title: 'Self-Verification Replacing Human Intervention',
      summary: 'Internal feedback loops allow AI to autonomously verify and correct work. "Auto-judging" agents enable reliable, scalable workflows.',
      source: 'InfoWorld',
      url: 'https://www.infoworld.com/article/4108092/6-ai-breakthroughs-that-will-define-2026.html',
      category: 'Research',
      publishedAt: new Date().toISOString(),
    },
    {
      id: '5',
      title: 'AI Market Projected to Reach $400 Billion by 2031',
      summary: 'Global generative AI market growing at 37.57% CAGR, from $59 billion in 2025 to $400 billion by 2031.',
      source: 'Industry Report',
      url: '#',
      category: 'Industry',
      publishedAt: new Date().toISOString(),
    },
    {
      id: '6',
      title: 'English Becomes the Hottest Programming Language',
      summary: 'Clear goal articulation to AI assistants replacing syntax knowledge. Potential 10x increase in application creators.',
      source: 'InfoWorld',
      url: 'https://www.infoworld.com/article/4108092/6-ai-breakthroughs-that-will-define-2026.html',
      category: 'Product',
      publishedAt: new Date().toISOString(),
    },
  ];
}

function getSampleInsights(): Insight[] {
  return [
    {
      title: 'AI Adoption Rate',
      description: 'Organizations regularly using generative AI',
      icon: '📊',
      trend: 'up',
      value: '71%',
    },
    {
      title: 'Market Growth',
      description: 'Gen AI market CAGR through 2031',
      icon: '🚀',
      trend: 'up',
      value: '37.57%',
    },
    {
      title: 'ROI Average',
      description: 'Return per $1 invested in generative AI',
      icon: '💰',
      trend: 'up',
      value: '$3.70',
    },
    {
      title: 'Customer Support AI',
      description: 'Support interactions involving agentic AI by mid-2026',
      icon: '🤖',
      trend: 'up',
      value: '56%',
    },
    {
      title: 'Enterprise Apps with AI',
      description: 'Applications with task-specific agents by end of 2026',
      icon: '📱',
      trend: 'up',
      value: '40%',
    },
    {
      title: 'B2B Spending via AI',
      description: 'Spending intermediated by AI agents by 2028',
      icon: '💼',
      trend: 'up',
      value: '$15T',
    },
  ];
}
