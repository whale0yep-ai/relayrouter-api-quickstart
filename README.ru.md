<p align="center">
  <a href="./README.zh-CN.md">中文</a> |
  <a href="./README.md">English</a> |
  <strong>Русский</strong> |
  <a href="./README.ko.md">한국어</a> |
  <a href="./README.ja.md">日本語</a> |
  <a href="./README.es.md">Español</a> |
  <a href="./README.de.md">Deutsch</a> |
  <a href="./README.id.md">Bahasa Indonesia</a>
</p>

<p align="center"><img src="./assets/relayrouter-hero.png" alt="Быстрый старт RelayRouter API" width="100%"></p>

<p align="center">
  <a href="https://relayrouter.app/register?aff=xc9N"><img src="./assets/register-app.svg" alt="Регистрация через relayrouter.app" height="48"></a>
  &nbsp;&nbsp;
  <a href="https://relayrouter.ai/register?aff=xc9N"><img src="./assets/register-ai.svg" alt="Регистрация через relayrouter.ai" height="48"></a>
</p>

> [!TIP]
> **Поддерживается вход через сторонние сервисы.** На странице регистрации нажмите **Sign in** внизу, затем выберите значок **GitHub**, **Google** или **Linux DO**.

> [!NOTE]
> Ссылки регистрации содержат реферальный код `aff=xc9N`. Регистрация может быть засчитана владельцу репозитория, но цена сервиса для вас не изменится.

## Почему RelayRouter?

RelayRouter предоставляет единый API, совместимый с OpenAI, для работы с несколькими поставщиками моделей.

| Возможность | Преимущество |
| --- | --- |
| Единый формат API | GPT, Claude, Gemini, DeepSeek, Qwen и другие поддерживаемые модели через знакомый интерфейс. |
| Оплата по использованию | Оплата фактического использования, записанного в консоли. |
| Централизованное управление | Ключи, модели, расход и оплата в одном месте. |
| Региональный доступ | Выбор подходящего сайта регистрации и API-адреса. |

## Быстрый старт за 5 минут

### 1. Регистрация и API-ключ

| Регион | Регистрация | Обычный API Base URL |
| --- | --- | --- |
| Материковый Китай | [relayrouter.app](https://relayrouter.app/register?aff=xc9N) | `https://api.relayrouter.app/v1` |
| Остальной мир | [relayrouter.ai](https://relayrouter.ai/register?aff=xc9N) | `https://api.relayrouter.ai/v1` |

После регистрации создайте API-ключ в консоли RelayRouter. Если адрес в консоли отличается, используйте значение из консоли.

### 2. Настройка

```bash
cp .env.example .env
```

```dotenv
RELAYROUTER_API_KEY=your_api_key_here
RELAYROUTER_BASE_URL=https://api.relayrouter.ai/v1
RELAYROUTER_MODEL=your_model_name
```

Для китайского API используйте `https://api.relayrouter.app/v1`.

### 3. Запуск

```bash
python -m pip install -r requirements.txt
python examples/python/chat.py
```

## Готовые примеры

| Язык | Файл | Команда |
| --- | --- | --- |
| Python | [`examples/python/chat.py`](./examples/python/chat.py) | `python examples/python/chat.py` |
| JavaScript | [`examples/javascript/chat.mjs`](./examples/javascript/chat.mjs) | `node examples/javascript/chat.mjs` |
| PowerShell | [`examples/powershell/request.ps1`](./examples/powershell/request.ps1) | `pwsh examples/powershell/request.ps1` |

## Документация и безопасность

- [Подробный быстрый старт](./docs/quickstart.md)
- [Частые вопросы](./docs/faq.md)
- [Устранение неполадок](./docs/troubleshooting.md)
- [Политика безопасности](./SECURITY.md)

Никогда не добавляйте API-ключ в Git. Храните его в `.env` или в менеджере секретов платформы.

<p align="center"><strong>Один API-ключ. Больше моделей. Меньше интеграций.</strong></p>
