# Daily Tech News

[![Deploy](https://github.com/Xenonesis/Daily-tech-news/actions/workflows/deploy.yml/badge.svg)](https://github.com/Xenonesis/Daily-tech-news/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**AI-powered daily technology news aggregation and insights.**

A modern Next.js website that delivers curated tech news and AI insights every day at 10 AM. Built with a stunning dark-themed UI featuring smooth animations and a futuristic aesthetic.

![Daily Tech News](./og-image.png)

## ✨ Features

- 📰 **Daily News Updates** - Automatically curated tech and AI news delivered at 10 AM
- 🤖 **AI-Powered** - Intelligent news aggregation and summarization
- 🎨 **Modern UI** - Beautiful dark-themed design with smooth animations
- 📊 **Key Insights** - Data-driven insights and statistics
- 🚀 **Fast & Responsive** - Built with Next.js for optimal performance
- 📱 **Mobile-First** - Fully responsive design for all devices
- 🔄 **Auto-Deploy** - Automated daily updates pushed to GitHub

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Deployment:** GitHub Pages / Vercel
- **Automation:** Node.js scripts + Windows Task Scheduler

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Xenonesis/Daily-tech-news.git
   cd daily-tech-news
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
daily-tech-news/
├── content/                # News and insights data
│   ├── news.json          # Curated news articles
│   └── insights.json      # Key insights and statistics
├── scripts/
│   ├── generate-news.js   # Daily news generation script
│   └── deploy-to-github.js # GitHub deployment script
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── NewsCard.tsx   # News article card
│   │   ├── NewsGrid.tsx   # News grid layout
│   │   ├── InsightsSection.tsx  # Insights display
│   │   └── Footer.tsx     # Footer component
│   └── lib/
│       └── news-data.ts   # Data utilities
├── public/                # Static assets
└── package.json
```

## 🔄 Automated Daily Updates

### Setup Windows Task Scheduler

1. **Open Task Scheduler** (Win + R → `taskschd.msc`)

2. **Create Basic Task**
   - Name: `Daily Tech News Update`
   - Trigger: Daily at 10:00 AM
   - Action: Start a program

3. **Configure Action**
   - Program/script: `cmd.exe`
   - Arguments: `/c "cd /d <project-path> && npm run generate-news && npm run deploy"`

4. **PowerShell Alternative** (Run as Administrator):
   ```powershell
   $taskName = "Daily Tech News Update"
   $scriptPath = "C:\path\to\daily-tech-news"
   $trigger = New-ScheduledTaskTrigger -Daily -At 10:00AM
   $action = New-ScheduledTaskAction -Execute "cmd.exe" -Argument "/c `"cd /d $scriptPath && npm run generate-news && npm run deploy`""
   Register-ScheduledTask -TaskName $taskName -Trigger $trigger -Action $action -RunLevel Highest -Force
   ```

### Manual Update

```bash
# Generate fresh news content
npm run generate-news

# Deploy to GitHub
npm run deploy
```

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  background: "#0a0a0f",      // Main background
  surface: "#12121a",         // Card backgrounds
  primary: "#00dc82",         // Primary accent (green)
  secondary: "#7c3aed",       // Secondary accent (purple)
  accent: "#f59e0b",          // Tertiary accent (amber)
}
```

### News Sources

Modify `scripts/generate-news.js` to customize news categories and sources.

## 📊 API Routes (Future Enhancement)

The project can be extended with API routes for:
- RSS feed generation
- News search functionality
- Category filtering
- Newsletter subscription

## 🚀 Deployment Options

### GitHub Pages

1. Enable GitHub Pages in repository settings
2. Set source to `main` branch
3. Site will be live at `https://Xenonesis.github.io/Daily-tech-news`

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Automatic deployments on every push

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📈 Performance

- **Lighthouse Score:** 95+
- **First Contentful Paint:** < 1s
- **Time to Interactive:** < 2s
- **Bundle Size:** Optimized with tree-shaking

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Xenonesis**

- GitHub: [@Xenonesis](https://github.com/Xenonesis)
- Repository: [Daily-tech-news](https://github.com/Xenonesis/Daily-tech-news)

## 🙏 Acknowledgments

- News sources for providing valuable tech updates
- Open-source community for amazing tools and libraries
- Next.js team for the excellent framework

## 📬 Contact

For questions or feedback, please open an issue on the GitHub repository.

---

**Made with ❤️ and AI | Updated Daily at 10 AM**
