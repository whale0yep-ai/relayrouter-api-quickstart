<div lang="es" translate="no">

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
  <strong><a lang="es" translate="no" href="./README.es.md">Español (ES)</a></strong>
  &nbsp;|&nbsp;
  <a lang="de" translate="no" href="./README.de.md">Deutsch (DE)</a>
  &nbsp;|&nbsp;
  <a lang="id" translate="no" href="./README.id.md">Bahasa Indonesia (ID)</a>
</p>

<p align="center"><sub>Idioma actual: Español (ES). Si el texto aparece en otro idioma, desactiva la traducción automática para github.com.</sub></p>

<h1 align="center">Inicio rápido de la API de RelayRouter</h1>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Registrarse en relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Registrarse en relayrouter.ai" height="48"></a>
</p>

> 💡 <strong>Consejo:</strong> Se admite el inicio de sesión con terceros. En la página de registro, selecciona Sign in en la parte inferior y luego el icono de GitHub, Google o Linux DO.

## ¿Por qué RelayRouter?

RelayRouter ofrece una API compatible con OpenAI para varios proveedores de modelos y reduce el trabajo de integración repetido.

| Función | Ventaja |
| --- | --- |
| Un formato de API | Usa GPT, Claude, Gemini, DeepSeek, Qwen y otros modelos compatibles con una interfaz conocida. |
| Pago por uso | Paga por el consumo registrado en la consola de RelayRouter. |
| Gestión centralizada | Administra claves, modelos, consumo y facturación en un solo lugar. |
| Direcciones flexibles | Si un cliente espera otro formato de `BASE_URL`, prueba las direcciones indicadas en orden. |

## Inicio rápido en 5 minutos

### 1. Regístrate y crea una clave API

Elige cualquiera de estas páginas de registro:

- [relayrouter.app](https://relayrouter.app/register?aff=xc9N)
- [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N)

Después del registro, crea una clave API en la consola de RelayRouter.

### 2. Elige la dirección de conexión

Cada cliente puede requerir un formato de `BASE_URL` diferente. Prueba estas direcciones en orden:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Los ejemplos de SDK de este repositorio usan `https://api.relayrouter.app/v1` de forma predeterminada. Si el cliente solicita la dirección completa del método de chat, usa la tercera opción.

### 3. Configura el proyecto

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
RELAYROUTER_MODEL=your_model_name
```

### 4. Ejecuta una solicitud

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Ejemplos listos para usar

| Lenguaje | Archivo | Comando de ejecución |
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

</div>
