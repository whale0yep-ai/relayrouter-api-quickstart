<div lang="en" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
  &nbsp;|&nbsp;
  <strong><a lang="en" translate="no" href="./README.md">English (EN)</a></strong>
  &nbsp;|&nbsp;
  <a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a>
  &nbsp;|&nbsp;
  <a lang="ko" translate="no" href="./README.ko.md">한국어 (KO)</a>
  &nbsp;|&nbsp;
  <a lang="ja" translate="no" href="./README.ja.md">日本語 (JA)</a>
  &nbsp;|&nbsp;
  <a lang="es" translate="no" href="./README.es.md">Español (ES)</a>
  &nbsp;|&nbsp;
  <a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>Current language: English (EN). If this page appears in another language, disable automatic translation for github.com.</sub></p>

<p align="center">
  <img src="./assets/relayrouter-hero.png" alt="RelayRouter API Quickstart" width="100%">
</p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Register at relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Register at relayrouter.ai" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-OpenAI%20compatible-2563eb" alt="OpenAI-compatible API">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>Tip:</strong> Third-party sign-in is supported. Open a registration page, select Sign in at the bottom, then choose the GitHub, Google, or Linux DO icon.

> ℹ️ <strong>Note:</strong> The registration links contain the referral code `aff=xc9N`. Registration may be credited to the repository owner; it does not change your service price.

## Why RelayRouter?

RelayRouter provides one OpenAI-compatible API for multiple model providers, so you can spend less time integrating separate SDKs and more time building your product.

| Capability | What it gives you |
| --- | --- |
| One API format | Call GPT, Claude, Gemini, DeepSeek, Qwen, and other supported models through a familiar interface. |
| Usage-based billing | Pay for the usage recorded in your RelayRouter console. |
| Centralized management | Keep API keys, model access, usage, and billing in one place. |
| Flexible connection URLs | Try the documented RelayRouter URLs in order when a client expects a different `BASE_URL` format. |

## 5-minute quickstart

### 1. Register and create an API key

Choose either registration page:

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

After registration, create an API key in the RelayRouter console.

### 2. Choose the connection URL

Different clients may require different `BASE_URL` formats. Try these addresses in order:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

The SDK examples in this repository use `https://api.relayrouter.app/v1` by default. If a client asks for a complete chat-completions endpoint instead of a base URL, use the third address.

### 3. Configure the project

```bash
cp .env.example .env
```

Edit `.env`:

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. Run a request

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

Minimal Python example:

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["RELAYROUTER_API_KEY"],
    base_url=os.getenv("RELAYROUTER_BASE_URL", "https://api.relayrouter.app/v1"),
)

response = client.chat.completions.create(
    model=os.environ["RELAYROUTER_MODEL"],
    messages=[{"role": "user", "content": "Hello from RelayRouter!"}],
)

print(response.choices[0].message.content)
```

## Ready-to-run examples

| Language | File | Run command |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Documentation and help

- [Detailed quickstart](./docs/quickstart.md)
- [FAQ](./docs/faq.md)
- [Troubleshooting](./docs/troubleshooting.md)
- [Security policy](./SECURITY.md)

## Security

Never commit your API key. Keep it in `.env` or your deployment platform's secret manager. The included `.gitignore` already excludes `.env`.

<p align="center"><strong>One API key. More models. Less integration work.</strong></p>

</div>
