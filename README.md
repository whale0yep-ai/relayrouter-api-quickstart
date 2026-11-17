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

> [!IMPORTANT]
> **Announcement snapshot**
>
> Sign in to the RelayRouter console and use the bell in the upper-right corner to see model launches, price changes, temporary incidents, model removals, and campaigns.
>
> [Open RelayRouter and view announcements →](https://relayrouter.app/register?aff=xc9N)

## Why RelayRouter?

RelayRouter provides one OpenAI-compatible API for multiple model providers, so you can spend less time integrating separate SDKs and more time building your product.

| Capability | What it gives you |
| --- | --- |
| One API format | Call GPT, Claude, Gemini, DeepSeek, Qwen, and other supported models through a familiar interface. |
| Usage-based billing | Pay for the usage recorded in your RelayRouter console. |
| Centralized management | Keep API keys, model access, usage, and billing in one place. |
| Organization management | Create an organization, invite members, allocate balances, and review member usage and transfer records. |
| Flexible connection URLs | Try the documented RelayRouter URLs in order when a client expects a different `BASE_URL` format. |

## What do you want to accomplish?

Choose a goal and jump directly to its tutorial. You do not need to read the whole page from top to bottom.

| Goal | Goal |
| --- | --- |
| **[Make your first API call →](#first-api-call)**<br><sub>About 5 minutes · API key → BASE_URL → first request</sub> | **[Redeem a code and check the balance →](#redeem-code)**<br><sub>About 2 minutes · Redeem credit and verify the account balance</sub> |
| **[Manage a team or organization →](#organization-management)**<br><sub>About 8 minutes · Create → invite → allocate → review usage</sub> | **[Connect a client →](#client-integration)**<br><sub>ChatGPT, Claude, Cherry Studio, Gemini, and DeepSeek Harness</sub> |

## Basic tutorials

<a id="first-api-call"></a>
<details open>
<summary><strong>🔑 Create an API key and make the first request</strong></summary>

1. Register through [relayrouter.app](https://relayrouter.app/register?aff=xc9N) or [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N).
2. Open the RelayRouter console, go to **API Tokens**, and create and copy a new key.
3. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

4. Fill in `.env`:

   ```dotenv
   RELAYROUTER_API_KEY=your_api_key_here
   RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
   RELAYROUTER_MODEL=your_model_name
   ```

5. Run the included Python example:

   ```bash
   python -m pip install -r requirements.txt
   python examples/python/chat.py
   ```

</details>

<a id="redeem-code"></a>
<details>
<summary><strong>🎁 Redeem a code and check the balance</strong></summary>

1. Sign in to the RelayRouter console.
2. Open the redemption entry in the account or funds area.
3. Enter the redemption code and confirm it after checking the account information.
4. Return to the funds page and verify the balance or transaction record.

</details>

<a id="organization-management"></a>
<details>
<summary><strong>👥 Manage organization members and usage</strong></summary>

1. Open **My Organization** in the console and create or join an organization.
2. Select **Invite member** and send the invitation to the intended account.
3. Use the organization member list to allocate or transfer balances.
4. Review the **Usage** and **Transfer records** tabs to audit consumption and balance movements.

> Only grant organization access and balances to accounts you trust.

</details>

<a id="client-integration"></a>
## Client integration tutorials

Different clients may ask for a base URL or a complete chat-completions endpoint. Start with `https://api.relayrouter.app/v1` and use the [quick reference](#quick-reference) if the client expects another format.

<details>
<summary><strong>ChatGPT shortcut</strong></summary>

Open the shortcut's provider settings, choose a custom or OpenAI-compatible provider, enter the RelayRouter API key and endpoint, and select a supported model.

</details>

<details>
<summary><strong>Claude shortcut</strong></summary>

Open the shortcut's provider settings, choose a custom or OpenAI-compatible provider, enter the RelayRouter API key and endpoint, and select a supported model.

</details>

<details open>
<summary><strong>Cherry Studio</strong></summary>

**API endpoint:** `https://api.relayrouter.app/v1`

1. Add a custom OpenAI-compatible provider in Cherry Studio.
2. Paste the `BASE_URL` and your RelayRouter API key.
3. Add a supported model, save the configuration, and send a test message.

</details>

<details>
<summary><strong>Gemini</strong></summary>

To use Gemini models through RelayRouter, configure an OpenAI-compatible custom provider with the RelayRouter endpoint and key, then select a supported Gemini model identifier.

</details>

<details>
<summary><strong>DeepSeek Harness</strong></summary>

Set the harness provider to an OpenAI-compatible endpoint, enter the RelayRouter `BASE_URL` and API key, then select a supported DeepSeek model and run a connection test.

</details>

<a id="quick-reference"></a>
## Quick reference

Different clients may require different `BASE_URL` formats. Try these addresses in order:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

The SDK examples in this repository use `https://api.relayrouter.app/v1` by default. If a client asks for a complete chat-completions endpoint instead of a base URL, use the third address.

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
