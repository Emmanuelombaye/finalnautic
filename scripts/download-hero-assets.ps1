# Downloads Nautic Health hero videos + brand assets into /public/assets
# Run once:  powershell -ExecutionPolicy Bypass -File scripts/download-hero-assets.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$brandDir = Join-Path $root "public\assets\brand"
$heroDir = Join-Path $root "public\assets\hero"

New-Item -ItemType Directory -Force -Path $brandDir, $heroDir | Out-Null

$files = @{
  "public\assets\brand\nautic-logo.png" = "https://nautichealth.com/__l5e/assets-v1/b712520e-fb27-4b72-a985-cc62b0c748b8/nautic-logo.png"
  "public\assets\hero\nh-nature-poster.jpg" = "https://nautichealth.com/assets/nh-nature-poster-BrTriUD6.jpg"
  "public\assets\hero\nh-nature-01.mp4" = "https://nautichealth.com/__l5e/assets-v1/26a32b8b-2922-4541-b133-91b34e012df4/nh-nature-01.mp4"
  "public\assets\hero\nh-nature-02.mp4" = "https://nautichealth.com/__l5e/assets-v1/81eed8f8-44ac-476f-a0ff-45ad190fc40f/nh-nature-02.mp4"
  "public\assets\hero\nh-nature-03.mp4" = "https://nautichealth.com/__l5e/assets-v1/df731f97-0d8e-4c21-965a-a4dcc31808b0/nh-nature-03.mp4"
  "public\assets\hero\nh-nature-04.mp4" = "https://nautichealth.com/__l5e/assets-v1/dd9fe192-9187-4e52-b7e9-c3cc98b6c000/nh-nature-04.mp4"
}

foreach ($rel in $files.Keys) {
  $out = Join-Path $root $rel
  $url = $files[$rel]
  if (Test-Path $out) {
    Write-Host "skip (exists): $rel"
    continue
  }
  Write-Host "downloading: $rel ..."
  curl.exe --fail --max-time 300 -L -o $out $url
  Write-Host "done: $rel ($((Get-Item $out).Length) bytes)"
}

Write-Host "`nAll assets ready in public/assets/"
