import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

api_key = os.getenv("RELAYROUTER_API_KEY")
base_url = os.getenv(
    "RELAYROUTER_BASE_URL",
    "https://api.relayrouter.ai/v1",
)
model = os.getenv("RELAYROUTER_MODEL")

if not api_key:
    raise RuntimeError("RELAYROUTER_API_KEY is not configured.")

if not model or model == "your_model_name":
    raise RuntimeError(
        "Set RELAYROUTER_MODEL to a currently available model name."
    )

client = OpenAI(
    api_key=api_key,
    base_url=base_url,
)

response = client.chat.completions.create(
    model=model,
    messages=[
        {
            "role": "user",
            "content": "Hello from RelayRouter.",
        }
    ],
)

print(response.choices[0].message.content)