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

<p align="center">
  <img src="./assets/relayrouter-hero-de.png" alt="RelayRouter API – Schnellstart" width="100%">
</p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Bei relayrouter.app registrieren" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Bei relayrouter.ai registrieren" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-OpenAI%20compatible-2563eb" alt="OpenAI-kompatible API">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>Tipp:</strong> Die Anmeldung über Drittanbieter wird unterstützt. Wähle auf der Registrierungsseite unten Sign in und danach das Symbol für GitHub, Google oder Linux DO.

<!-- relayrouter-announcements:start -->
> [!IMPORTANT]
> **Neueste Ankündigungen · Automatisch synchronisiert**
>
> Die neuesten 5 RelayRouter-Ankündigungen:
>
> - `2026-11-18 17:08 (UTC+8)` — Modellveröffentlichung: doubao-seedream-5-5-261028
> - `2026-11-18 16:33 (UTC+8)` — Modellveröffentlichung: gpt-6.2-astra, gpt-6.2-sol
> - `2026-11-18 14:58 (UTC+8)` — Benachrichtigung: gemini-4-carbon anti Ressourcen sind knapp, das Modell wurde vorübergehend aus der anti Ressourcen-Gruppe entfernt
> - `2026-11-17 22:46 (UTC+8)` — Benachrichtigung: AWS-Gpt-1 Gruppenressourcen sind knapp, daher wird diese Ressourcen-Gruppe vorübergehend entfernt.
> - `2026-11-16 21:24 (UTC+8)` — Modellveröffentlichung: hy4-flash
>
> [RelayRouter öffnen und alle Ankündigungen ansehen →](https://relayrouter.app/register?aff=xc9N)
<!-- relayrouter-announcements:end -->

## Warum RelayRouter?

RelayRouter verbindet mehrere Modellanbieter über eine einzige OpenAI-kompatible API und reduziert wiederkehrende Integrationsarbeit.

| Funktion | Vorteil |
| --- | --- |
| Einheitliches API-Format | GPT, Claude, Gemini, DeepSeek, Qwen und weitere unterstützte Modelle über eine vertraute Schnittstelle. |
| Nutzungsbasierte Abrechnung | Bezahle die in der RelayRouter-Konsole erfasste Nutzung. |
| Zentrale Verwaltung | Verwalte Schlüssel, Modelle, Nutzung und Abrechnung an einem Ort. |
| Organisationsverwaltung | Erstelle eine Organisation, lade Mitglieder ein, verteile Guthaben und prüfe Nutzung und Übertragungen. |
| Flexible Verbindungsadressen | Wenn ein Client ein anderes `BASE_URL`-Format erwartet, probiere die angegebenen Adressen der Reihe nach. |

## Was möchtest du erreichen?

Wähle ein Ziel und springe direkt zur passenden Anleitung. Du musst nicht die gesamte Seite von oben nach unten lesen.

| Ziel | Ziel |
| --- | --- |
| **[Ersten API-Aufruf ausführen →](#first-api-call)**<br><sub>Etwa 5 Minuten · API-Schlüssel → BASE_URL → erste Anfrage</sub> | **[Code einlösen und Guthaben prüfen →](#redeem-code)**<br><sub>Etwa 2 Minuten · Guthaben einlösen und Kontostand prüfen</sub> |
| **[Team oder Organisation verwalten →](#organization-management)**<br><sub>Etwa 8 Minuten · Erstellen → einladen → verteilen → Nutzung prüfen</sub> | **[Client verbinden →](#client-integration)**<br><sub>ChatGPT, Claude, Cherry Studio, Gemini und DeepSeek Harness</sub> |

## Grundlegende Anleitungen

<a id="first-api-call"></a>
<details open>
<summary><strong>🔑 API-Schlüssel erstellen und erste Anfrage senden</strong></summary>

#### 1. Seite für API-Tokens öffnen

Öffne in der RelayRouter-Konsole links **API-Tokens** und wähle **API Key erstellen**.

`Konsole` → `API-Tokens` → **API Key erstellen**

#### 2. Einen Routing-Modus auswählen

| ⚡ Intelligentes Routing (Empfohlen) | ☷ Eigene Modellgruppen |
| --- | --- |
| Aktiviere **Intelligentes Routing**. | Deaktiviere **Intelligentes Routing**. |
| Wähle für den ersten Schlüssel **Intelligent automatisch**. | Wähle eine oder mehrere Modellgruppen; ihre Reihenfolge bestimmt die Priorität. |

#### 3. Schlüssel erstellen und speichern

Gib einen Token-Namen ein, lasse nicht benötigte erweiterte Optionen auf den Standardwerten und wähle **Hinzufügen**.

> [!WARNING]
> Der vollständige API-Schlüssel wird nur einmal angezeigt. Kopiere und speichere ihn direkt nach der Erstellung sicher; nach dem Schließen des Fensters kann der vollständige Schlüssel nicht erneut angezeigt werden.

`API Key`　`sk-****************************`　**Schlüssel kopieren**

#### 4. Modelltest öffnen

Wähle ein verfügbares Modell, öffne seine Details und wechsle zu **Testen**.

`Modellkatalog` → `Details anzeigen` → `Testen` → `Einstellungen`

#### 5. Abrechnungstoken wählen und senden

Wähle unter **Einstellungen** den gerade erstellten API-Schlüssel als **Abrechnungstoken**, gib eine Frage ein und sende sie.

> [!TIP]
> Sobald eine Modellantwort erscheint, ist die erste Anfrage abgeschlossen.

</details>

<a id="redeem-code"></a>
<details>
<summary><strong>🎁 Code einlösen und Guthaben prüfen</strong></summary>

#### 1. Guthabenkonto öffnen

Melde dich in der RelayRouter-Konsole an und wähle links **Guthabenkonto**.

#### 2. Code-Eingabe öffnen

Wähle **Code einlösen** neben dem aktuellen Guthaben.

#### 3. Code eingeben und bestätigen

Prüfe das aktuelle Konto, gib den Code ein und sende ihn nach Bestätigung der Angaben.

#### 4. Aktualisierung des Guthabens prüfen

Kehre zu **Guthabenkonto** zurück und prüfe das aktuelle Guthaben oder den Aufladeeintrag.

> [!IMPORTANT]
> Für Online-Aufladungen auf der RelayRouter-Hauptseite können nur Rechnungen im internationalen Format ausgestellt werden; chinesische Inlandsrechnungen sind nicht verfügbar. Wenn du eine chinesische Inlandsrechnung benötigst, [kontaktiere den Support](#contact-support).

</details>

<a id="organization-management"></a>
<details>
<summary><strong>👥 Organisationsmitglieder und Nutzung verwalten</strong></summary>

#### 1. Meine Organisation öffnen

Öffne links **Meine Organisation**, um Mitglieder, Guthaben und verfügbare Aktionen zu sehen.

`Konsole` → `Meine Organisation` → `Organisationsmitglieder`

#### 2. Mitglied einladen

Wähle **Mitglied einladen**, gib die E-Mail-Adresse ein und sende die Einladung.

`member@example.com`　**Mitglied einladen**

#### 3. Guthaben an ein Mitglied übertragen

Wähle **Übertragen** neben dem Zielmitglied, prüfe Mitglied und Betrag und bestätige.

| Benutzer-ID | Benutzer | Guthaben | Aktion |
| --- | --- | --- | --- |
| `ID: ******` | Mitglied A | Ausgeblendet | **Übertragen** |
| `ID: ******` | Organisationsinhaber | Ausgeblendet | — |

`Empfänger: Mitglied A (Guthaben ausgeblendet)`　`Betrag: Übertragungsbetrag eingeben`　**Übertragung bestätigen**

#### 4. Nutzung und Übertragungen prüfen

Unter **Nutzung** siehst du den Verbrauch der Mitglieder; unter **Übertragungsverlauf** prüfst du Empfänger, Betrag und Zeitpunkt der Guthabenzuweisungen.

> [!CAUTION]
> Prüfe Mitgliedskonto und Betrag vor einer Übertragung. Kontrolliere vor dem Entfernen eines Mitglieds oder dem Auflösen der Organisation verbleibende Guthaben und aktive Arbeitslasten.

</details>

<a id="client-integration"></a>
## Anleitungen zur Client-Integration

Ein Client kann eine Basis-URL oder die vollständige Chat-Completions-Adresse verlangen. Beginne mit `https://api.relayrouter.app/v1` und nutze die [Schnellreferenz](#quick-reference), wenn ein anderes Format erwartet wird.

<details>
<summary><strong>ChatGPT-Verknüpfung</strong></summary>

Wähle in den Anbieter-Einstellungen einen benutzerdefinierten oder OpenAI-kompatiblen Dienst, trage RelayRouter-Schlüssel und Adresse ein und wähle ein unterstütztes Modell.

</details>

<details>
<summary><strong>Claude-Verknüpfung</strong></summary>

Wähle in den Anbieter-Einstellungen einen benutzerdefinierten oder OpenAI-kompatiblen Dienst, trage RelayRouter-Schlüssel und Adresse ein und wähle ein unterstütztes Modell.

</details>

<details open>
<summary><strong>Cherry Studio</strong></summary>

**API-Endpunkt:** `https://api.relayrouter.app/v1`

1. Füge in Cherry Studio einen benutzerdefinierten OpenAI-kompatiblen Anbieter hinzu.
2. Trage `BASE_URL` und deinen RelayRouter-API-Schlüssel ein.
3. Füge ein unterstütztes Modell hinzu, speichere die Konfiguration und sende eine Testnachricht.

</details>

<details>
<summary><strong>Gemini</strong></summary>

Richte für Gemini-Modelle über RelayRouter einen benutzerdefinierten OpenAI-kompatiblen Anbieter mit RelayRouter-Adresse und -Schlüssel ein und wähle eine unterstützte Gemini-Modellkennung.

</details>

<details>
<summary><strong>DeepSeek Harness</strong></summary>

Stelle den Anbieter auf einen OpenAI-kompatiblen Endpunkt, trage RelayRouter-`BASE_URL` und API-Schlüssel ein und teste die Verbindung mit einem unterstützten DeepSeek-Modell.

</details>

<a id="quick-reference"></a>
## Schnellreferenz

Verschiedene Clients können unterschiedliche `BASE_URL`-Formate benötigen. Probiere diese Adressen der Reihe nach:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Die SDK-Beispiele in diesem Repository verwenden standardmäßig `https://api.relayrouter.app/v1`. Wenn der Client die vollständige Adresse der Chat-Methode verlangt, verwende die dritte Option.

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

<a id="contact-support"></a>
<p align="center">
  <img src="./assets/customer-service-qr.png" alt="WeCom-Support-QR-Code" width="420">
</p>

<p align="center"><sub>Scanne den QR-Code, um unseren Supportkontakt hinzuzufügen. Wir laden dich anschließend in die Benutzergruppe ein, in der du weitere Fragen direkt stellen kannst.</sub></p>

</div>
