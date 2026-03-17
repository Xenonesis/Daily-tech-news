@echo off
REM Daily Tech News - Automated Update Script
REM Schedule this to run daily at 10:00 AM

cd /d "%~dp0.."

echo ========================================
echo  Daily Tech News Update
echo  %DATE% %TIME%
echo ========================================

echo.
echo [1/3] Generating fresh news content...
call npm run generate-news

echo.
echo [2/3] Building the application...
call npm run build

echo.
echo [3/3] Deploying to GitHub...
node scripts/deploy-to-github.js

echo.
echo ========================================
echo  Update Complete!
echo  %DATE% %TIME%
echo ========================================
