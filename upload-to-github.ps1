param(
    [string]$Message = "Auto upload $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

$ErrorActionPreference = "Stop"

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    throw "Git is not installed or is not available in PATH."
}

$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

git status --short | Out-Host

$changes = git status --porcelain
if (-not $changes) {
    Write-Host "No changes to upload."
    exit 0
}

git add .
git commit -m $Message
git push -u origin main

Write-Host "Upload complete."
