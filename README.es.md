<p align="center">
  <a href="./README.zh-CN.md">中文</a> |
  <a href="./README.md">English</a> |
  <a href="./README.ru.md">Русский</a> |
  <a href="./README.ko.md">한국어</a> |
  <a href="./README.ja.md">日本語</a> |
  <strong>Español</strong> |
  <a href="./README.de.md">Deutsch</a> |
  <a href="./README.id.md">Bahasa Indonesia</a>
</p>

<p align="center"><img src="./assets/relayrouter-hero.png" alt="Inicio rápido de la API de RelayRouter" width="100%"></p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Registrarse en relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Registrarse en relayrouter.ai" height="48"></a>
</p>

> [!TIP]
> **Se admite el inicio de sesión con terceros.** En la página de registro, selecciona **Sign in** en la parte inferior y luego el icono de **GitHub**, **Google** o **Linux DO**.

> [!NOTE]
> Los enlaces de registro incluyen el código de referido `aff=xc9N`. El registro puede atribuirse al propietario del repositorio, pero no cambia el precio del servicio.

## ¿Por qué RelayRouter?

RelayRouter ofrece una API compatible con OpenAI para varios proveedores de modelos y reduce el trabajo de integración repetido.

| Función | Ventaja |
| --- | --- |
| Un formato de API | Usa GPT, Claude, Gemini, DeepSeek, Qwen y otros modelos compatibles con una interfaz conocida. |
| Pago por uso | Paga por el consumo registrado en la consola de RelayRouter. |
| Gestión centralizada | Administra claves, modelos, consumo y facturación en un solo lugar. |
| Acceso regional | Elige el sitio de registro y la dirección de API adecuados para tu ubicación. |

## Inicio rápido en 5 minutos

### 1. Regístrate y crea una clave API

| Región | Registro | API Base URL habitual |
| --- | --- | --- |
| China continental | [relayrouter.app](https://relayrouter.app/register?aff=xc9N) | `https://api.relayrouter.app/v1` |
| Global | [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) | `https://api.relayrouter.ai/v1` |

Después del registro, crea una clave API en la consola de RelayRouter. Si la consola muestra otra dirección, usa ese valor.

### 2. Configura el proyecto

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

Para China continental, usa `https://api.relayrouter.app/v1`.

### 3. Ejecuta una solicitud

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Ejemplos listos para usar

| Lenguaje | Archivo | Comando |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Documentación y seguridad

- [Inicio rápido detallado](./docs/quickstart.md)
- [Preguntas frecuentes](./docs/faq.md)
- [Solución de problemas](./docs/troubleshooting.md)
- [Política de seguridad](./SECURITY.md)

No subas tu clave API a Git. Guárdala en `.env` o en el gestor de secretos de tu plataforma.

<p align="center"><strong>Una clave API. Más modelos. Menos integración.</strong></p>
