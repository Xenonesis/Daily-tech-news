# Daily Tech News - Automated Update Setup
# Run this PowerShell script as Administrator to set up daily 10 AM updates

$taskName = "Daily Tech News Update"
$projectPath = "C:\Users\addy\AppData\Roaming\AionUi\aionui\qwen-temp-1773759943760\daily-tech-news"
$scriptPath = "$projectPath\scripts\update-and-deploy.bat"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Daily Tech News - Task Scheduler Setup" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if task already exists
$existingTask = Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue
if ($existingTask) {
    Write-Host "⚠️  Task '$taskName' already exists." -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (Y/N)"
    if ($overwrite -ne 'Y' -and $overwrite -ne 'y') {
        Write-Host "Setup cancelled." -ForegroundColor Yellow
        exit
    }
    Unregister-ScheduledTask -TaskName $taskName -Confirm:$false
    Write-Host "✓ Existing task removed." -ForegroundColor Green
}

Write-Host "Creating scheduled task..." -ForegroundColor Yellow

# Create trigger (daily at 10 AM)
$trigger = New-ScheduledTaskTrigger -Daily -At 10:00AM

# Create action
$action = New-ScheduledTaskAction -Execute $scriptPath -WorkingDirectory $projectPath

# Create settings
$settings = New-ScheduledTaskSettingsSet `
  -AllowStartIfOnBatteries `
  -DontStopIfGoingOnBatteries `
  -StartWhenAvailable `
  -RunOnlyIfNetworkAvailable `
  -ExecutionTimeLimit (New-TimeSpan -Hours 1)

# Create principal (run with highest privileges)
$principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType S4U -RunLevel Highest

# Register the task
try {
    Register-ScheduledTask `
      -TaskName $taskName `
      -Trigger $trigger `
      -Action $action `
      -Settings $settings `
      -Principal $principal `
      -Force `
      -ErrorAction Stop

    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Task created successfully!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Task Details:" -ForegroundColor Cyan
    Write-Host "  Name: $taskName"
    Write-Host "  Schedule: Daily at 10:00 AM"
    Write-Host "  Working Directory: $projectPath"
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "  1. Open Task Scheduler (taskschd.msc)"
    Write-Host "  2. Find '$taskName' in the task list"
    Write-Host "  3. Right-click → Run (to test)"
    Write-Host "  4. Check History tab for execution logs"
    Write-Host ""
    Write-Host "Repository: https://github.com/Xenonesis/Daily-tech-news" -ForegroundColor Blue
    Write-Host ""
} catch {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "✗ Error creating task!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "  1. Make sure you're running as Administrator"
    Write-Host "  2. Check if Task Scheduler service is running"
    Write-Host "  3. Verify the project path exists"
    Write-Host ""
    exit 1
}
