const apiKey = process.env.RELAYROUTER_API_KEY;
const baseUrl =
  process.env.RELAYROUTER_BASE_URL ||
  "https://api.relayrouter.ai/v1";
const model = process.env.RELAYROUTER_MODEL;

if (!apiKey) {
  throw new Error("RELAYROUTER_API_KEY is not configured.");
}

if (!model || model === "your_model_name") {
  throw new Error(
    "Set RELAYROUTER_MODEL to a currently available model name."
  );
}

const response = await fetch(`${baseUrl}/chat/completions`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model,
    messages: [
      {
        role: "user",
        content: "Hello from RelayRouter.",
      },
    ],
  }),
});

if (!response.ok) {
  const errorText = await response.text();
  throw new Error(`${response.status}: ${errorText}`);
}

const data = await response.json();
console.log(data.choices?.[0]?.message?.content);