# Daily Tech News - Setup Guide

## 🚀 Quick Start

### 1. Initialize the Project

```bash
cd daily-tech-news
npm install
```

### 2. Set Up GitHub Repository

```bash
# Initialize git (if not already done)
git init
git checkout -b main

# Add remote repository
git remote add origin https://github.com/Xenonesis/Daily-tech-news.git

# Initial commit
git add .
git commit -m "Initial commit: Daily Tech News website"
git push -u origin main
```

### 3. Configure GitHub Authentication

For automated pushes, you have two options:

#### Option A: Use GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` scope
3. Store the token:
   ```bash
   git config --global credential.helper store
   ```
4. Next push will prompt for credentials (use token as password)

#### Option B: Use SSH Keys

1. Generate SSH key:
   ```bash
   ssh-keygen -t ed25519 -C "your-email@example.com"
   ```
2. Add public key to GitHub Settings → SSH and GPG keys
3. Update remote URL:
   ```bash
   git remote set-url origin git@github.com:Xenonesis/Daily-tech-news.git
   ```

### 4. Set Up Windows Task Scheduler

#### Method 1: Using Task Scheduler GUI

1. Press `Win + R`, type `taskschd.msc`, press Enter
2. Click "Create Basic Task..." in the right panel
3. Configure:
   - **Name:** Daily Tech News Update
   - **Trigger:** Daily
   - **Start time:** 10:00:00 AM
   - **Action:** Start a program
   - **Program/script:** `cmd.exe`
   - **Arguments:** 
     ```
     /c "cd /d "C:\Users\addy\AppData\Roaming\AionUi\aionui\qwen-temp-1773759943760\daily-tech-news" && npm run generate-news && node scripts/deploy-to-github.js"
     ```
4. Finish and test the task

#### Method 2: Using PowerShell (Administrator)

```powershell
$taskName = "Daily Tech News Update"
$projectPath = "C:\Users\addy\AppData\Roaming\AionUi\aionui\qwen-temp-1773759943760\daily-tech-news"
$scriptPath = "$projectPath\scripts\update-and-deploy.bat"

# Create trigger (daily at 10 AM)
$trigger = New-ScheduledTaskTrigger -Daily -At 10:00AM

# Create action
$action = New-ScheduledTaskAction -Execute $scriptPath -WorkingDirectory $projectPath

# Create settings
$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -RunOnlyIfNetworkAvailable

# Register the task
Register-ScheduledTask `
  -TaskName $taskName `
  -Trigger $trigger `
  -Action $action `
  -Settings $settings `
  -RunLevel Highest `
  -Force

Write-Host "Task '$taskName' created successfully!"
```

### 5. Test the Setup

#### Manual Test Run

```bash
# Generate news content
npm run generate-news

# Verify content was created
cat content/news.json
cat content/insights.json

# Build the application
npm run build

# Deploy to GitHub
node scripts/deploy-to-github.js
```

#### Verify GitHub Deployment

1. Visit: https://github.com/Xenonesis/Daily-tech-news
2. Check for recent commit with today's date
3. Verify `content/news.json` and `content/insights.json` are updated

### 6. Deploy the Website

#### Option A: Vercel (Recommended)

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically on every push

#### Option B: GitHub Pages

1. Go to repository Settings → Pages
2. Source: Deploy from branch
3. Branch: main, Folder: / (root)
4. Site will be live at `https://Xenonesis.github.io/Daily-tech-news`

#### Option C: Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# News Generation
npm run generate-news  # Generate daily news content

# Deployment
npm run deploy       # Build and deploy to GitHub
```

## 🔧 Troubleshooting

### Git Authentication Issues

```bash
# Clear stored credentials
git credential-manager erase

# Reconfigure
git config --global --unset credential.helper
git config --global credential.helper store
```

### Node.js Version Issues

Ensure you're using Node.js 18+:
```bash
node --version  # Should be v18.0.0 or higher
```

### Build Fails

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Task Scheduler Not Running

1. Open Task Scheduler
2. Find "Daily Tech News Update"
3. Right-click → Run
4. Check "History" tab for errors

## 📊 Monitoring

### Check Last Update

```bash
# View latest commit
git log -1

# Check content timestamp
cat content/news.json | jq '.[0].publishedAt'
```

### View Logs

```bash
# Windows Event Viewer for Task Scheduler
eventvwr.msc

# Navigate to:
# Applications and Services Logs → Microsoft → Windows → TaskScheduler
```

## 🎨 Customization

### Change Update Time

Edit the scheduled task:
```powershell
$trigger = New-ScheduledTaskTrigger -Daily -At 9:00AM  # Change time
Set-ScheduledTask -TaskName "Daily Tech News Update" -Trigger $trigger
```

### Modify News Categories

Edit `scripts/generate-news.js` and update the `newsTemplates` array.

### Adjust UI Theme

Modify `tailwind.config.ts` colors section.

## ✅ Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] GitHub repository created
- [ ] Git remote configured
- [ ] Authentication set up (token or SSH)
- [ ] Initial push completed
- [ ] Task Scheduler configured
- [ ] Manual test run successful
- [ ] Website deployed (Vercel/GitHub Pages)

## 📞 Support

For issues or questions:
1. Check the [README.md](./README.md)
2. Review this setup guide
3. Open an issue on GitHub

---

**Ready to go! Your daily tech news website will update automatically at 10 AM every day.** 🚀
