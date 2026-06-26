Write-Host "=== AI Engineering System Status ===" -ForegroundColor Cyan
Write-Host ""

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

# Git status
$gitBranch = git branch --show-current 2>$null
$gitStatus = git status --short 2>$null
Write-Host "Repository: arizona-website" -ForegroundColor White
Write-Host "Branch: $gitBranch" -ForegroundColor White
Write-Host "Uncommitted: $(($gitStatus | Measure-Object).Count) file(s)" -ForegroundColor White
Write-Host ""

# System structure
Write-Host "--- System Structure ---" -ForegroundColor Yellow
$dirs = @(".memory", "rules", "knowledge", "docs", "scripts")
foreach ($dir in $dirs) {
    if (Test-Path $dir) { Write-Host "[OK] $dir/" -ForegroundColor Green }
}
Write-Host ""

# Last session info
if (Test-Path ".memory\SESSION.md") {
    $sessionContent = Get-Content ".memory\SESSION.md" -Raw
    if ($sessionContent -match 'Focus:\s*(.+)') {
        Write-Host "Last Focus: $($matches[1])" -ForegroundColor Cyan
    }
}

# Build status
if (Test-Path "dist") {
    Write-Host "Build: Present (dist/ exists)" -ForegroundColor Green
} else {
    Write-Host "Build: None (run npm run build)" -ForegroundColor Yellow
}
Write-Host ""

Write-Host "=== Status Check Complete ===" -ForegroundColor Cyan
