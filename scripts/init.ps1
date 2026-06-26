Write-Host "=== AI Engineering System Initialization ===" -ForegroundColor Cyan
Write-Host ""

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

# Check Node/npm
$nodeVer = node --version 2>$null
$npmVer = npm --version 2>$null
if ($nodeVer -and $npmVer) {
    Write-Host "[OK] Node $nodeVer / npm $npmVer" -ForegroundColor Green
} else {
    Write-Host "[WARN] Node.js/npm not found" -ForegroundColor Yellow
}

# Check dependencies
if (Test-Path "node_modules") {
    Write-Host "[OK] Dependencies installed" -ForegroundColor Green
} else {
    Write-Host "[INFO] Running npm install..." -ForegroundColor Yellow
    npm install
}

# Verify system structure
$dirs = @(".memory", "rules", "knowledge", "docs", "scripts")
$allOk = $true
foreach ($dir in $dirs) {
    if (Test-Path $dir) {
        Write-Host "[OK] $dir/" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $dir/" -ForegroundColor Red
        $allOk = $false
    }
}

# Verify key files
$files = @(
    ".memory\SESSION.md",
    ".memory\CHANGELOG.md",
    ".memory\MEMORY_INDEX.md",
    "rules\ENGINEERING.md",
    "rules\SECURITY.md",
    "knowledge\PROJECT.md",
    "docs\SYSTEM_OVERVIEW.md",
    "docs\ARCHITECTURE.md",
    "docs\WORKFLOW_STRATEGY.md",
    "docs\DEPLOYMENT_FLOW.md",
    "docs\GIT_STRATEGY.md",
    "docs\MEMORY_STRATEGY.md",
    "scripts\backup.ps1",
    "scripts\init.ps1",
    "scripts\status.ps1"
)
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "[OK] $file" -ForegroundColor Green
    } else {
        Write-Host "[MISSING] $file" -ForegroundColor Red
        $allOk = $false
    }
}

Write-Host ""
if ($allOk) {
    Write-Host "=== System initialized successfully ===" -ForegroundColor Cyan
} else {
    Write-Host "=== System incomplete - check missing items ===" -ForegroundColor Yellow
}
