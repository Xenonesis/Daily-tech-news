/**
 * Daily Tech News Generator
 * Fetches latest AI/tech news and generates JSON files for the website
 * 
 * This script is designed to be run daily at 10 AM to update the news content.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const contentDir = path.join(projectRoot, 'content');

// Ensure content directory exists
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

/**
 * Sample news generator - In production, this would call web search APIs
 * For now, it generates realistic sample data that gets updated daily
 */
function generateDailyNews() {
  const today = new Date();
  const dateStr = today.toISOString().split('T')[0];
  
  // News templates that get rotated and updated
  const newsTemplates = [
    {
      category: 'AI',
      titles: [
        'Open-Source Models Breaking Tech Giants\' Hold',
        'New Foundation Model Architecture Promises 10x Efficiency',
        'AI Research Lab Announces Breakthrough in Reasoning',
        'Multimodal AI System Achieves Human-Level Performance',
      ],
      sources: ['AI Learner Tech', 'TechCrunch', 'InfoWorld', 'Wired'],
    },
    {
      category: 'Machine Learning',
      titles: [
        'Agentic AI with Enhanced Context & Memory',
        'New Training Method Reduces ML Model Size by 90%',
        'Reinforcement Learning Breakthrough for Robotics',
        'Federated Learning Enables Privacy-Preserving AI',
      ],
      sources: ['InfoWorld', 'MIT Tech Review', 'ArXiv', 'ML News'],
    },
    {
      category: 'Industry',
      titles: [
        '71% of Organizations Now Use Generative AI Regularly',
        'Tech Giants Invest $50B in AI Infrastructure',
        'AI Startup Raises $2B at $20B Valuation',
        'Enterprise AI Adoption Reaches All-Time High',
      ],
      sources: ['AmplifAI', 'Bloomberg', 'Reuters', 'Industry Report'],
    },
    {
      category: 'Research',
      titles: [
        'Self-Verification Replacing Human Intervention',
        'New Paper Challenges AI Safety Assumptions',
        'Breakthrough in Neural Network Interpretability',
        'Researchers Solve Long-Standing AI Alignment Problem',
      ],
      sources: ['InfoWorld', 'Nature', 'Science', 'ArXiv'],
    },
    {
      category: 'Product',
      titles: [
        'English Becomes the Hottest Programming Language',
        'Major Tech Company Launches AI-Powered Development Tool',
        'New AI Assistant Integrates with Popular Software',
        'Consumer AI Device Ships to Million Customers',
      ],
      sources: ['InfoWorld', 'The Verge', 'Product Hunt', 'TechCrunch'],
    },
    {
      category: 'Technology',
      titles: [
        'Edge AI for Speed and Privacy',
        'New Chip Architecture Optimized for AI Workloads',
        'Quantum Computing Meets Machine Learning',
        '5G Networks Enable Real-Time AI Applications',
      ],
      sources: ['AI Learner Tech', 'IEEE Spectrum', 'AnandTech', 'ZDNet'],
    },
  ];

  const news = [];
  let id = 1;
  const baseTime = new Date(today);
  baseTime.setHours(9, 0, 0, 0); // Start at 9 AM

  // Generate 12 news items
  for (let i = 0; i < 12; i++) {
    const template = newsTemplates[i % newsTemplates.length];
    const titleIndex = Math.floor(i / newsTemplates.length);
    
    const publishTime = new Date(baseTime);
    publishTime.setMinutes(publishTime.getMinutes() + (i * 15));

    news.push({
      id: String(id++),
      title: template.titles[titleIndex % template.titles.length],
      summary: generateSummary(template.titles[titleIndex % template.titles.length]),
      source: template.sources[titleIndex % template.sources.length],
      url: '#',
      category: template.category,
      publishedAt: publishTime.toISOString(),
    });
  }

  return news;
}

function generateSummary(title: string): string {
  const summaries: Record<string, string> = {
    'Open-Source Models Breaking Tech Giants\' Hold': 'Post-training phase breakthroughs enable customizable, fine-tuned models. Startups and researchers can now build powerful AI on shared open foundations, democratizing AI development.',
    'Agentic AI with Enhanced Context & Memory': 'Persistent memory enables agents to learn from past actions. Moving beyond single interactions to continuous, autonomous support for complex long-term goals.',
    '71% of Organizations Now Use Generative AI Regularly': 'New statistics show widespread AI adoption, but 80%+ report no measurable enterprise-level EBIT impact. The gap between adoption and value realization remains a challenge.',
    'Self-Verification Replacing Human Intervention': 'Internal feedback loops allow AI to autonomously verify and correct work. Auto-judging agents enable reliable, scalable multi-hop workflows for enterprise use.',
    'English Becomes the Hottest Programming Language': 'Clear goal articulation to AI assistants replacing syntax knowledge. Natural language programming could create 10x increase in application creators.',
    'Edge AI for Speed and Privacy': 'Localized data processing gaining traction for faster response times and improved privacy. Major trend for 2026 as organizations prioritize data sovereignty.',
  };

  return summaries[title] || 'Latest developments in technology and artificial intelligence continue to reshape industries and create new opportunities for innovation.';
}

function generateInsights() {
  return [
    {
      title: 'AI Adoption Rate',
      description: 'Organizations regularly using generative AI',
      icon: '📊',
      trend: 'up' as const,
      value: '71%',
    },
    {
      title: 'Market Growth',
      description: 'Gen AI market CAGR through 2031',
      icon: '🚀',
      trend: 'up' as const,
      value: '37.57%',
    },
    {
      title: 'ROI Average',
      description: 'Return per $1 invested in generative AI',
      icon: '💰',
      trend: 'up' as const,
      value: '$3.70',
    },
    {
      title: 'Customer Support AI',
      description: 'Support interactions involving agentic AI by mid-2026',
      icon: '🤖',
      trend: 'up' as const,
      value: '56%',
    },
    {
      title: 'Enterprise Apps with AI',
      description: 'Applications with task-specific agents by end of 2026',
      icon: '📱',
      trend: 'up' as const,
      value: '40%',
    },
    {
      title: 'B2B Spending via AI',
      description: 'Spending intermediated by AI agents by 2028',
      icon: '💼',
      trend: 'up' as const,
      value: '$15T',
    },
  ];
}

// Main execution
console.log('📰 Generating daily tech news...');
console.log(`📅 Date: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`);

const news = generateDailyNews();
const insights = generateInsights();

// Write news.json
const newsPath = path.join(contentDir, 'news.json');
fs.writeFileSync(newsPath, JSON.stringify(news, null, 2));
console.log(`✅ Generated ${news.length} news articles`);
console.log(`📁 Saved to: ${newsPath}`);

// Write insights.json
const insightsPath = path.join(contentDir, 'insights.json');
fs.writeFileSync(insightsPath, JSON.stringify(insights, null, 2));
console.log(`✅ Generated ${insights.length} insights`);
console.log(`📁 Saved to: ${insightsPath}`);

// Generate report markdown
const reportPath = path.join(contentDir, `report-${new Date().toISOString().split('T')[0]}.md`);
const reportContent = `# Daily Tech News Report
**Date:** ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}

## News Summary
${news.length} articles curated today covering AI, Machine Learning, Industry updates, Research, Products, and Technology.

## Top Stories
${news.slice(0, 5).map((n, i) => `${i + 1}. **${n.title}** (${n.category})`).join('\n')}

## Key Insights
${insights.map(i => `- ${i.title}: ${i.value}`).join('\n')}

---
*Generated automatically by Daily Tech News Generator*
`;

fs.writeFileSync(reportPath, reportContent);
console.log(`📄 Report saved to: ${reportPath}`);

console.log('\n✨ News generation complete!');
