param(
    [string]$Path,
    [string]$Label = "manual"
)

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = ".memory\backups"
$root = Split-Path -Parent $PSScriptRoot

if (-not (Test-Path "$root\$backupDir")) {
    New-Item -ItemType Directory -Path "$root\$backupDir" -Force | Out-Null
}

if ($Path) {
    $target = "$root\$Path"
    if (Test-Path $target) {
        $filename = [System.IO.Path]::GetFileName($target)
        $backupFile = "$root\$backupDir\${timestamp}_${Label}_${filename}"
        Copy-Item -LiteralPath $target -Destination $backupFile
        Write-Host "Backup created: $backupFile"
    } else {
        Write-Host "ERROR: Path not found: $target"
        exit 1
    }
} else {
    # Backup all config files
    $configs = @(
        "netlify.toml",
        "wrangler.jsonc",
        "vite.config.ts",
        "tsconfig.json",
        "package.json"
    )
    foreach ($cfg in $configs) {
        $backupFile = "$root\$backupDir\${timestamp}_${Label}_${cfg}"
        Copy-Item -LiteralPath "$root\$cfg" -Destination $backupFile
        Write-Host "Backup: $backupFile"
    }
}
