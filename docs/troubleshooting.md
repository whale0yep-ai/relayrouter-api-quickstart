# Troubleshooting

## 401 Unauthorized

Possible causes:

- The API key is incorrect.
- The API key has expired or been disabled.
- The Authorization header is missing.
- The environment variable is not loaded.

Check:

```powershell
$env:RELAYROUTER_API_KEY
```

Do not print or share the value publicly.

## 404 or model_not_found

The selected model may not be available.

Open the current RelayRouter model list and update `RELAYROUTER_MODEL`.

## 429 Too Many Requests

Possible causes:

- Rate limit reached.
- Account balance is insufficient.
- Temporary upstream capacity limits.

Wait and try again, then check the account balance and service notices.

## Request timeout

Check:

- Network connection.
- API endpoint.
- Firewall or proxy configuration.
- Current service status.

## Invalid JSON or request format

Check that:

- The request uses `/v1/chat/completions`.
- `model` is included.
- `messages` is an array.
- The request body is valid JSON.

## Still need help?

Contact RelayRouter support:

https://api.relayrouter.ai/customersupport