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
- The connection URL expected by your client.
- Current service notices in the RelayRouter console.

Try these addresses in order:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

The first two values are base URL formats. The third is the complete chat-completions endpoint and should be used only when the client expects a complete endpoint.

## Invalid JSON or request format

Check that:

- The request reaches `/v1/chat/completions` exactly once.
- `model` is included.
- `messages` is an array.
- The request body is valid JSON.

## Still need help?

Use the support or contact option shown in your RelayRouter console.
