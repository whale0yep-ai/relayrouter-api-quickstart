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

<p align="center">
  <img src="./assets/relayrouter-hero-es.png" alt="Inicio rápido de la API de RelayRouter" width="100%">
</p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Registrarse en relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Registrarse en relayrouter.ai" height="48"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/API-OpenAI%20compatible-2563eb" alt="API compatible con OpenAI">
  <img src="https://img.shields.io/badge/Python-3.9%2B-3776ab" alt="Python 3.9+">
  <img src="https://img.shields.io/badge/JavaScript-Node.js-f7df1e" alt="Node.js">
  <img src="https://img.shields.io/badge/PowerShell-7%2B-5391fe" alt="PowerShell 7+">
</p>

> 💡 <strong>Consejo:</strong> Se admite el inicio de sesión con terceros. En la página de registro, selecciona Sign in en la parte inferior y luego el icono de GitHub, Google o Linux DO.

> [!IMPORTANT]
> **Resumen de avisos**
>
> Inicia sesión en la consola de RelayRouter y usa la campana de la esquina superior derecha para consultar nuevos modelos, cambios de precio, incidencias temporales, retiradas y campañas.
>
> [Abrir RelayRouter y ver los avisos →](https://relayrouter.app/register?aff=xc9N)

## ¿Por qué RelayRouter?

RelayRouter ofrece una API compatible con OpenAI para varios proveedores de modelos y reduce el trabajo de integración repetido.

| Función | Ventaja |
| --- | --- |
| Un formato de API | Usa GPT, Claude, Gemini, DeepSeek, Qwen y otros modelos compatibles con una interfaz conocida. |
| Pago por uso | Paga por el consumo registrado en la consola de RelayRouter. |
| Gestión centralizada | Administra claves, modelos, consumo y facturación en un solo lugar. |
| Gestión de organizaciones | Crea una organización, invita miembros, asigna saldo y revisa el consumo y las transferencias. |
| Direcciones flexibles | Si un cliente espera otro formato de `BASE_URL`, prueba las direcciones indicadas en orden. |

## ¿Qué quieres conseguir?

Elige un objetivo y ve directamente a su tutorial. No es necesario leer toda la página desde el principio.

| Objetivo | Objetivo |
| --- | --- |
| **[Realizar la primera llamada API →](#first-api-call)**<br><sub>Unos 5 minutos · Clave API → BASE_URL → primera solicitud</sub> | **[Canjear un código y consultar el saldo →](#redeem-code)**<br><sub>Unos 2 minutos · Canjea crédito y verifica el saldo</sub> |
| **[Gestionar un equipo u organización →](#organization-management)**<br><sub>Unos 8 minutos · Crear → invitar → asignar → revisar consumo</sub> | **[Conectar un cliente →](#client-integration)**<br><sub>ChatGPT, Claude, Cherry Studio, Gemini y DeepSeek Harness</sub> |

## Tutoriales básicos

<a id="first-api-call"></a>
<details open>
<summary><strong>🔑 Crear una clave API y realizar la primera solicitud</strong></summary>

1. Regístrate en [relayrouter.app](https://relayrouter.app/register?aff=xc9N) o [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N).
2. Abre **Tokens de API** en la consola de RelayRouter y crea y copia una clave nueva.
3. Crea el archivo local de variables de entorno:

   ```bash
   cp .env.example .env
   ```

4. Completa `.env`:

   ```dotenv
   RELAYROUTER_API_KEY=your_api_key_here
   RELAYROUTER_BASE_URL=https://api.relayrouter.app/v1
   RELAYROUTER_MODEL=your_model_name
   ```

5. Ejecuta el ejemplo de Python incluido:

   ```bash
   python -m pip install -r requirements.txt
   python examples/python/chat.py
   ```

</details>

<a id="redeem-code"></a>
<details>
<summary><strong>🎁 Canjear un código y comprobar el saldo</strong></summary>

1. Inicia sesión en la consola de RelayRouter.
2. Abre la opción de canje en el área de cuenta o fondos.
3. Introduce el código y confirma después de verificar la cuenta.
4. Vuelve a la cuenta de fondos y comprueba el saldo o el registro de la operación.

</details>

<a id="organization-management"></a>
<details>
<summary><strong>👥 Gestionar miembros y consumo de la organización</strong></summary>

1. Abre **Mi organización** y crea una organización o únete a ella.
2. Selecciona **Invitar miembro** y envía la invitación a la cuenta correspondiente.
3. Asigna o transfiere saldo desde la lista de miembros.
4. Revisa las pestañas **Consumo** y **Registros de transferencias** para controlar el uso y los movimientos de saldo.

> Concede acceso y saldo únicamente a cuentas de confianza.

</details>

<a id="client-integration"></a>
## Tutoriales de integración con clientes

Algunos clientes solicitan una URL base y otros la dirección completa de chat completions. Empieza con `https://api.relayrouter.app/v1` y consulta la [referencia rápida](#quick-reference) si el formato es distinto.

<details>
<summary><strong>Acceso directo de ChatGPT</strong></summary>

En la configuración del proveedor, elige un servicio personalizado o compatible con OpenAI, introduce la clave y la dirección de RelayRouter y selecciona un modelo compatible.

</details>

<details>
<summary><strong>Acceso directo de Claude</strong></summary>

En la configuración del proveedor, elige un servicio personalizado o compatible con OpenAI, introduce la clave y la dirección de RelayRouter y selecciona un modelo compatible.

</details>

<details open>
<summary><strong>Cherry Studio</strong></summary>

**Endpoint de API:** `https://api.relayrouter.app/v1`

1. Añade un proveedor personalizado compatible con OpenAI en Cherry Studio.
2. Introduce el `BASE_URL` y la clave API de RelayRouter.
3. Añade un modelo compatible, guarda la configuración y envía un mensaje de prueba.

</details>

<details>
<summary><strong>Gemini</strong></summary>

Para usar modelos Gemini mediante RelayRouter, configura un proveedor personalizado compatible con OpenAI con la dirección y la clave de RelayRouter y selecciona un identificador Gemini compatible.

</details>

<details>
<summary><strong>DeepSeek Harness</strong></summary>

Configura el proveedor como endpoint compatible con OpenAI, introduce el `BASE_URL` y la clave de RelayRouter y prueba la conexión con un modelo DeepSeek compatible.

</details>

<a id="quick-reference"></a>
## Referencia rápida

Cada cliente puede requerir un formato de `BASE_URL` diferente. Prueba estas direcciones en orden:

1. `https://api.relayrouter.app`
2. `https://api.relayrouter.app/v1`
3. `https://api.relayrouter.app/v1/chat/completions`

Los ejemplos de SDK de este repositorio usan `https://api.relayrouter.app/v1` de forma predeterminada. Si el cliente solicita la dirección completa del método de chat, usa la tercera opción.

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
