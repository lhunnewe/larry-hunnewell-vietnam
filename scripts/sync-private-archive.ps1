# Mirrors the gitignored private/ family archive to the NAS, next to the original slide scans.
# Run from anywhere:  powershell -File scripts\sync-private-archive.ps1
# /MIR makes the NAS copy exactly match private/ — deletions here delete there too.

$source = Join-Path $PSScriptRoot "..\private"
$dest = "W:\Shared Photos\1964-1965 Vietnam War Photos\Private Archive"

if (-not (Test-Path $source)) { Write-Error "private/ not found at $source"; exit 1 }
if (-not (Test-Path "W:\")) { Write-Error "NAS drive W: is not connected"; exit 1 }

robocopy $source $dest /MIR /R:2 /W:5 /NP
if ($LASTEXITCODE -lt 8) {
    Write-Host "Sync OK ($(Get-Date -Format 'yyyy-MM-dd HH:mm')) -> $dest"
    exit 0
} else {
    Write-Error "robocopy failed with exit code $LASTEXITCODE"
    exit $LASTEXITCODE
}
