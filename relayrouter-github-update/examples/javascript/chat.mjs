const apiKey = (process.env.RELAYROUTER_API_KEY || "").trim();
const baseUrl = (
  process.env.RELAYROUTER_BASE_URL ?? "https://api.relayrouter.ai/v1"
).trim().replace(/\/+$/, "");
const model = (process.env.RELAYROUTER_MODEL || "").trim();

if (!apiKey || apiKey === "your_api_key_here") {
  throw new Error("Set RELAYROUTER_API_KEY to your own API key.");
}

if (!model || model === "your_model_name") {
  throw new Error("Set RELAYROUTER_MODEL to an available model API identifier.");
}

if (!baseUrl) {
  throw new Error("RELAYROUTER_BASE_URL must not be empty.");
}

const response = await fetch(`${baseUrl}/chat/completions`, {
  method: "POST",
  signal: AbortSignal.timeout(60_000),
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    model,
    messages: [{ role: "user", content: "Hello from RelayRouter." }],
  }),
});

if (!response.ok) {
  const errorText = await response.text();
  throw new Error(`${response.status}: ${errorText}`);
}

const data = await response.json();
const content = data.choices?.[0]?.message?.content;

if (typeof content !== "string" || !content.trim()) {
  throw new Error("No text reply received. Check the model and response format.");
}

console.log(content);
