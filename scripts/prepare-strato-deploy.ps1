param(
  [string]$DistPath = "./dist",
  [string]$OutputZip = "./dist-strato-upload.zip"
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$projectRoot = Resolve-Path (Join-Path $root "..")
$distFullPath = Resolve-Path (Join-Path $projectRoot $DistPath)
$outputFullPath = Join-Path $projectRoot $OutputZip

if (Test-Path $outputFullPath) {
  Remove-Item $outputFullPath -Force
}

Compress-Archive -Path (Join-Path $distFullPath "*") -DestinationPath $outputFullPath -CompressionLevel Optimal

Write-Host "Strato upload archive created: $outputFullPath"
