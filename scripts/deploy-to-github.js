/**
 * GitHub Deployment Script
 * Commits and pushes daily news updates to GitHub repository
 * 
 * Usage: node scripts/deploy-to-github.js
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const GITHUB_REPO = 'https://github.com/Xenonesis/Daily-tech-news.git';
const BRANCH = 'main';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, { 
      cwd: projectRoot, 
      stdio: 'pipe',
      encoding: 'utf-8',
      ...options 
    });
  } catch (error) {
    if (options.ignoreError) {
      return '';
    }
    throw error;
  }
}

async function deployToGitHub() {
  log('\n🚀 Starting GitHub deployment...\n', 'blue');

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  const commitDate = today.toISOString();

  try {
    // Check if git is initialized
    log('📁 Checking Git repository...', 'yellow');
    try {
      exec('git status', { ignoreError: false });
      log('✅ Git repository found', 'green');
    } catch {
      log('⚠️  Git not initialized. Initializing...', 'yellow');
      exec('git init');
      exec('git checkout -b main', { ignoreError: true });
    }

    // Configure git user (if not already set)
    try {
      exec('git config user.name', { ignoreError: false });
    } catch {
      log('⚙️  Configuring Git user...', 'yellow');
      exec('git config user.name "Daily Tech News Bot"');
      exec('git config user.email "bot@dailytechnews.com"');
    }

    // Add remote if not exists
    try {
      exec('git remote get-url origin', { ignoreError: false });
      log('✅ Remote origin configured', 'green');
    } catch {
      log('⚙️  Adding remote origin...', 'yellow');
      exec(`git remote add origin ${GITHUB_REPO}`);
    }

    // Stage all changes
    log('📦 Staging changes...', 'yellow');
    exec('git add -A');

    // Check if there are changes to commit
    const status = exec('git status --porcelain');
    if (!status.trim()) {
      log('✨ No changes to commit. Repository is up to date.', 'green');
      return;
    }

    // Create commit
    const commitMessage = `chore: Daily news update - ${dateStr}`;
    log(`📝 Creating commit: "${commitMessage}"`, 'yellow');
    exec(`git commit -m "${commitMessage}" --no-verify`, { ignoreError: true });

    // Pull latest changes
    log('📥 Pulling latest changes from remote...', 'yellow');
    exec(`git pull --rebase origin ${BRANCH}`, { ignoreError: true });

    // Push to GitHub
    log('🚀 Pushing to GitHub...', 'yellow');
    log(`📍 Repository: ${GITHUB_REPO}`, 'blue');
    log(`📍 Branch: ${BRANCH}`, 'blue');
    
    exec(`git push -u origin ${BRANCH}`);

    log('\n✅ Deployment successful!', 'green');
    log(`📊 Deployed at: ${commitDate}`, 'blue');
    log(`🔗 View at: https://github.com/Xenonesis/Daily-tech-news`, 'blue');
    log('');

  } catch (error) {
    log('\n❌ Deployment failed!', 'red');
    log(error.message, 'red');
    process.exit(1);
  }
}

// Run deployment
deployToGitHub();
