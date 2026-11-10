# Troubleshooting

## 401 Unauthorized

Possible causes:

- The API key is incorrect, expired, or disabled.
- The `Authorization` header is missing.
- The environment variable was not loaded.

Confirm that `RELAYROUTER_API_KEY` is set, but never print or share its value publicly.

## 404 or `model_not_found`

The selected model may not be available. Open the current model list in the RelayRouter console and update `RELAYROUTER_MODEL`.

## 429 Too Many Requests

Possible causes include a rate limit, insufficient account balance, or temporary upstream capacity. Wait and retry, then check your balance and service notices.

## Request timeout or connection failure

Check:

- Your network, firewall, and proxy settings.
- The endpoint selected for your region.
- Current service notices in the RelayRouter console.

Common endpoints:

- Mainland China: `https://api.relayrouter.app/v1`
- Global: `https://api.relayrouter.ai/v1`

If your console shows a different endpoint, use the console value.

## Invalid JSON or request format

Check that:

- The request uses `/v1/chat/completions` through the configured base URL.
- `model` is included.
- `messages` is an array.
- The request body is valid JSON.

## Still need help?

Use the support or contact option shown in your RelayRouter console.
