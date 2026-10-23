import os
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv(Path(__file__).resolve().parents[2] / ".env")

api_key = os.getenv("RELAYROUTER_API_KEY", "").strip()
base_url = os.getenv(
    "RELAYROUTER_BASE_URL", "https://api.relayrouter.ai/v1"
).strip().rstrip("/")
model = os.getenv("RELAYROUTER_MODEL", "").strip()

if not api_key or api_key == "your_api_key_here":
    raise RuntimeError("Set RELAYROUTER_API_KEY to your own API key.")

if not model or model == "your_model_name":
    raise RuntimeError("Set RELAYROUTER_MODEL to an available model API identifier.")

if not base_url:
    raise RuntimeError("RELAYROUTER_BASE_URL must not be empty.")

client = OpenAI(api_key=api_key, base_url=base_url, timeout=60.0, max_retries=0)

response = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": "Hello from RelayRouter."}],
)

content = response.choices[0].message.content if response.choices else None
if not isinstance(content, str) or not content.strip():
    raise RuntimeError("No text reply received. Check the model and response format.")

print(content)
