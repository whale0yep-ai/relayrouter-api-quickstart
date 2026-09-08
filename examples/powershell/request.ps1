$ErrorActionPreference = "Stop"

$apiKey = $env:RELAYROUTER_API_KEY
$baseUrl = if ($env:RELAYROUTER_BASE_URL) {
    $env:RELAYROUTER_BASE_URL
} else {
    "https://api.relayrouter.ai/v1"
}
$model = $env:RELAYROUTER_MODEL

if (-not $apiKey) {
    throw "RELAYROUTER_API_KEY is not configured."
}

if (-not $model -or $model -eq "your_model_name") {
    throw "Set RELAYROUTER_MODEL to a currently available model name."
}

$headers = @{
    Authorization = "Bearer $apiKey"
    "Content-Type" = "application/json"
}

$body = @{
    model = $model
    messages = @(
        @{
            role = "user"
            content = "Hello from RelayRouter."
        }
    )
} | ConvertTo-Json -Depth 5

$response = Invoke-RestMethod `
    -Uri "$baseUrl/chat/completions" `
    -Method Post `
    -Headers $headers `
    -Body $body

$response.choices[0].message.content