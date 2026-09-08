# Quickstart

## 1. Register

Register at:

https://api.relayrouter.ai/register?aff=SukO

## 2. Create an API key

After signing in:

1. Open the RelayRouter console.
2. Create an API key.
3. Copy the key securely.
4. Do not publish the key.

## 3. Select a model

Open the RelayRouter model list and copy a currently available model name.

Do not assume that a model name will remain available permanently.

## 4. Configure the environment

PowerShell example:

```powershell
$env:RELAYROUTER_API_KEY = "your_api_key_here"
$env:RELAYROUTER_BASE_URL = "https://api.relayrouter.ai/v1"
$env:RELAYROUTER_MODEL = "your_model_name"
```

Use your actual key only in your local environment.

## 5. Run the examples

Python:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
python examples\python\chat.py
```

JavaScript:

```powershell
node examples\javascript\chat.mjs
```

PowerShell:

```powershell
.\examples\powershell\request.ps1
```

## 6. Check the result

A successful request should return a model response.

If the request fails, check the model name, account balance, API key, network connection, and rate limits.