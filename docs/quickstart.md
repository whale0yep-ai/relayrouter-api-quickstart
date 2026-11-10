# Quickstart

## 1. Register

Choose the site that works best for your location:

| Region | Registration | Common API base URL |
| --- | --- | --- |
| Mainland China | [relayrouter.app](https://relayrouter.app/register?aff=xc9N) | `https://api.relayrouter.app/v1` |
| Global | [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) | `https://api.relayrouter.ai/v1` |

The registration links contain the referral code `aff=xc9N`.

### Sign in with another account

On the registration page, select **Sign in** at the bottom. On the login page, choose the **GitHub**, **Google**, or **Linux DO** icon to use that account.

## 2. Create an API key

After signing in:

1. Open the RelayRouter console.
2. Create an API key.
3. Copy the key to a secure location.
4. Never publish the key.

## 3. Select a model

Open the current model list in the RelayRouter console and copy an available model name. Model availability can change, so use the value currently shown in your account.

## 4. Configure the environment

Copy the example configuration:

```powershell
Copy-Item .env.example .env
```

Then edit `.env`:

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

Use `https://api.relayrouter.app/v1` for the Mainland China endpoint. If your console shows a different endpoint, use the console value.

## 5. Run an example

Python:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python examples\python\chat.py
```

JavaScript:

```powershell
node examples\javascript\chat.mjs
```

PowerShell:

```powershell
pwsh examples\powershell\request.ps1
```

## 6. Check the result

A successful request returns a model response. If it fails, check the model name, account balance, API key, endpoint, network connection, and rate limits.
