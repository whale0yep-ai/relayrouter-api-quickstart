<p align="center">
  <a href="./README.zh-CN.md">中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README.ru.md">Русский</a> |
  <a href="./README.ko.md">한국어</a> |
  <a href="./README.ja.md">日本語</a> |
  <a href="./README.es.md">Español</a> |
  <strong>Deutsch</strong> |
  <a href="./README.id.md">Bahasa Indonesia</a>
</p>

<p align="center"><img src="./assets/relayrouter-hero.png" alt="RelayRouter API Schnellstart" width="100%"></p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Über relayrouter.app registrieren" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Über relayrouter.ai registrieren" height="48"></a>
</p>

> [!TIP]
> **Anmeldung über Drittanbieter wird unterstützt.** Wähle auf der Registrierungsseite unten **Sign in** und danach auf der Anmeldeseite das Symbol für **GitHub**, **Google** oder **Linux DO**.

> [!NOTE]
> Die Registrierungslinks enthalten den Empfehlungscode `aff=xc9N`. Die Registrierung kann dem Repository-Inhaber zugeordnet werden, der Preis des Dienstes ändert sich dadurch nicht.

## Warum RelayRouter?

RelayRouter verbindet mehrere Modellanbieter über eine einzige OpenAI-kompatible API und reduziert wiederkehrende Integrationsarbeit.

| Funktion | Vorteil |
| --- | --- |
| Einheitliches API-Format | GPT, Claude, Gemini, DeepSeek, Qwen und weitere unterstützte Modelle über eine vertraute Schnittstelle. |
| Nutzungsbasierte Abrechnung | Bezahle die in der RelayRouter-Konsole erfasste Nutzung. |
| Zentrale Verwaltung | Verwalte Schlüssel, Modelle, Nutzung und Abrechnung an einem Ort. |
| Regionaler Zugang | Wähle Registrierungsseite und API-Adresse passend zu deinem Standort. |

## Schnellstart in 5 Minuten

### 1. Registrieren und API-Schlüssel erstellen

| Region | Registrierung | Übliche API Base URL |
| --- | --- | --- |
| Festlandchina | [relayrouter.app](https://relayrouter.app/register?aff=xc9N) | `https://api.relayrouter.app/v1` |
| Global | [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) | `https://api.relayrouter.ai/v1` |

Erstelle nach der Registrierung einen API-Schlüssel in der RelayRouter-Konsole. Zeigt die Konsole eine andere Adresse, verwende diesen Wert.

### 2. Projekt konfigurieren

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

Für Festlandchina verwende `https://api.relayrouter.app/v1`.

### 3. Anfrage ausführen

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Sofort ausführbare Beispiele

| Sprache | Datei | Befehl |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Dokumentation und Sicherheit

- [Ausführlicher Schnellstart](./docs/quickstart.md)
- [FAQ](./docs/faq.md)
- [Fehlerbehebung](./docs/troubleshooting.md)
- [Sicherheitsrichtlinie](./SECURITY.md)

Übertrage deinen API-Schlüssel niemals an Git. Bewahre ihn in `.env` oder im Secret Manager deiner Plattform auf.

<p align="center"><strong>Ein API-Schlüssel. Mehr Modelle. Weniger Integrationsarbeit.</strong></p>
