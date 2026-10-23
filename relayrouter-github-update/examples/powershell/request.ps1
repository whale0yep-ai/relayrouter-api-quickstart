$ErrorActionPreference = "Stop"

$apiKey = if ($env:RELAYROUTER_API_KEY) { $env:RELAYROUTER_API_KEY.Trim() } else { "" }
$baseUrl = if ($null -ne $env:RELAYROUTER_BASE_URL) {
    $env:RELAYROUTER_BASE_URL.Trim().TrimEnd("/")
} else {
    "https://api.relayrouter.ai/v1"
}
$model = if ($env:RELAYROUTER_MODEL) { $env:RELAYROUTER_MODEL.Trim() } else { "" }

if (-not $apiKey -or $apiKey -eq "your_api_key_here") {
    throw "Set RELAYROUTER_API_KEY to your own API key."
}

if (-not $model -or $model -eq "your_model_name") {
    throw "Set RELAYROUTER_MODEL to an available model API identifier."
}

if (-not $baseUrl) {
    throw "RELAYROUTER_BASE_URL must not be empty."
}

$headers = @{
    Authorization = "Bearer $apiKey"
}

$body = @{
    model = $model
    messages = @(
        @{ role = "user"; content = "Hello from RelayRouter." }
    )
} | ConvertTo-Json -Depth 5

$response = Invoke-RestMethod `
    -Uri "$baseUrl/chat/completions" `
    -Method Post `
    -Headers $headers `
    -ContentType "application/json; charset=utf-8" `
    -Body $body `
    -TimeoutSec 60

$content = if ($response.choices -and $response.choices.Count -gt 0) {
    $response.choices[0].message.content
} else {
    $null
}

if ($content -isnot [string] -or [string]::IsNullOrWhiteSpace($content)) {
    throw "No text reply received. Check the model and response format."
}

$content
