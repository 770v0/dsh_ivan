<#
  Remove the ORBIT STAGE client plugin from the desktop profile.

  This only removes the loader row; the package stays installed so a re-enable
  is a one-line edit. Run from PowerShell, then restart DeepSeek Harness.
#>

$ErrorActionPreference = 'Stop'
$profileDir = Join-Path $env:USERPROFILE '.dsh\profiles\desktop'
$patchPath = Join-Path $profileDir 'cordis.patch.yml'
$backupPath = "$patchPath.orbit-stage.bak"

if (-not (Test-Path -LiteralPath $patchPath)) {
  throw "Profile patch not found: $patchPath"
}

Copy-Item -LiteralPath $patchPath -Destination $backupPath -Force
$text = Get-Content -LiteralPath $patchPath -Raw

$pattern = '(?ms)^# ORBIT STAGE.*?^- insert:\s*\r?\n\s+- id: orbit-stage\s*\r?\n\s+name: dsh-theme-orbit-stage\s*\r?\n?'
$updated = [regex]::Replace($text, $pattern, '')

if ($updated -eq $text) {
  Write-Host "No orbit-stage block found; nothing changed." -ForegroundColor Yellow
  exit 0
}

Set-Content -LiteralPath $patchPath -Value $updated -NoNewline -Encoding UTF8
Write-Host "Removed orbit-stage from $patchPath" -ForegroundColor Green
Write-Host "Backup: $backupPath"
Write-Host "Restart DeepSeek Harness to unload the theme."
