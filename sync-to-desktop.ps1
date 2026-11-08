<#
  Copy the built theme bundle into the desktop profile.

  The desktop profile's node_modules entry is a copy, not a link, so rebuilding
  the workspace alone does not change what Harness loads. Run this after every
  build, then fully restart Harness.
#>

$ErrorActionPreference = 'Stop'

$src = Join-Path $PSScriptRoot 'lib\client.js'
$dst = Join-Path $env:USERPROFILE '.dsh\profiles\desktop\node_modules\dsh-theme-orbit-stage\lib\client.js'

if (-not (Test-Path -LiteralPath $src)) {
  throw "Built bundle not found: $src (run 'node build.mjs' first)"
}

if (-not (Test-Path -LiteralPath (Split-Path -Parent $dst))) {
  throw "Desktop profile does not have the theme installed: $dst"
}

Copy-Item -LiteralPath $src -Destination $dst -Force

$srcHash = (Get-FileHash -LiteralPath $src -Algorithm SHA256).Hash
$dstHash = (Get-FileHash -LiteralPath $dst -Algorithm SHA256).Hash
if ($srcHash -ne $dstHash) {
  throw "Sync verification failed: $srcHash != $dstHash"
}

Write-Host "Synced ORBIT STAGE bundle to desktop profile." -ForegroundColor Green
Write-Host "Now fully quit and reopen DeepSeek Harness."
