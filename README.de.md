<div lang="de" translate="no">

<p align="center">
  <a lang="zh-CN" translate="no" href="./README.zh-CN.md">中文 (ZH)</a>
  &nbsp;|&nbsp;
  <a lang="en" translate="no" href="./README.md">English (EN)</a>
  &nbsp;|&nbsp;
  <a lang="ru" translate="no" href="./README.ru.md">Русский (RU)</a>
  &nbsp;|&nbsp;
  <a lang="ko" translate="no" href="./README.ko.md">한국어 (KO)</a>
  &nbsp;|&nbsp;
  <a lang="ja" translate="no" href="./README.ja.md">日本語 (JA)</a>
  &nbsp;|&nbsp;
  <a lang="es" translate="no" href="./README.es.md">Español (ES)</a>
  &nbsp;|&nbsp;
  <strong><a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a></strong>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>Aktuelle Sprache: Deutsch (DE). Falls der Text in einer anderen Sprache erscheint, deaktiviere die automatische Übersetzung für github.com.</sub></p>

<h1 align="center">RelayRouter API – Schnellstart</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Bei relayrouter.app registrieren" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Bei relayrouter.ai registrieren" height="48"></a>
</p>

> 💡 <strong>Tipp:</strong> Die Anmeldung über Drittanbieter wird unterstützt. Wähle auf der Registrierungsseite unten Sign in und danach das Symbol für GitHub, Google oder Linux DO.

> ℹ️ <strong>Hinweis:</strong> Die Registrierungslinks enthalten den Empfehlungscode `aff=xc9N`. Die Registrierung kann dem Repository-Inhaber zugeordnet werden, der Preis des Dienstes ändert sich dadurch nicht.

## Warum RelayRouter?

RelayRouter verbindet mehrere Modellanbieter über eine einzige OpenAI-kompatible API und reduziert wiederkehrende Integrationsarbeit.

| Funktion | Vorteil |
| --- | --- |
| Einheitliches API-Format | GPT, Claude, Gemini, DeepSeek, Qwen und weitere unterstützte Modelle über eine vertraute Schnittstelle. |
| Nutzungsbasierte Abrechnung | Bezahle die in der RelayRouter-Konsole erfasste Nutzung. |
| Zentrale Verwaltung | Verwalte Schlüssel, Modelle, Nutzung und Abrechnung an einem Ort. |
| Flexible Verbindungsadressen | Wenn ein Client ein anderes `BASE_URL`-Format erwartet, probiere die angegebenen Adressen der Reihe nach. |

## Schnellstart in 5 Minuten

### 1. Registrieren und API-Schlüssel erstellen

Wähle eine der beiden Registrierungsseiten:

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

Erstelle anschließend einen API-Schlüssel in der RelayRouter-Konsole.

### 2. Verbindungsadresse auswählen

Verschiedene Clients können unterschiedliche `BASE_URL`-Formate benötigen. Probiere diese Adressen der Reihe nach:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Die SDK-Beispiele in diesem Repository verwenden standardmäßig `https://api.relayrouter.app/v1`. Wenn der Client die vollständige Adresse der Chat-Methode verlangt, verwende die dritte Option.

### 3. Projekt konfigurieren

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. Anfrage ausführen

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Sofort ausführbare Beispiele

| Sprache | Datei | Ausführungsbefehl |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Dokumentation und Sicherheit

- [Ausführlicher Schnellstart](./docs/quickstart.md)
- [Häufige Fragen](./docs/faq.md)
- [Fehlerbehebung](./docs/troubleshooting.md)
- [Sicherheitsrichtlinie](./SECURITY.md)

Übertrage deinen API-Schlüssel niemals an Git. Bewahre ihn in `.env` oder im Secret Manager deiner Plattform auf.

<p align="center"><strong>Ein API-Schlüssel. Mehr Modelle. Weniger Integrationsarbeit.</strong></p>

</div>
